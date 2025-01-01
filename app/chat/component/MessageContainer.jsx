// components/component/MessageContainer.jsx
import { UserMessage } from './UserMessage';
import { ServerMessage } from './ServerMessage';

export function MessageContainer({ messages }) {
    return (
        <div className="flex flex-col gap-2 mx-auto max-w-3xl w-full">
            {messages.map((message, index) => {
                if (message.type === 'user') {
                    return <UserMessage key={index} text={message.text} />;
                } else {
                    return <ServerMessage key={index} text={message.text} />;
                }
            })}
        </div>
    );
}
