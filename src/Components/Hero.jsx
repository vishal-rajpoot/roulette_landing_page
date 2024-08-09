/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Roulette from "./Rouletee";
import bgImage from "../assets/bg.jpg";
import logo from "../assets/logo1.png";

// const menuItems = [
//   {
//     name: 'Home',
//     href: '#',
//   },
//   {
//     name: 'About',
//     href: '#',
//   },
//   {
//     name: 'Contact',
//     href: '#',
//   },
// ]

export const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative overflow-hidden w-full">
      <nav className="fixed w-full bg-transparent border-gray-200 z-50 mt-4">
        <div className="bg-transparent">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
            <div className="inline-flex items-center space-x-2">
              <span>
                <img src={logo} alt="logo" className="h-20" />
              </span>
              {/* <span className="font-bold text-white">WinExc</span> */}
            </div>
          </div>
        </div>
      </nav>

      <div
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative flex flex-col lg:flex-row h-full z-10">
          <div className="flex flex-col justify-center items-start px-8 py-12 w-full lg:w-1/2 mt-20 sm:mt-0">
          <h1 className="text-4xl lg:text-8xl font-bold text-white typewriter">
            <span className="line">Are You Ready </span>
            <span className="line">to Hit the </span>
            <span>Jackpot?</span>
          </h1>
            <p className="mt-4 text-base lg:text-lg text-gray-300">
              Don't miss your chance to Win Big, Spin the Wheel now and watch
              your fotune grow!
            </p>
          </div>
          <div className="flex flex-col justify-center lg:items-center w-full lg:w-1/2 mt-5 mb-10 lg:mt-0">
            <div className="w-24 h-24 lg:w-auto lg:h-auto">
              <Roulette />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white text-center p-4 mt-10 sm:mt-0">
          <p className="text-gray-300">
            <span className="text-white">DISCLAIMER: </span>18+ only, This game
            may be habit-forming or financially risky. Play Responsibly.
          </p>
        </div>
      </div>
    </div>
  );
};
