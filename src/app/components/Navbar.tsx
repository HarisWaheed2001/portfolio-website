// Navbar.js
"use client";

import React, { useState } from 'react';
import { Transition } from '@headlessui/react'; // Optional for smooth transitions
import Logo from './Logo'
import Resume from './ResumeButton'
import './SplashScreen.css'
// @ts-ignore
const Navbar = ({aboutMeRef, expRef, projectRef, conRef}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const about = () => {
    aboutMeRef.current.scrollIntoView({
      behavior: "smooth",
    })
  }

  const exp = () => {
    expRef.current.scrollIntoView({
      behavior: "smooth",
    })
  }

  const project = () => {
    projectRef.current.scrollIntoView({
      behavior: "smooth",
    })
  }

  const connect = () => {
    conRef.current.scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
    <nav className="navbar bg-indigo-950 text-light-purple text-sm">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-around h-16">
        <Logo/>
          <div className="hidden sm:flex sm:items-center ml-auto space-x-4">
            <a
              onClick={() => about()}
              href="#about"
              className="flex items-center text-purple-200 hover:text-teal-400 fade-in-from-top"
            >
              <span className="text-teal-400 mr-2">01.</span>
              About
            </a>
            <a
              onClick={() => exp()}
              href="#experience"
              className="flex items-center text-purple-200 hover:text-teal-400 fade-in-from-top"
            >
              <span className="text-teal-400 mr-2">02.</span>
              Experience
            </a>
            <a
              onClick={() => project()}
              href="#contact"
              className="flex items-center text-purple-200 hover:text-teal-400 fade-in-from-top"
            >
              <span className="text-teal-400 mr-2">03.</span>
              Projects
            </a>
            <a
              onClick={() => connect()}
              href="#contact"
              className="flex items-center text-purple-200 hover:text-teal-400 fade-in-from-top"
            >
              <span className="text-teal-400 mr-2">04.</span>
              Contact
            </a>
            <Resume/>
          </div>

          {/* Mobile Menu Button */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-purple-200 hover:bg-gray-700 focus:outline-none"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-200"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition ease-in duration-150"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col items-center">
            <a onClick={() => about()} href="#about" className="block px-3 py-2 text-base font-medium text-purple-200 hover:text-teal-400">
              <span className="text-teal-400 mr-2">01.</span> About
            </a>
            <a onClick={() => exp()} href="#experience" className="block px-3 py-2 text-base font-medium text-purple-200 hover:text-teal-400">
              <span className="text-teal-400 mr-2">02.</span> Experience
            </a>
            <a onClick={() => project()} href="#contact" className="block px-3 py-2 text-base font-medium text-purple-200 hover:text-teal-400">
              <span className="text-teal-400 mr-2">03.</span> Projects
            </a>
            <a onClick={() => connect()} href="#contact" className="block px-3 py-2 text-base font-medium text-purple-200 hover:text-teal-400">
              <span className="text-teal-400 mr-2">04.</span> Contact
            </a>
            <Resume/>
          </div>
        </div>
      </Transition>
    </nav>
  );
};

export default Navbar;
