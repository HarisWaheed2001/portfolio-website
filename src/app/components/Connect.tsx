
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './button.css'; // Ensure this file includes the necessary CSS styles
import '@fortawesome/fontawesome-free/css/all.min.css';
// @ts-ignore
const Connect = ({forwardedRef}) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    return (
        <div ref={ref} className={`bg-indigo-950 text-gray-800 items-center
                md:mx-20 md:p-6 lg:mx-36 lg:px-10 xl:mx-60 xl:px-32 2xl:mx-72 2xl:px-52 ${inView ? 'fade-in-from-top' : 'invisible'}`}>
            <div ref={forwardedRef} className="flex items-center">
                <p className="text-teal-400 text-4xl p-4">04.</p>
                <p className="text-gray-400 text-5xl">Lets Connect!</p>
            </div>
            <div className="button-container">
                <a
                    href="mailto:haris.waheed2001@gmail.com"
                    className="social-button email-button"
                >
                    <i className="fas fa-envelope"></i>
                    <span>Email Me</span>
                </a>
                <a
                    href="https://github.com/HarisWaheed2001" // Replace with your GitHub profile URL
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-button github-button"
                >
                    <i className="fab fa-github"></i>
                    <span>GitHub</span>
                </a>
                <a
                    href="https://www.linkedin.com/in/haris-waheed-b60299200/" // Replace with your LinkedIn profile URL
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-button linkedin-button"
                >
                    <i className="fab fa-linkedin"></i>
                    <span>LinkedIn</span>
                </a>
            </div>
        </div>
    );
};

export default Connect;