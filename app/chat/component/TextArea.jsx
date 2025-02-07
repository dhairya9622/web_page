import React from "react";

export function TextArea({ value, onChange, onKeyDown }) {
  return (
      <textarea
          className="
            flex-1
            rounded-lg
            bg-gradient-to-r from-[#1e3a57] to-[#0b1b2e]
            px-4
            py-2
            text-white
            font-sans
            placeholder-gray-300
            resize-none
            overflow-y-auto
            focus:outline-none
            focus:ring-2
            focus:ring-[#5eead4]/50
            transition-colors
            duration-300
      "
          placeholder="Ask my AI assistant!"
          rows={1}
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
      />
  );
}
