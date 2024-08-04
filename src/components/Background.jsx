import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt, FaGithub, FaGitlab, FaDatabase } from "react-icons/fa";
import { SiCsharp, SiDotnet } from "react-icons/si";
import { TbApi, TbSql } from "react-icons/tb";

const Background = () => {
    const logos = [
        FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt, FaGithub, FaGitlab, FaDatabase, SiCsharp, SiDotnet, TbApi, TbSql
      ];

      const logoContainerRef = useRef(null);

      useEffect(() => {
        const container = logoContainerRef.current;
        const elements = container.querySelectorAll('.logo');
        const header_height = 80;
        const icon_height = 50;
    
        const positions = [
          { 
            start: {x: window.innerWidth / 6, y: header_height},
            end: {x: 0, y: window.innerHeight / 2 + header_height}
          },
          { 
            start: {x: 0, y: window.innerHeight / 3 + header_height},
            end: {x: window.innerWidth / 6, y: window.innerHeight - icon_height}
          },
          { 
            start: {x: 0, y: 2 * window.innerHeight / 3 + header_height},
            end: {x: window.innerWidth / 2, y: window.innerHeight - icon_height}
          },
          { 
            start: {x: window.innerWidth / 3, y: window.innerHeight - icon_height},
            end: {x: window.innerWidth / 6, y: header_height}
          },
          { 
            start: {x: window.innerWidth / 6, y: window.innerHeight - icon_height},
            end: {x: 2 * window.innerWidth / 6, y: window.innerHeight / 2 + header_height}
          },
          { 
            start: {x: window.innerWidth / 2, y: window.innerHeight - icon_height},
            end: {x: 4 * window.innerWidth / 6, y: window.innerHeight / 2 + header_height}
          },
          { 
            start: {x: 5 * window.innerWidth / 6, y: window.innerHeight - icon_height},
            end: {x: window.innerWidth - header_height, y: window.innerHeight / 2 + header_height}
          },
          { 
            start: {x: window.innerWidth - icon_height, y: 2 * window.innerHeight / 3},
            end: {x: window.innerWidth / 2, y: header_height}
          },
          { 
            start: {x: window.innerWidth - icon_height, y: window.innerHeight / 3},
            end: {x: 5 * window.innerWidth / 6, y: header_height}
          },
          { 
            start: {x: 5 * window.innerWidth / 6, y: header_height},
            end: {x: window.innerWidth / 2, y: window.innerHeight / 2 + header_height}
          },
          { 
            start: {x: 4 * window.innerWidth / 6, y: header_height},
            end: {x: 5 * window.innerWidth / 6, y: window.innerHeight - icon_height}
          },
          { 
            start: {x: window.innerWidth / 2, y: header_height},
            end: {x: 2 * window.innerWidth / 6, y: window.innerHeight / 2 + header_height}
          },
        ];
    
        elements.forEach((logo, index) => {
          const position = positions[index % positions.length];
          const duration = index % 2 === 0 ? 9 : 10;
    
          gsap.set(logo, {
            x: position["start"].x,
            y: position["start"].y,
          });
    
          const animateLogo = () => {
            const tl = gsap.timeline({ repeat: -1, yoyo: true });
    
            tl.to(logo, {
              duration: duration,
              x: position["end"].x,
              y: position["end"].y,
              rotation: 360,
              ease: 'power1.inOut'
            })
            .to(logo, {
              duration: duration,
              x: position["start"].x,
              y: position["start"].y,
              rotation: 360,
              ease: 'power1.inOut'
            });
          };
    
          animateLogo();
        });
      }, [])

    return (
        <div className="logo-container" ref={logoContainerRef}>
        {logos.map((Logo, index) => (
            <Logo key={index} className="logo" />
        ))}
        </div>
    );
};

export default Background;