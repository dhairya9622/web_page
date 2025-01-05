"use client";
import { ReactTyped } from "react-typed";
import Image from "next/image";

export function ServerMessage({ text }) {
  return (
    <div className="flex justify-start w-full">
      <div
        className="flex rounded-tl-lg rounded-tr-lg rounded-br-lg bg-[#1e3a57]
        px-4 py-4 text-white shadow-md max-w-xs break-words"
      >
        <Image
          src={"/assets/bot.png"}
          width={20}
          height={20}
          className="object-contain filter invert brightness-0 mr-4"
        />
        <p className="font-sans">
          <ReactTyped strings={[text]} typeSpeed={20} cursorChar={""} />
        </p>
      </div>
    </div>
  );
}
