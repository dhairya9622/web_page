import React, { useState, useEffect } from 'react';
import { UserMessage } from './UserMessage';
import { ServerMessage } from './ServerMessage';
import TypingLoader from "@/app/chat/component/Loading";

export function MessageContainer({ messages }) {
    const [visibleMessages, setVisibleMessages] = useState([]);

    useEffect(() => {
        // Handle transition effects between loader and server response
        const updatedMessages = [...messages];
        setVisibleMessages(updatedMessages);
    }, [messages]);

    return (
        <div className="flex flex-col gap-2 mx-auto max-w-3xl w-full">
            {visibleMessages.map((message, index) => {
                if (message.type === 'user') {
                    return <UserMessage key={index} text={message.text} />;
                } else if (message.type === 'server') {
                    return (
                        <div key={index} className="fade-in">
                            <ServerMessage text={message.text} />
                        </div>
                    );
                } else if (message.type === 'loading') {
                    // Render a loader with fade-out transition
                    return (
                        <div key={index} className="fade-out text-center text-gray-500">
                            <TypingLoader />
                        </div>
                    );
                } else {
                    return null; // Handle any unexpected message types gracefully
                }
            })}
        </div>
    );
}
