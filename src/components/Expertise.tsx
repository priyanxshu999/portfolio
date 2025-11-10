import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBinoculars, faFileLines, faShieldHalved } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

// 🕵️ OSINT & Recon
const labelsFirst = [
    "OSINT Framework",
    "Maltego",
    "Shodan",
    "theHarvester",
    "Recon-ng",
    "Google Dorking",
    "Censys",
    "Amass",
    "SpiderFoot",
    "Social Media OSINT",
];

// 🧠 Digital Forensics
const labelsSecond = [
    "Autopsy",
    "Sleuth Kit",
    "Volatility",
    "FTK Imager",
    "Wireshark",
    "Bulk Extractor",
    "Memory Forensics",
    "File Carving",
    "Timeline Analysis",
    "Disk Imaging",
];

// 💥 Penetration Testing
const labelsThird = [
    "Kali Linux",
    "Burp Suite",
    "Nmap",
    "Metasploit",
    "SQLmap",
    "XSSer",
    "Aircrack-ng",
    "Hydra",
    "John the Ripper",
    "OWASP Top 10",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                
                {/* OSINT & Recon */}
                <div className="skill">
                    <FontAwesomeIcon icon={faBinoculars} size="3x"/>
                    <h3>OSINT & Reconnaissance</h3>
                    <p>I specialize in gathering intelligence from open sources — mapping targets, uncovering hidden relationships, and identifying potential vulnerabilities through detailed recon workflows.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Toolset:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                {/* Digital Forensics */}
                <div className="skill">
                    <FontAwesomeIcon icon={faFileLines} size="3x"/>
                    <h3>Digital Forensics & Analysis</h3>
                    <p>Experienced in evidence collection, disk and memory analysis, and event timeline reconstruction to trace cyber incidents and uncover digital footprints.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Toolset:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                {/* Penetration Testing */}
                <div className="skill">
                    <FontAwesomeIcon icon={faShieldHalved} size="3x"/>
                    <h3>Penetration Testing</h3>
                    <p>Conducting offensive operations across web, network, and wireless infrastructures — exploiting, escalating, and reporting vulnerabilities to strengthen system defenses.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Toolset:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    </div>
    );
}

export default Expertise;
