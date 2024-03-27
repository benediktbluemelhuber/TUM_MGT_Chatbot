import { type Message } from "ai";

import { Separator } from "./ui/separator";
import { ChatMessage } from "./chat-message";
import { ChatFeedback } from "./chat-feedback";

export interface ChatList {
  messages: Message[];
  isTriggerFeedback: boolean;
}

export function ChatList({ messages, isTriggerFeedback }: ChatList) {
  if (!messages.length) return null;
  return (
    <>
      <div className="relative mx-auto max-w-3xl px-4">
        {messages.map((message, index) => (
          <div key={index}>
            <ChatMessage message={message} />

            {index < messages.length - 1 && (
              <Separator className="my-4 md:my-8" />
            )}
          </div>
        ))}
      </div>
      <div className="flex w-full justify-center">
        {!isTriggerFeedback ? <ChatFeedback /> : null}
      </div>
    </>
  );
}
