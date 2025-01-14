import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import "./IconAnimation.css"; // CSS file for styling

const SocialIcons = () => {
    return (
        <div className="icon-container">
            <a
                href="https://github.com/dhairya9622e"
                target="_blank"
                rel="noopener noreferrer"
                className="icon github"
            >
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
                href="https://linkedin.com/in/dhairyagajjar190"
                target="_blank"
                rel="noopener noreferrer"
                className="icon linkedin"
            >
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="icon email"
            >
                <FontAwesomeIcon icon={faPhone} />
            </a>
        </div>
    );
};

export default SocialIcons;
