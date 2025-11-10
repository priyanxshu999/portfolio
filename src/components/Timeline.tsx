import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>

          {/* IBM Cloud & AI Virtual Internship */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feb 2024 - Mar 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
          >
            <h3 className="vertical-timeline-element-title">IBM Cloud & AI Virtual Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Edunet Foundation</h4>
            <p>
              Cloud Computing, Artificial Intelligence, Machine Learning Fundamentals, and IBM Cloud Services.
            </p>
          </VerticalTimelineElement>

          {/* Cybersecurity Virtual Intern - Tamizan Skills */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jun 2025 - Jul 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Cybersecurity Virtual Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Tamizan Skills</h4>
            <p>
              Vulnerability Assessment, Network Security, and Ethical Hacking Fundamentals.
            </p>
          </VerticalTimelineElement>

          {/* Cybersecurity Virtual Intern - ShadowFox */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jul 2025 - Aug 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Cybersecurity Virtual Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">ShadowFox</h4>
            <p>
              Penetration Testing, Threat Hunting, and Incident Response Simulations.
            </p>
          </VerticalTimelineElement>

          {/* CTF Player - W4LLZ */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jul 2025 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">CTF Player</h3>
            <h4 className="vertical-timeline-element-subtitle">W4LLZ (International CTF Team)</h4>
            <p>
              Capture The Flag Challenges, Reverse Engineering, Web Exploitation, and Cybersecurity Research.
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
