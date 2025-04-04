import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { MdDarkMode, MdLightMode } from "react-icons/md";

import NavigationButton from "./global/Navigation/NavigationButton";
import { useTheme, ThemeEnum } from "../contexts/ThemeContext";
import ThemeButton from "./global/Navigation/ThemeButton";
import Drawer from "./global/Drawer";

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
      {isOpenDrawer && <Drawer isOpenDrawer={isOpenDrawer} />}
    </nav>
  );
};

export default NavBar;
