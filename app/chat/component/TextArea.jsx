import React from "react";

export function TextArea({ value, onChange, onKeyDown }) {
  return (
    <textarea
      className="flex-1 rounded-full bg-transparent px-4 py-2
                text-white font-sans
                resize-none overflow-y-auto focus:outline-none focus:ring-0"
      placeholder="Ask my AI assistant!"
      rows={1}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
}
