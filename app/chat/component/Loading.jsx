// src/components/AdvancedLoader.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './loader.css'; // Import the corresponding CSS

const AdvancedLoader = ({ size = 6, colorA = '#000000', colorB = '#7e7e7e', colorC = '#686868', colorD = '#000000' }) => {
    // Inline styles to adjust the size based on props
    const loaderStyle = {
        width: `${size}em`,
        height: `${size}em`,
    };

    return (
        <svg viewBox="0 0 240 240" height={size * 40} width={size * 40} className="pl" style={loaderStyle}>
            <circle
                strokeLinecap="round"
                strokeDashoffset="-330"
                strokeDasharray="0 660"
                strokeWidth="20"
                stroke={colorA}
                fill="none"
                r="105"
                cy="120"
                cx="120"
                className="pl__ring pl__ring--a"
            ></circle>
            <circle
                strokeLinecap="round"
                strokeDashoffset="-110"
                strokeDasharray="0 220"
                strokeWidth="20"
                stroke={colorB}
                fill="none"
                r="35"
                cy="120"
                cx="120"
                className="pl__ring pl__ring--b"
            ></circle>
            <circle
                strokeLinecap="round"
                strokeDasharray="0 440"
                strokeWidth="20"
                stroke={colorC}
                fill="none"
                r="70"
                cy="120"
                cx="85"
                className="pl__ring pl__ring--c"
            ></circle>
            <circle
                strokeLinecap="round"
                strokeDasharray="0 440"
                strokeWidth="20"
                stroke={colorD}
                fill="none"
                r="70"
                cy="120"
                cx="155"
                className="pl__ring pl__ring--d"
            ></circle>
        </svg>
    );
};

AdvancedLoader.propTypes = {
    size: PropTypes.number, // Size in em units
    colorA: PropTypes.string, // Color for ring A
    colorB: PropTypes.string, // Color for ring B
    colorC: PropTypes.string, // Color for ring C
    colorD: PropTypes.string, // Color for ring D
};

export default AdvancedLoader;
