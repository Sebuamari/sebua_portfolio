import { React } from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt, FaGithub, FaGitlab } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { SiCsharp, SiDotnet, SiExpress, SiMongodb, SiMongoose } from "react-icons/si";
import { TbApi, TbSql } from "react-icons/tb";
import { ImCross } from "react-icons/im";
import SkillsStyles from '../styles/Skills.module.scss';

function Skills() {
    const skills = {
        "frontend development": [
            { name: "HTML", icon: <FaHtml5 /> },
            { name: "CSS/SASS", icon: <FaCss3Alt /> },
            { name: "JavaScript", icon: <FaJsSquare /> },
            { name: "React/Next", icon: <FaReact /> },
            { name: "API", icon: <TbApi />}
        ],
        "backend development": [
            { name: "C#", icon: <SiCsharp /> },
            { name: ".NET", icon: <SiDotnet /> },
            { name: "Node.js", icon: <IoLogoNodejs />},
            { name: "Express.js", icon: <SiExpress />},
            { name: "NLog", icon: <SiDotnet /> }
        ],
        "version control": [
            { name: "GIT", icon: <FaGitAlt /> },
            { name: "Github", icon: <FaGithub /> },
            { name: "Gitlab", icon: <FaGitlab /> },
        ],
        "database management": [
            { name: "SQL", icon: <TbSql /> },
            { name: "MongoDB", icon: <SiMongodb /> },
            { name: "Mongoose", icon: <SiMongoose /> }
        ],
        "testing": [
            { name: "Xunit", icon: <ImCross /> }
        ],
        "languages": [
            { name: "Georgian (Native)", icon: '' },
            { name: "English (C1)", icon: '' },
            { name: "German (B2)", icon: '' },
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