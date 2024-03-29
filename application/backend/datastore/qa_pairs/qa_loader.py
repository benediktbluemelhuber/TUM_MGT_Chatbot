import psycopg
from psycopg import sql
import os
import csv
from dotenv import load_dotenv, find_dotenv
#import random

load_dotenv(find_dotenv())

host = "som-postgres.postgres.database.azure.com"
dbname = "questions_answers"
user = os.environ.get("POSTGRES_USER")
password = os.environ.get("POSTGRES_PASSWORD")

# Connection String
conn_string = "host={0} user={1} dbname={2} password={3}".format(
    host, user, dbname, password
)

csv_file_path='cleaned_questions_answers.csv'

class PostgresLoader:
    """Class to load CSV data into a Postgres database."""
    """Class to get data from a Postgres database based on study program and language."""

    def __init__(self, csv_file_path: str = "", table_name: str = "qa_pairs"):
        self.csv_file_path = csv_file_path
        self.table_name = table_name
        self.connection = self.connect_to_db()

        if self.connection:
            self.cursor = self.connection.cursor()
            self._create_table_if_not_exists()
        
    def connect_to_db(self):
        try:
            connection = psycopg.connect(conn_string)
            return connection
        except psycopg.OperationalError as error:
            print(f"Database connection failed due to {error}")
            return None

    def _create_table_if_not_exists(self) -> None:
        create_table_query = f"""CREATE TABLE IF NOT EXISTS {self.table_name} (
            id SERIAL PRIMARY KEY,
            program VARCHAR(255),
            language VARCHAR(255),
            question TEXT,
            answer TEXT
        );"""
        self.cursor.execute(create_table_query)
        self.connection.commit()

    def load_csv_data(self) -> None:
        with open(self.csv_file_path, mode='r', encoding='utf-8') as file:
            reader = csv.DictReader(file)
            for row in reader:
                insert_query = sql.SQL("INSERT INTO {} (program, language, question, answer) VALUES (%s, %s, %s, %s)").format(sql.Identifier(self.table_name))
                self.cursor.execute(insert_query, (row['program'], row['language'], row['question'], row['answer']))
            self.connection.commit()


    def get_data(self, program: str, language: str) -> list:
        select_query = sql.SQL("SELECT * FROM {} WHERE program = %s AND language = %s").format(sql.Identifier(self.table_name))
        self.cursor.execute(select_query, (program, language))
        return self.cursor.fetchall()
    

    def close_connection(self):
        if self.cursor:
            self.cursor.close()
        if self.connection:
            self.connection.close()


""" if __name__ == "__main__":

    language = "English"
    degree_program = "BMT"

    postgres_qa = PostgresLoader()
    qa_pairs = postgres_qa.get_data(degree_program, language)
    print(qa_pairs)

    few_shot_questions = '\n\n'.join(
        [f"Question: {qa[3]}\n\n Answer: {qa[4]}" for qa in random.sample(qa_pairs, 2)]
    )

    print("-----------------")
    print(few_shot_questions)

    postgres_qa.close_connection() """
