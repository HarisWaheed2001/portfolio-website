import './SplashScreen.css'

const MainContent = () => {
    return(
        <div className="bg-indigo-950 text-gray-800 
                  mt-20 sm:pt-3 md:mx-20 md:p-5 lg:mx-36 lg:p-10 xl:mx-60 xl:p-32 2xl:mx-72 2xl:p-52 fade-in-from-top-long">
            <p className="text-teal-400 tracking-wider p-4">Hi, my name is</p>
            <p className="text-gray-300 text-7xl p-4">Haris Waheed</p>
            <p className="text-gray-500 text-7xl p-4">I build things for the web.</p>
            <p className="text-gray-500 p-4">I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. </p>
        </div>
    )
}

export default MainContent