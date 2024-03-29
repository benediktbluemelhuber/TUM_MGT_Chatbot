from langchain_openai import AzureChatOpenAI
from langchain_core.output_parsers import JsonOutputParser
from application.backend.chatbot.prompts import (
    FIRST_FILTER_PROMPT,
    FEEDBACK_TRIGGER_PROMPT,
)
from application.backend.datastore.qa_pairs.qa_loader import PostgresLoader
from typing import List
import random, os
from langchain_core.prompts import ChatPromptTemplate
from langchain.schema import StrOutputParser, Document, format_document


openai_api_key = os.getenv("AZURE_OPENAI_API_KEY")
azure_endpoint = os.getenv("AZURE_OPENAI_ENDPOINT")
llm = AzureChatOpenAI(
    openai_api_version="2023-05-15",
    deployment_name="ChatbotMGT",
    azure_endpoint=azure_endpoint,
    openai_api_key=openai_api_key,
)


def parse_and_filter_question(
    question: str, history: List, llm: AzureChatOpenAI
) -> dict:
    """
    Invokes the language model with a filter prompt, parses the JSON response,
    and determines the response based on 'is_tum' and 'is_sensitive' fields.

    :param question: The question to be processed.
    :param llm: An instance of AzureChatOpenAI to use for invoking the language model.
    :return: A dictionary containing the answer and filtering decision. Additionally the language is returned if no filtering is applied.
    """
    json_parser = JsonOutputParser()
    filter_prompt = FIRST_FILTER_PROMPT.format(history=history, question=question)
    response = llm.invoke(filter_prompt)
    parsed_response = json_parser.parse(response.content)

    if not parsed_response.get("is_tum", True):
        print("Not TUM related")
        answer = "I'm sorry, I can't answer that question. Please ask me about TUM School of Management."
        prompt = ChatPromptTemplate.from_template(
            """You are specialized chatbot at the TUM School of Management providing the students relevant answers to their study related questions. A function was triggered that symbolized that the question was not related to any 
                                                  Study specific questions. 
                                                  Please provide the user an understandable answer to the question and ask the user to ask a question related to the TUM School of Management.
                                                  The following question was asked: {question}
                                                  Answer it in the language of the question. So it should probably be in English or German."""
        )

        chain = prompt | llm | StrOutputParser()

        answer = chain.invoke({"question": question})

        return {"answer": answer, "decision": "stop"}
    elif parsed_response.get("is_sensitive", False):
        print("Sensitive data")
        answer = "I'm sorry, I can't answer that question. Make sure to not include any sensitive data in your inquiry or contact the SOM directly."
        return {"answer": answer, "decision": "stop"}

    language = parsed_response.get("language", "English")

    keywords = parsed_response.get("keywords", "")

    return {"answer": None, "decision": "continue", "language": language, "keywords": keywords}


def get_qa_pairs(degree_program: str, language: str) -> str:
    """
    Returns a string of few-shot QA pairs for the given degree program and language.

    :param degree_program: The degree program to get few-shot QA pairs for.
    :param language: The language to get few-shot QA pairs for.
    :return: A string of few-shot QA pairs.
    """

    postgres_qa = PostgresLoader()
    qa_pairs = postgres_qa.get_data(degree_program, language)
    postgres_qa.close_connection()

    num_to_sample = min(len(qa_pairs), 2)

    few_shot_qa_pairs = (
        "\n\n".join(
            [
                f"Question: {qa_pair[3]}\n Answer: {qa_pair[4]}"
                for qa_pair in random.sample(qa_pairs, num_to_sample)
            ]
        )
        if num_to_sample > 0
        else "No few-shot examples available."
    )

    return few_shot_qa_pairs


def get_feedback_trigger(question: str, answer: str, llm: AzureChatOpenAI) -> dict:
    """
    Invokes the language model with a feedback trigger prompt and parses the JSON response.

    :param question: The question to be processed.
    :param answer: The answer to the question.
    :param llm: An instance of AzureChatOpenAI to use for invoking the language model.
    :return: A dictionary containing the feedback trigger.
    """

    json_parser = JsonOutputParser()
    feedback_prompt = FEEDBACK_TRIGGER_PROMPT.format(question=question, answer=answer)
    response = llm.invoke(feedback_prompt)
    feedback_trigger = json_parser.parse(response.content)

    return feedback_trigger
