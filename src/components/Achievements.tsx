import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Achievements.scss";

const achievements: string[] = [
    "Won Chaitanya CTF (Offline)",
];

const Achievements: React.FC = () => {
    return (
        <div className="container" id="achievements">
            <div className="skills-container">
                <h1>Achievements</h1>

                <div className="skills-grid">
                    <div className="skill">
                        <FontAwesomeIcon icon={faTrophy} size="3x" />

                        <h3>Cybersecurity Achievements</h3>
                        <p>
                            Recognitions and milestones earned during my cybersecurity journey —
                            including CTF victories, competitions, and accomplishments.
                        </p>

                        <div className="flex-chips">
                            <span className="chip-title">Highlights:</span>
                            {achievements.map((item, index) => (
                                <Chip key={index} className="chip" label={item} />
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achievements;
