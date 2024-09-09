import { useState } from "react";
import casino from '../../src/img/casino.png';
import onlineShop from '../../src/img/online_shop.png';
import redberry from '../../src/img/redberry.png';
import weather from '../../src/img/weather.png';
import starWars from '../../src/img/star_wars.png';
import onlineShopAdmin from '../../src/img/online_shop_admin.png';
import imageSlider from '../../src/img/slider.png';
import search from '../../src/img/search.png';
import travel from '../../src/img/travel.png';
import calculator from '../../src/img/calculator.png';
import machine from '../../src/img/machine.png';
import clock from '../../src/img/clock.png';
import loanApi from '../../src/img/loan_api.png';
import banking from '../../src/img/banking_app.png';
import timestamp from '../../src/img/timestamp.png';
import whoami from '../../src/img/whoami.png';
import ProjectsStyles from "../styles/Projects.module.scss";

function Projects() {
    const projects = {
        fullstack: [
        ],
        frontend: [
            {
                name: "Casino Landing",
                description: "A simple Casino landing page which displays game templates and their names fetched from an API. It's possible to search the games by user input",
                techStack: ["HTML", "CSS", "JavaScript", "API"],
                image: casino,
                githubUrl: "https://github.com/Sebuamari/Casino-Page",
                liveUrl: "https://sebuamari.github.io/Casino-Page/"
            },
            {
                name: "Online shop",
                description: "A simple online store made with ReactJS and GraphQL endpoint featuring simple functionalities",
                techStack: ["HTML", "CSS", "JavaScript", "React", "Redux", "GraphQL"],
                image: onlineShop,
                githubUrl: "https://github.com/Sebuamari/Store.git",
                liveUrl: "https://sebuamari.github.io/Store/"
            },
            {
                name: "Online Form",
                description: "An online form for Redberry, where user can fill the data about herself/himself and the laptop he/she borrowed from the company",
                techStack: ["HTML", "CSS", "JavaScript", "React", "Redux", "API"],
                image: redberry,
                githubUrl: "https://github.com/Sebuamari/redberry-bootcamp-assignment",
                liveUrl: "https://sebuamari.github.io/redberry-bootcamp-assignment/"
            },
            {
                name: "Weather App",
                description: "A simple Weather App, where you can check the current weather in any city all around the world",
                techStack: ["HTML", "CSS", "JavaScript", "API"],
                image: weather,
                githubUrl: "https://github.com/Sebuamari/Weather-App",
                liveUrl: "https://sebuamari.github.io/Weather-App/"
            },
            {
                name: "Star Wars Characters",
                description: "A simple React app where user can find data about \"Star Wars\" characters",
                techStack: ["HTML", "CSS", "JavaScript", "React", "API"],
                image: starWars,
                githubUrl: "https://github.com/Sebuamari/star_wars",
                liveUrl: "https://sebuamari.github.io/star_wars/"
            },
            {
                name: "Online Shop Admin",
                description: "GITA's JavaScript and Frontend Frameworks course final task. Online Shop admin page with some simple functionalities",
                techStack: ["HTML", "CSS", "JavaScript", "React"],
                image: onlineShopAdmin,
                githubUrl: "https://github.com/Sebuamari/gita_task",
                liveUrl: "https://sebuamari.github.io/App"
            },
            {
                name: "Image Slider",
                description: "A simple image slider",
                techStack: ["HTML", "CSS", "JavaScript"],
                image: imageSlider,
                githubUrl: "https://github.com/Sebuamari/Image-Slider",
                liveUrl: "https://sebuamari.github.io/Image-Slider/"
            },
            {
                name: "Autocomplete Search",
                description: "A simple search input with autocomplete feature",
                techStack: ["HTML", "CSS", "JavaScript"],
                image: search,
                githubUrl: "https://github.com/Sebuamari/AutoComplete-Search",
                liveUrl: "https://sebuamari.github.io/AutoComplete-Search/"
            },
            {
                name: "Travel Agency Landing",
                description: "A simple travel agency landing page",
                techStack: ["HTML", "CSS", "JavaScript"],
                image: travel,
                githubUrl: "https://github.com/Sebuamari/UnilabTask",
                liveUrl: "https://sebuamari.github.io/UnilabTask/"
            },
            {
                name: "Random Advice Generator",
                description: "React app that generates random quotes fethced from API",
                techStack: ["HTML", "CSS", "JavaScript", "React", "API"],
                image: casino,
                githubUrl: "https://github.com/Sebuamari/advicer",
                liveUrl: "https://sebuamari.github.io/advicer/"
            },
            {
                name: "JavaScript Calculator",
                description: "JavaScript calculator supporting basic mathematical operations",
                techStack: ["HTML", "CSS", "JavaScript", "React"],
                image: calculator,
                githubUrl: "https://codepen.io/sebuamari/pen/WNdLNEB",
                liveUrl: "https://codepen.io/sebuamari/pen/WNdLNEB"
            },
            {
                name: "Drum Machine",
                description: "A simple app that lets you explore a variety of quirky and fun sound effects",
                techStack: ["HTML", "CSS", "JavaScript", "React"],
                image: machine,
                githubUrl: "https://codepen.io/sebuamari/pen/vYprajN",
                liveUrl: "https://codepen.io/sebuamari/pen/vYprajN"
            },
            {
                name: "25 + 5 Clock",
                description: "A simple JS app featuing timestop and timer functionalites",
                techStack: ["HTML", "CSS", "JavaScript"],
                image: clock,
                githubUrl: "https://codepen.io/sebuamari/pen/VwyRVQm",
                liveUrl: "https://codepen.io/sebuamari/pen/VwyRVQm"
            },
        ],
        backend: [
            {
                name: "Loan API",
                description: "API for general finance company operations",
                techStack: [".NET", "C#", "SQL"],
                image: loanApi,
                githubUrl: "https://github.com/Sebuamari/LOAN_API",
            },
            {
                name: "Banking console app",
                description: "A simple console app simulating basic banking functionalities",
                techStack: [".NET", "C#"],
                image: banking,
                githubUrl: "https://github.com/Sebuamari/Banking_application",
            },
            {
                name: "Timestamp microservice",
                description: "A simple API for converting date into unix and UTC values.",
                techStack: ["JavaScript", "Node.js", "Express.js"],
                image: timestamp,
                githubUrl: "https://github.com/Sebuamari/timestamp-microservice",
                liveUrl: "https://timestamp-microservice-hwyzgvh4i-sebuamaris-projects.vercel.app/",
            },
            {
                name: "Who am I?",
                description: "A simple API to get user's IP address, browser preferred language and software data.",
                techStack: ["JavaScript", "Node.js", "Express.js"],
                image: whoami,
                githubUrl: "https://github.com/Sebuamari/whoami",
                liveUrl: "https://whoami-25wr6hwuq-sebuamaris-projects.vercel.app/",
            },
        ]
    };

    const [selectedCategory, setSelectedCategory] = useState('all');

    const renderProjects = (category) => {
        let filteredProjects;

        if (category === 'all') {
            filteredProjects = Object.values(projects).flat();
        } else {
            filteredProjects = projects[category];
        }

        if (filteredProjects.length === 0) {
            return <h2>I'm currently working on exciting projects to fill this space. Stay tuned!</h2>;
        }

        return filteredProjects.map((project, index) => (
            <div key={index} className={ProjectsStyles.project_card}>
                <img src={project.image} alt={project.name} className={ProjectsStyles.project_image}/>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className={ProjectsStyles.tech_stack}>
                    {project.techStack.map((tech, index) => (
                        <span key={index} className={ProjectsStyles.tech_item}>{tech}</span>
                    ))}
                </div>
                <div className={ProjectsStyles.project_links}>
                    {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub Repo</a>}
                    {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Deployment</a>}
                </div>
            </div>
        ));
    };

    return (
        <div className={ProjectsStyles.projects_container + " section_container"}>
            <h1>My projects</h1>
            <div className={ProjectsStyles.filter_buttons}>
                <button onClick={() => setSelectedCategory('all')}>All</button>
                <button onClick={() => setSelectedCategory('frontend')}>Front-end</button>
                <button onClick={() => setSelectedCategory('backend')}>Back-end</button>
                <button onClick={() => setSelectedCategory('fullstack')}>Full-stack</button>
            </div>
            <div className={ProjectsStyles.projects}>
                {renderProjects(selectedCategory)}
            </div>
        </div>
    );
}

export default Projects;