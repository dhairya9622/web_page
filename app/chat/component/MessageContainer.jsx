import React from 'react';
import { UserMessage } from './UserMessage';
import { ServerMessage } from './ServerMessage';
import TypingLoader from "@/app/chat/component/Loading";

export function MessageContainer({ messages }) {
    return (
        <div className="flex flex-col gap-2 mx-auto max-w-3xl w-full">
            {messages.map((message, index) => {
                if (message.type === 'user') {
                    return <UserMessage key={index} text={message.text} />;
                } else if (message.type === 'server') {
                    return <ServerMessage key={index} text={message.text} />;
                } else if (message.type === 'loading') {
                    // Render a loader for "loading" messages
                    return (
                        <div key={index} className="text-center text-gray-500">
                        <TypingLoader/>
                        </div>
                    );
                } else {
                    return null; // Handle any unexpected message types gracefully
                }
            })}
        </div>
    );
}
