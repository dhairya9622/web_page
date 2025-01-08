"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const EnhancedForm = () => {
    const [email, setEmail] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Optional: handle the email value before redirect if needed
        router.push("/chat");
    };

    return (
        <div
            className={`
                flex
                justify-center
                items-center
                min-h-screen
                transition-all
                duration-700
                ${
                isLoaded
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-5 scale-95"
            }
            `}
        >
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
                            border-sky-400
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
                                shadow-sky-400
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
                        &gt;&gt;&gt;
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EnhancedForm;
