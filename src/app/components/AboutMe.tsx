import './SplashScreen.css'
import './Image.css'
import { useInView } from 'react-intersection-observer';
// @ts-ignore
const AboutMe = ({forwardedRef}) => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Ensure the animation only happens once
        threshold: .5 // Adjust as needed
    });

    return(
        <div ref={ref} className={`bg-indigo-950 text-gray-800 
                mt-36 md:mx-20 md:p-6 lg:mx-36 lg:px-10 xl:mx-60 xl:px-32 2xl:mx-72 2xl:p-52  ${inView ? 'fade-in-from-top':"invisible"}`}>
            <div ref={forwardedRef} className="flex items-center">
                <p className="text-teal-400 text-4xl p-4">01.</p>
                <p className="text-gray-400 text-5xl">About Me</p>
            </div>
            <div className ="lg:flex lg:flex-row">
                <div>
                    <p className="text-white text-md p-4">Hello! My name is Haris and I enjoy creating things that live on the internet. My interest in web development started in my childhood customizing a Squarespace website with Javascript and HTML - turns out hacking together a modal taught me a lot about Javascript, HTML and CSS!</p>
                    <p className="text-white text-md p-4">Fast-forward to today and I have had the privilege of working at an fintech corporation, construction SAAS, interational education SAAS, and 2 start-ups. My main focus these days is getting a full-time position as software developer since I recently graduated.</p>
                    <p className="text-white text-md p-4">Here are a few technologies I’ve been working with recently:</p>
                    <div className="columns-2 p-4 text-white">
                        <div><p>Javascript</p><p>Next.js</p><p>MySQL</p></div>
                        <div><p>AWS</p><p>Python</p><p>Django</p></div>
                    </div>
                </div>
                <div className="container">
                <div className="box">
                    <div className="imgBx">
                        <img src="https://media.licdn.com/dms/image/v2/D5603AQGxU7oB9zGA7g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724802691933?e=1730332800&v=beta&t=jbM5ERG_m52G-Iga3qvsI0Ls_-DccNiL_Ecp3e4TjlE"/>
                    </div>
                    <div className="content">
                        <div>
                            <h2>March 2024</h2>
                            <p>Final Year Design Project</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe