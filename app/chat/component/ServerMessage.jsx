"use client";
import { ReactTyped } from "react-typed";
import Image from "next/image";

export function ServerMessage({ text }) {
  return (
    <div className="flex justify-start items-start w-full">
      <Image
        src={"/assets/robot.png"}
        width={30}
        height={30}
        className="object-contain mr-4 mt-2"
      />
      <div
        className="flex rounded-tl-lg rounded-tr-lg rounded-br-lg bg-[#1e3a57]
        px-4 py-4 text-white shadow-md max-w-xs break-words"
      >
        <p className="font-sans">
          <ReactTyped strings={[text]} typeSpeed={20} cursorChar={""} />
        </p>
      </div>
    </div>
  );
}
