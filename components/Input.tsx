"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const EnhancedForm = () => {
    const [email, setEmail] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(""); // State for error message

    const router = useRouter();

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        try {
            const response = await fetch("http://localhost:8080/api/verify-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                document.cookie = "emailValidated=true; path=/; max-age=3600";
                // Insert email before navigating
                await fetch("http://localhost:8080/api/insert-email", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email }),
                });

                // Navigate. Don't set isLoading to false so spinner remains until transition completes.
                router.push("/chat");
            } else {
                const errorData = await response.json();
                setError(errorData.message || "Invalid email. Please try again.");
                setIsLoading(false); // Only stop loading when there's an error
            }
        } catch (error : unknown) {
            console.error('Error:', error);
            setError("An error occurred during verification. Please try again.");
            setIsLoading(false); // Show form again if there's a network or unexpected error
        }
    };


    return (
        <div
            className={`flex justify-center items-center min-h-screen transition-all duration-700 ${
                isLoaded
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-5 scale-95"
            }`}
        >
            {isLoading ? (
                <div className="flex items-center justify-center h-screen">
                    <div className="relative">
                        <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
                        <div
                            className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin"
                        ></div>
                    </div>
                </div>
            ) : (
                <form
                    onSubmit={handleSubmit}
                    aria-label="Sign up form"
                    className="
                        relative
                        flex
                        flex-col
                        justify-around
                        w-96
                        h-44
                        p-4
                        rounded-xl
                        shadow-lg
                        border
                        border-blue-800
                        bg-gradient-to-br
                        from-gray-900
                        to-black
                        text-white
                        overflow-hidden
                        transition-all
                        duration-300
                        ease-in-out
                        hover:shadow-xl
                    "
                >
                    <div
                        className="
                            before:absolute
                            before:top-[-3rem]
                            before:right-4
                            before:w-32
                            before:h-32
                            before:rounded-full
                            before:bg-blue-600
                            before:blur-2xl
                            before:opacity-40
                            before:-z-10

                            after:absolute
                            after:bottom-[-3rem]
                            after:left-2
                            after:w-32
                            after:h-32
                            after:rounded-full
                            after:bg-blue-500
                            after:blur-2xl
                            after:opacity-30
                            after:-z-10
                        "
                    >
                        <span className="font-extrabold text-2xl tracking-wide">
                            We’d love to keep in touch!
                        </span>
                    </div>

                    <div className="flex gap-2">
                        <label className="w-full" htmlFor="email">
                            <span className="sr-only">Email</span>
                            <input
                                id="email"
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email..."
                                aria-required="true"
                                className="
                                    w-full
                                    p-2
                                    rounded-lg
                                    bg-gray-800
                                    border
                                    border-blue-700
                                    text-white
                                    placeholder-gray-400
                                    focus:ring-blue-400
                                    focus:border-blue-400
                                    outline-none
                                    ring-0
                                    transition-all
                                    duration-200
                                "
                            />
                        </label>
                        <button
                            type="submit"
                            className="
                                relative
                                px-4
                                py-2
                                rounded-md
                                border
                                bg-black
                                bg-gray-950
                                text-sky-400
                                font-medium
                                overflow-hidden
                                group
                                active:opacity-80
                                hover:brightness-150
                                outline-none
                                transition-all
                                duration-300
                            "
                        >
                            <span
                                className="
                                    bg-sky-400
                                    blue
                                    absolute
                                    -top-[150%]
                                    left-0
                                    inline-flex
                                    w-80
                                    h-[5px]
                                    rounded-md
                                    opacity-50
                                    group-hover:top-[150%]
                                    duration-500
                                    shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]
                                "
                            />
                            &gt;
                        </button>
                    </div>
                    {error && (
                        <p className="text-red-500 text-sm mt-2">{error}</p>
                    )}
                </form>
            )}
        </div>
    );
};

export default EnhancedForm;
