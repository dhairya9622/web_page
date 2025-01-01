// src/app/chat/component/MessageContainer.jsx
import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { UserMessage } from './UserMessage';
import { ServerMessage } from './ServerMessage';
import TypingLoader from "@/app/chat/component/Loading"; // Adjust the path as necessary
import './MessageContainer.css'; // Import the transition styles


// src/app/chat/component/MessageContainer.jsx
export function MessageContainer({ messages }) {
    return (
        <div className="flex flex-col gap-2 mx-auto max-w-3xl w-full">
            <TransitionGroup>
                {messages.map((message, index) => {
                    let messageElement = null;

                    if (message.type === 'user') {
                        messageElement = <UserMessage key={message.id} text={message.text} />;
                    } else if (message.type === 'server') {
                        messageElement = <ServerMessage key={message.id} text={message.text} />;
                    } else if (message.type === 'loading') {
                        messageElement = (
                            <div key={message.id} className="text-center text-gray-500">
                                <TypingLoader />
                            </div>
                        );
                    }

                    return (
                        messageElement && (
                            <CSSTransition
                                key={message.id}
                                timeout={300}
                                classNames="message"
                            >
                                {messageElement}
                            </CSSTransition>
                        )
                    );
                })}
            </TransitionGroup>
        </div>
    );
}
