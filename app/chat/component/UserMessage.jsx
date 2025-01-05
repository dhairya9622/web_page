// components/component/UserMessage.jsx
export function UserMessage({ text }) {
    return (
        <div className="flex justify-end w-full">
            <div className="rounded-tl-lg rounded-tr-lg
                rounded-br-lg bg-gradient-to-r from-[#2b3546] to-[#1a2d43] px-4 py-3 text-white
                shadow-md max-w-xs break-words">
                <p className="font-sans">{text}</p>
            </div>
        </div>
    );
}
