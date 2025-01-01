// components/component/UserMessage.jsx
export function UserMessage({ text }) {
    return (
        <div className="flex justify-end w-full">
            <div className="rounded-tl-lg rounded-tr-lg
                rounded-br-lg bg-[#1e3a57] px-4 py-3 text-white
                shadow-md max-w-xs break-words">
                <p className="font-sans">{text}</p>
            </div>
        </div>
    );
}
