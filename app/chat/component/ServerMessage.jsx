"use client";
import { ReactTyped } from "react-typed";
import Image from "next/image";

export function ServerMessage({ text }) {
    return (
        <div className="flex items-start w-full space-x-4">
            <div className="relative w-8 h-8 mt-2">
                <Image
                    src="/assets/robot.png"
                    alt="Server Avatar"
                    fill
                    className="object-contain"
                />
            </div>
            <div
                className="
          max-w-xs px-4 py-4 text-white
          bg-[#1e3a57]/60
          backdrop-blur-sm
          border border-white/10
          rounded-tl-lg rounded-tr-lg rounded-br-lg
          shadow-md break-words
        "
            >
                <p className="font-sans">
                    <ReactTyped strings={[text]} typeSpeed={20} cursorChar="" />
                </p>
            </div>
        </div>
    );
}
