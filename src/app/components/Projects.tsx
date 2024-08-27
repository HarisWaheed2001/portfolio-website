import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './Projects.css'; // Ensure this file includes the necessary CSS styles

const projects = [
    {
        title: 'Task Catalyst (Final Year Design Project)',
        description: 'Developed proficiency in integrating AI technologies such as AWS Textract and OpenAI’s API to automate document parsing and task generation within a project management application all on the cloud with AWS.',
        time: "Jan 2024 – Mar 2024 | React, AWS, Python and SQL",
        href: 'https://github.com/aribhs8/syllabus-scanner',
    },
    {
        title: 'ShortEase',
        description: 'Led the design and development of ShortEase, a Kotlin-based YouTube shorts automation tool in Android Studio',
        time: "May 2023 – Aug 2023 | Jetpack Compose, Firebase, noSQL",
        href: 'https://github.com/HanuMayil/ShortEase',
    },
    {
        title: 'Smart Brain',
        description: 'Created a full-stack web application using the PERN stack that detects faces in images provided to the app, leveraging the Clarifai Face Detect Model API.',
        time: "Oct 2021 - Nov 2021 | React, PostgreSQL, Node",
        href: 'https://github.com/HarisWaheed2001/SmartBrainApi',
    },
    {
        title: 'TaxiBud',
        description: 'Developed a multi-platform full-stack mobile app with Expo CLI that logs financial statistics of individual rides for taxi drivers.',
        time: "Oct 2021 - Nov 2021 |  React native, Firebase",
        href: 'https://github.com/HarisWaheed2001/Taxibud',
    },
];
// @ts-ignore
const Projects = ({forwardedRef}) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    return (
        <div ref={ref} className={`bg-indigo-950 text-gray-800 
                md:mx-20 md:p-6 lg:mx-36 lg:px-10 xl:mx-60 xl:px-32 2xl:mx-72 2xl:p-52 ${inView ? 'fade-in-from-top' : 'invisible'}`}>
            <div ref={forwardedRef} className="flex items-center">
                <p className="text-teal-400 text-4xl p-4">03.</p>
                <p className="text-gray-400 text-5xl">Projects</p>
            </div>
            <div className="flex flex-wrap">
                {projects.map((project, index) => (
                    <a
                        key={index}
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-box bg-white w-full p-6 m-4 shadow-lg transition-transform transform hover:scale-105 hover:bg-light-blue-400"
                    >
                        <h3 className="text-xl font-bold mb-2 text-teal-400">{project.title}</h3>
                        <p className="text-xs font-bold">{project.time}</p>
                        <p className="text-sm">{project.description}</p>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Projects;