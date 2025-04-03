import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

import NavigationButton from "./global/Navigation/NavigationButton";
import { useTheme, ThemeEnum } from "../contexts/ThemeContext";
import ThemeButton from "./global/Navigation/ThemeButton";

const NavBar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const menuOpen = () => {
    setIsOpenDrawer(!isOpenDrawer);
  };

  return (
    <nav className="fixed top-0 z-20 flex w-full items-end justify-between px-16 pt-8 text-white md:justify-evenly bg-gradient-to-r from-blue-500 to-pink-500">
      <ul className="hidden md:flex gap-6">
        <NavigationButton onClick={() => {}} selected>
          Home
        </NavigationButton>
        <NavigationButton onClick={() => {}} selected={false}>
          About
        </NavigationButton>
        <NavigationButton onClick={() => {}} selected={false}>
          Skills
        </NavigationButton>
        <NavigationButton onClick={() => {}} selected={false}>
          Projects
        </NavigationButton>
        <NavigationButton onClick={() => {}} selected={false}>
          Contact
        </NavigationButton>
      </ul>
      <ul className="gap-6 md:flex">
        <ThemeButton
          onClick={toggleTheme}
          className="text-yellow-400"
          selected={theme === ThemeEnum.Light}
        >
          <MdLightMode />
        </ThemeButton>
        <ThemeButton
          onClick={toggleTheme}
          className="text-fuchsia-900"
          selected={theme === ThemeEnum.Dark}
        >
          <MdDarkMode />
        </ThemeButton>
      </ul>
      {isOpenDrawer ? (
        <BiX className="block md:hidden text-4xl" onClick={menuOpen} />
      ) : (
        <BiMenu className="block md:hidden text-4xl" onClick={menuOpen} />
      )}
      {isOpenDrawer && (
        <div
          className={`fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-gray-800 p-12 bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] ${
            isOpenDrawer ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col gap-8">
            <a
              href="#home"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>Home</li>
            </a>
            <a
              href="#home"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>Tech</li>
            </a>
            <a
              href="#home"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>Projects</li>
            </a>
            <a
              href="#home"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>Contact</li>
            </a>
          </ul>
          <ul className="flex flex-wrap gap-5">
            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100">
              <BsInstagram />
            </li>
            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100">
              <BsLinkedin />
            </li>
            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100">
              <BsGithub />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
