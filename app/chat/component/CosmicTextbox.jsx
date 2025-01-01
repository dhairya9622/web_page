// src/components/Textbox.jsx
import React from 'react';
import './chat.module.css';

export function CosmicTextbox({ value, onChange, onKeyDown, placeholder }) {
    return (
        <div id="main" className="relative">
            <input
                className="input"
                type="text"
                value={value}
                onChange={onChange}
                onKeyDown={onKeyDown}
                placeholder={placeholder || "Type here..."}
            />
            <div id="input-mask"></div>
            <div id="cosmic-glow"></div>
        </div>
    );
}
