import React, { useState } from 'react';
import Button2 from "@/components/Button2";

const EnhancedForm = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Submitted: ${email}`);
    };

    return (
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
        from-slate-800
        to-slate-900
        text-white
        overflow-hidden
      "
        >
            {/* Decorative before/after elements */}
            <div className="
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
                <span className="font-extrabold text-2xl">We’d love to keep in touch!</span>
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
              bg-slate-800
              border
              border-blue-700
              text-white
              placeholder-blue-300
              focus:ring-blue-400
              focus:border-blue-400
              outline-none
              ring-0
            "
                    />
                </label>
                <Button2>
                    Submit
                </Button2>
            </div>
        </form>
    );
};

export default EnhancedForm;
