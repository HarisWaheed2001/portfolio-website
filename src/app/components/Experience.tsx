import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './SplashScreen.css'; // Ensure this file includes the necessary CSS styles

const tabsData = [
    { id: 1, title: 'Texada Software', position: 'Full-Stack Developer Intern', tech: 'Sept 2023 – Dec 2023 | Angular, ASP.NET, mySQL', content: '<ul><li>Utilized ASP.NET and Angular to diagnose and rectify critical UI bugs, enhancing application stability and improving user experience.</li><li>Developed and implemented complex SQL queries and stored procedures to enhance data retrieval, manipulation, and storage processes, contributing to streamlined database operations and bolstering system performance.</li></ul>' },
    { id: 2, title: 'Oanda', position: 'Full-Stack Developer Intern', tech: 'Jan 2023 – April 2023 | React, Django, mySQL', content: '<ul><li>Leveraged TypeScript, Django, and mySQL to refactor the system workflow for USA sub-division registration, resulting in an improved UI design boosting user retention rate by 12%.</li><li>Pioneered groundwork for email automation service using Django for European clients, allowing smoother client side process and saving clients time.</li></ul>' },
    { id: 3, title: 'ApplyBoard', position: 'Software Engineering Intern', tech: 'May 2022 – Aug 2022 |  React, Ruby and PostgreSQL', content: '<ul><li>Developed a robust RESTful API utilizing TypeScript for the regional customer’s library, enabling seamless creation and implementation of policies to streamline operations.</li><li>Optimized developer efficiency by re-configuring GitHub Actions to automatically create and publish a Ruby gem on merge using a docker-compose.yaml file.</li><li>Enhanced code maintainability by restructuring the main authentication API from TypeScript to Ruby using Test-Driven Development (TDD) methodology.</li></ul>' },
    { id: 4, title: 'Exponet Canada Inc.', position: 'Software Developer Intern', tech: 'Sept 2021 – Dec 2021 | React, Groovy and MongoDB', content: '<ul><li>Leveraged Groovy to streamline carrier invoice consumption by automating the scraping of relevant keywords from the document, resulting in a more convenient and efficient process for retrieval and management.</li><li>Improved operational efficiency by implementing automation rules that performed customized actions, utilizing Groovy and a daily cronjob to calculate profit thresholds and trigger specific actions based on the results.</li><li>Enhanced user experience by designing an autocompletion algorithm using React, leveraging data extracted from Amazon MWS RMA reports using Groovy saving clients time and effort by automating manual information entry</li></ul>' },
    { id: 5, title: 'Baseline Capital', position: 'Software Developer Intern', tech: 'Jan 2021 – April 2021 | React, Node and PostgreSQL', content: '<ul><li>Spearheaded the development of a prototype for the main company website, utilizing React, Node, and PostgreSQL, deploying the beta version on Heroku.</li><li>Revamped major UI/UX features across multiple company portals, resulting in a significant 20% increase in user retention and engagement.</li></ul>' },
];
// @ts-ignore
const Experience = ({forwardedRef}) => {
    const [activeTab, setActiveTab] = useState(1);
    // @ts-ignore
    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });
    

    return (
        <div ref={ref} className={`bg-indigo-950 text-gray-800 
                md:mx-20 md:p-6 lg:mx-36 lg:px-10 xl:mx-60 xl:px-32 2xl:mx-72 2xl:px-52 ${inView ? 'fade-in-from-top' : 'invisible'}`}>
            <div ref={forwardedRef} className="flex items-center">
                <p className="text-teal-400 text-4xl p-4">02.</p>
                <p className="text-gray-400 text-5xl">Experience</p>
            </div>
            <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/3 sm:w-full">
                    {tabsData.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => handleTabClick(tab.id)}
                            className={`tab-button block lg:inline-block w-full py-2 px-4 text-left ${activeTab === tab.id ? 'selected' : ''}`}
                        >
                            {tab.title}
                        </button>
                    ))}
                </div>
                <div className="tab-content lg:w-2/3 w-full p-4">
                    {tabsData
                        .filter((tab) => tab.id === activeTab)
                        .map((tab) => (
                            <div key={tab.id}>
                                <h2 className="text-xl font-semibold mb-2 flex">
                                    <span className="mr-2">{tab.position}</span>
                                    <div className='text-teal-400'> @{tab.title}</div>
                                </h2>
                                <h2 className="text-md text-gray-400 mb-2">{tab.tech}</h2>
                                <div dangerouslySetInnerHTML={{ __html: tab.content }} />
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;