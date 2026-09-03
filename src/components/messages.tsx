import { Inbox } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import Message from "./message";

export interface Message {
  _id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

function Messages({ messages }: { messages: Message[] }) {
  if (messages.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <Inbox className="h-12 w-12 text-muted-foreground mb-4" />
        <h3 className="text-lg font-medium">No messages found</h3>
        <p className="text-muted-foreground">
          There are no messages matching your current filters.
        </p>
      </div>
    );
  }

  return (
    <AnimatePresence>
      <div className="space-y-4">
        {messages.map((message, index) => (
          <Message message={message} key={message?._id || index} />
        ))}
      </div>
    </AnimatePresence>
  );
}

export default Messages;
