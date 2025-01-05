import React from "react";
import "@/app/globals.css"; // Import the CSS

// Define the props type
interface Button85Props {
    text: string; // Specify the type for 'text'
    onClick: () => void; // Specify the type for 'onClick'
}

const Button85: React.FC<Button85Props> = ({ text, onClick }) => {
    return (
        <button className="button-85" onClick={onClick} role="button">
            {text}
        </button>
    );
};

export default Button85;
