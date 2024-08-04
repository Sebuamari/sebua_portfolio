import { useEffect, useState, useRef } from "react";
import { FaGithub, FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';
import ContactStyles from "../styles/Contact.module.scss";

function Contact() {
   const contacts = [
        {
            title: 'LinkedIn',
            url: 'https://linkedin.com/in/sebuamariam',
            icon: <FaLinkedin />,
        },
        {
            title: 'Email',
            url: 'mailto:sebuamari@gmail.com',
            icon: <FaEnvelope />,
        },
        {
            title: 'Phone',
            url: 'tel:+995599176788',
            icon: <FaPhone />,
        },
        {
            title: 'GitHub',
            url: 'https://github.com/Sebuamari',
            icon: <FaGithub />,
        },
   ];

    return (
        <div className={ContactStyles.contact_container + " section_container"}>
            <h1>Get In Touch</h1>
            <p>I would love to hear from you! Whether you have a question about my projects, 
                want to collaborate on a new venture, or just want to say hello, feel free to reach out to me.</p>

            <div className={ContactStyles.contacts}>
                {contacts.map((contact, index) => (
                    <div key={index} style={{ margin: '10px 0' }}>
                    <a href={contact.url} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
                        <span data-text={contact.title} style={{ marginLeft: '10px' }}>{contact.title}</span>
                        {contact.icon}
                    </a>
                    </div>
                ))}
            </div>

            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d25180611.021615684!2d26.4849276!3d39.6090737!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cd7e64f626b%3A0x61d084ede2576ea3!2sTbilisi!5e0!3m2!1sen!2sge!4v1722794249049!5m2!1sen!2sge" width="600" height="350" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
}

export default Contact;