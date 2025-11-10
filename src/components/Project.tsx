import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">

            {/* 1 - Web-based Honeypot (Low Interaction) */}
            <div className="project">
                <a href="#" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="honeypot thumbnail" width="100%"/></a>
                <a href="#" target="_blank" rel="noreferrer"><h2>Web-based Honeypot (Low Interaction)</h2></a>
                <p>
                  Built a basic low-interaction web honeypot that mimics common services and captures attacker activity.
                  Features include an admin panel to review attack logs, recorded requests, IP metadata and timestamps — useful for learning attacker TTPs and collecting telemetry.
                </p>
            </div>

            {/* 2 - Prompt Chat (Client/Server) */}
            <div className="project">
                <a href="#" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="prompt chat thumbnail" width="100%"/></a>
                <a href="#" target="_blank" rel="noreferrer"><h2>Prompt Chat (client.py / server.py)</h2></a>
                <p>
                  Simple client-server chat using raw sockets. Two scripts (client.py and server.py) allow two users to connect via IP:PORT and exchange messages.
                  Lightweight, reliable, and useful for learning socket programming and basic networking concepts.
                </p>
            </div>

            {/* 3 - Firewall + Packet Sender */}
            <div className="project">
                <a href="#" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="firewall thumbnail" width="100%"/></a>
                <a href="#" target="_blank" rel="noreferrer"><h2>Custom Firewall & Packet Sender</h2></a>
                <p>
                  A custom firewall that inspects raw packets and allows or blocks traffic based on rules (IPs, subnets, ports).
                  Includes a packet-sender utility to craft and transmit custom TCP/UDP packets — great for testing rules and simulating traffic.
                  (Requires elevated privileges / raw socket access.)
                </p>
            </div>

            {/* 4 - Ransomware Simulator (Educational) */}
            <div className="project">
                <a href="#" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="ransomware thumbnail" width="100%"/></a>
                <a href="#" target="_blank" rel="noreferrer"><h2>Ransomware Simulator (AES / Fernet)</h2></a>
                <p>
                  Educational ransomware simulator that encrypts sample files using Fernet (AES-based symmetric encryption) and shows a locked GUI demanding a key.
                  The decryption key is stored server-side; designed strictly for research and defensive training (DO NOT use on real systems).
                </p>
            </div>

            {/* 5 - Password Strength Checker (GUI) */}
            <div className="project">
                <a href="#" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="password checker thumbnail" width="100%"/></a>
                <a href="#" target="_blank" rel="noreferrer"><h2>Password Strength Checker</h2></a>
                <p>
                  GUI-based password strength tool. Scores passwords by length, character variety (upper/lower/digits/special), repeated patterns, and dictionary word checks (NLTK).
                  Displays feedback: 🟥 Weak (0–3), 🟨 Medium (4–5), 🟩 Strong (6+), and shows suggestions to improve the password.
                </p>
            </div>

        </div>
    </div>
    );
}

export default Project;
