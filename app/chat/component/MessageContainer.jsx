import React, { useState, useEffect } from "react";
import { UserMessage } from "./UserMessage";
import { ServerMessage } from "./ServerMessage";
import Image from "next/image";
import CircleLoader from "@/app/chat/component/CircleLoader";

export function MessageContainer({ messages }) {
  const [visibleMessages, setVisibleMessages] = useState([]);

  useEffect(() => {
    // Handle transition effects between loader and server response
    const updatedMessages = [...messages];
    setVisibleMessages(updatedMessages);
  }, [messages]);

  return (
      <div className="flex flex-col gap-2 mx-auto max-w-3xl w-full">
        {visibleMessages.map((message, index) => {
          if (message.type === "user") {
            return <UserMessage key={message.id || index} text={message.text} />;
          } else if (message.type === "server") {
            return (
                <div key={message.id || index} className="fade-in">
                  <ServerMessage text={message.text} />
                </div>
            );
          } else if (message.type === "loading") {
            // Render a loader with fade-out transition
            return (
                <div key={`loading-${index}`} className="flex justify-start items-start w-full">
                  <Image
                      src={"/assets/robot.png"}
                      width={30}
                      height={30}
                      className="object-contain mr-4 mt-2"
                      alt="Robot"
                  />
                  <div
                      className="flex rounded-tl-lg rounded-tr-lg rounded-br-lg bg-[#1e3a57]
                                px-4 py-4 text-white shadow-md max-w-xs break-words"
                  >
                    <CircleLoader />
                  </div>
                </div>
            );
          } else {
            return null; // Handle any unexpected message types gracefully
          }
        })}
      </div>
  );
}
