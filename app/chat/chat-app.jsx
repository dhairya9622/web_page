import React, { useState, useEffect, useRef } from "react";
import { MessageContainer } from "@/app/chat/component/MessageContainer";
import { TextArea } from "@/app/chat/component/TextArea";
import "./chat-app.css";
import { v4 as uuidv4 } from "uuid";
import { SendIcon } from "lucide-react";

export function ChatApp() {
  const [messages, setMessages] = useState([
    {
      id: uuidv4(),
      type: "server",
      text: "Hello, how can I assist you today regarding our company and services?",
    },
  ]);
  const [userInput, setUserInput] = useState("");
  const [threadId, setThreadId] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false); // For the container fade-in
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Trigger initial fade-in
    setIsLoaded(true);

    const createThreadId = async () => {
      try {
        const response = await fetch("https://dev5.dhairya.io/createThread", {
          method: "GET",
        });
        if (!response.ok) {
          throw new Error(
              `Network response was not ok : ${response.statusText}`
          );
        }
        const data = await response.text();
        setThreadId(data);
      } catch (error) {
        console.error(error);
      }
    };
    createThreadId();
  }, []);

  const handleSendMessage = async () => {
    if (!userInput || userInput.trim() === "") return;

    const userMessage = { id: uuidv4(), type: "user", text: userInput };
    setMessages((prevMessages) => [
      ...prevMessages,
      userMessage,
      { id: uuidv4(), type: "loading" },
    ]);
    setUserInput("");

    try {
      const response = await fetch("https://dev5.dhairya.io/getResponse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: userInput || "",
          threadId: threadId,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.text();
      const lines = data
          .split("\n")
          .map((line) => line.trim())
          .filter((line) => line !== "");

      const serverMessages = lines.map((line) => ({
        id: uuidv4(),
        type: "server",
        text: line,
      }));

      // Add an artificial delay before updating messages
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages.slice(0, -1), // remove the loader
          ...serverMessages,
        ]);
      }, 2000);
    } catch (error) {
      console.error("Error:", error);
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages.slice(0, -1),
          {
            id: uuidv4(),
            type: "server",
            text: "Error: Could not get a response from the server.",
          },
        ]);
      }, 2000);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleKeyDown = async (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      await handleSendMessage();
    }
  };

  return (
      <div
          // Add our custom fade/slide container classes here
          className={`relative z-10 flex flex-col h-[94vh] chat-app-container ${
              isLoaded ? "loaded" : ""
          }`}
      >
        <div
            className="flex-1 overflow-y-auto px-6 py-4 custom-scrollbar"
            style={{ paddingBottom: "5rem" }}
        >
          <MessageContainer messages={messages} />
          <div ref={messagesEndRef} />
        </div>

        <div className="flex items-center justify-center p-4">
          <div className="fixed bottom-8 w-full max-w-4xl flex items-center px-3 justify-center">
            <div className="flex w-full max-w-3xl rounded-full bg-[#1e3a57] px-4 py-2">
              <TextArea
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  onKeyDown={handleKeyDown}
              />
              <button
                  className="ml-4 rounded-full bg-gradient-to-r from-[#1e2533] to-[#0f1a2b] px-4 py-2 text-white shadow-md transition-colors hover:bg-gradient-to-br hover:from-[#071121] hover:to-[#1e2533] focus:outline-none focus:ring-2 focus:ring-[#071121] focus:ring-opacity-50"
                  onClick={handleSendMessage}
              >
                <SendIcon className="h-4 w-4 transition-transform hover:scale-110 hover:brightness-125" />
              </button>
            </div>
          </div>
        </div>
      </div>
  );
}
