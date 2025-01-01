import React from 'react';

export function TextArea({ value, onChange, onKeyDown }) {
    return (
        <textarea
            className="flex-1 rounded-full bg-transparent px-4 py-2
                text-white font-sans focus:outline-none focus:ring-
                2 focus:ring-[#071121] focus:ring-opacity-50
                resize-none overflow-y-auto
                shadow-[0_0_10px_rgba(255,255,255,0.1)]
                focus:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-shadow"
            placeholder="Ask my AI assistant!"
            rows={1}
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
        />
    );
}
