import React from "react";
import "@/app/globals.css"; // Import the CSS

const Button85 = ({ text, onClick }) => {
    return (
        <button className="button-85" onClick={onClick} role="button">
            {text}
        </button>
    );
};

export default Button85;