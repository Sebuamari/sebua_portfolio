import { useEffect, useState, useRef } from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt, FaGithub, FaGitlab, FaDatabase, FaLanguage } from "react-icons/fa";
import { SiCsharp, SiDotnet, SiPostgresql } from "react-icons/si";
import SkillsStyles from '../styles/Skills.module.scss';

function Skills() {
    const skills = {
        "frontend development": [
            { name: "HTML", icon: <FaHtml5 /> },
            { name: "CSS/SASS", icon: <FaCss3Alt /> },
            { name: "JavaScript", icon: <FaJsSquare /> },
            { name: "React/Next", icon: <FaReact /> },
        ],
        "backend development": [
            { name: "C#", icon: <SiCsharp /> },
            { name: ".NET", icon: <SiDotnet /> },
        ],
        "version control": [
            { name: "GIT", icon: <FaGitAlt /> },
            { name: "Github", icon: <FaGithub /> },
            { name: "Gitlab", icon: <FaGitlab /> },
        ],
        "database management": [
            { name: "SQL", icon: <FaDatabase /> }
        ],
        "languages": [
            { name: "Georgian (Native)", icon: <FaLanguage /> },
            { name: "English (C1)", icon: <FaLanguage /> },
            { name: "German (B2)", icon: <FaLanguage /> },
        ]
    };

    return (
        <div className={SkillsStyles.skills_container + " section_container"}>
            <h1>Skills</h1>

            <div className={SkillsStyles.categories}>
                {Object.keys(skills).map(category => (
                    <div key={category} className={SkillsStyles.category}>
                        <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
                        <ul>
                            {skills[category].map(skill => (
                                <li key={skill.name} className={SkillsStyles.skill}>
                                    {skill.name}
                                    <span className={SkillsStyles.icon}>{skill.icon}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;