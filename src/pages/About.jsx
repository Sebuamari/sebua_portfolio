import { React } from "react";
import AboutStyles from "../styles/About.module.scss";

function About() {

    return (
        <div className={AboutStyles.about_container + " section_container"}>
            <h1>About Me</h1>
            <p>I’m Mariam Sebua, a dedicated Junior Full Stack Developer with a strong inclination 
                towards frontend development. I hold a Bachelor of Science in Mathematics from 
                Tbilisi State University and have undergone extensive training in JavaScript and 
                front-end frameworks, as well as back-end development with C# and .NET. Currently, 
                I am honing my skills in a professional setting, focusing on creating responsive designs, 
                optimizing website performance, and resolving technical issues. Fluent in Georgian, 
                English, and German, I thrive in diverse and collaborative environments.</p>
        </div>
    );
}

export default About;