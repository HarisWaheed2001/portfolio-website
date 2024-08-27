"use client"
import React, { useState, useEffect, useRef } from 'react';
import SplashScreen from './components/SplashScreen'
import MainContent from './components/MainContent'
import Navbar from "./components/Navbar"
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Connect from "./components/Connect";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const aboutMeRef = useRef(null)
  const expRef = useRef(null)
  const projects = useRef(null)
  const con = useRef(null)

  useEffect(() => {
      const timer = setTimeout(() => {
          setShowSplash(false);
      }, 3000)
      return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      {showSplash ? (
          <SplashScreen />
      ) : (
        <div className="bg-indigo-950">
          <Navbar aboutMeRef={aboutMeRef} expRef={expRef} projectRef={projects} conRef={con}/> 
          <MainContent/>
          <AboutMe forwardedRef={aboutMeRef}/>
          <Experience forwardedRef={expRef}/>
          <Projects forwardedRef={projects}/>
          <Connect forwardedRef={con}/>
        </div>
      )}
    </main>
  );
}
