import React from "react";
import "@/app/globals.css"; // Import the CSS

const Button64 = ({ text, onClick }) => {
    return (
        <button className="button-64" onClick={onClick} role="button">
            {text}
        </button>
    );
};

export default Button64