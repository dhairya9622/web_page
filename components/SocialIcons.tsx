import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

interface SocialIconsProps {
    onContactClick?: () => void;
}

const SocialIcons: React.FC<SocialIconsProps> = ({ onContactClick }) => {
    const handleScroll = (id: string) => {
        const target = document.getElementById(id);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="flex items-center justify-center space-x-8 py-4">
            {/* GitHub */}
            <a
                href="https://github.com/dhairya9622"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="Visit GitHub Profile"
                className="
          text-gray-400
          transition
          transform
          hover:scale-110
          hover:text-purple-400
          hover:shadow-[0_0_10px_#8B5CF6]
          focus:outline-none
          focus:ring-2
          focus:ring-offset-2
          focus:ring-purple-400
          rounded-full
          px-2
          py-2
        "
            >
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>

            {/* LinkedIn */}
            <a
                href="https://linkedin.com/in/dhairyagajjar190"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="Visit LinkedIn Profile"
                className="
          text-gray-400
          transition
          transform
          hover:scale-110
          hover:text-purple-400
          hover:shadow-[0_0_10px_#8B5CF6]
          focus:outline-none
          focus:ring-2
          focus:ring-offset-2
          focus:ring-purple-400
          rounded-full
          px-2
          py-2
        "
            >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>

            {/* Contact (Phone) */}
            <button
                onClick={(e) => {
                    e.preventDefault();
                    handleScroll("contact");
                    onContactClick?.();
                }}
                aria-label="Contact"
                title="Scroll to Contact Section"
                className="
          text-gray-400
          transition
          transform
          hover:scale-110
          hover:text-purple-400
          hover:shadow-[0_0_10px_#8B5CF6]
          focus:outline-none
          focus:ring-2
          focus:ring-offset-2
          focus:ring-purple-400
          rounded-full
          px-2
          py-2
        "
            >
                <FontAwesomeIcon icon={faPhone} size="2x" />
            </button>
        </div>
    );
};

export default SocialIcons;
