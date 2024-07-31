import { useEffect, useState, useRef } from "react";
import LandingStyles from "../styles/Landing.module.scss";
import gsap from "gsap";
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

function Landing() {
    const [text, setText] = useState("Welcome!");
    const initialText = "I'm Mariam Sebua";
    const alternateText = "I'm a junior full-stack developer";
    const textRef = useRef(null);
    const wavyRef = useRef(null);
  
    useEffect(() => {
      const timeline = gsap.timeline({ repeat: -1, repeatDelay: 2 });

      timeline.to(textRef.current, {
        duration: 2,
        text: { value: initialText, delimiter: "" },
        ease: "linear"
      })
      .to(textRef.current, {
        duration: 2,
        delay: 4,
        text: { value: alternateText, delimiter: "" },
        ease: "none"
      });

      gsap.to(wavyRef.current, {

      });
    }, []);

    return (
        <div className={LandingStyles.landing_container + " section_container"}>
            <h1 
                ref={textRef}
                id="main_title"
                className={LandingStyles.main_title}
            >
                {text}
            </h1>
            <p>
              With a primary focus on frontend development and a passion for creating responsive, 
              high-performance websites, I bring mock-ups to life using HTML, CSS, and JavaScript. 
              Explore my projects and get to know more about my skills and experience. 
              <span ref={wavyRef} className={LandingStyles.wavy_colors}>
                Let’s build something amazing together!
              </span>
            </p>
        </div>
    );
}

export default Landing;