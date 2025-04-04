import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { useMotionValueEvent, useScroll } from "framer-motion";

import NavigationButton from "./global/Navigation/NavigationButton";
import { useTheme, ThemeEnum } from "../contexts/ThemeContext";
import ThemeButton from "./global/Navigation/ThemeButton";
import Drawer from "./global/Drawer";

const NavBar = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();
  const { scrollY } = useScroll();
  const [selected, setSelected] = useState("string");
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const menuOpen = () => {
    setIsOpenDrawer(!isOpenDrawer);
  };

  const menuOptions = t<"navBar", { returnObjects: true }, string[]>("navBar", {
    returnObjects: true,
  }) as string[];

  useMotionValueEvent(scrollY, "change", (latest) => {
    const percentageScrolled = (latest / window.innerHeight) * 100;

    if (percentageScrolled < 40) {
      setSelected(menuOptions[0]);
    } else {
      setSelected(menuOptions[1]);
    }
  });

  return (
    <nav className="fixed top-0 z-20 flex w-full items-end justify-between px-16 pt-8 text-white md:justify-evenly bg-gradient-to-r from-blue-500 to-pink-500">
      <ul className="hidden md:flex gap-6">
        {menuOptions.map((item: string) => (
          <NavigationButton
            key={item}
            onClick={() => {}}
            selected={selected === item}
          >
            {item}
          </NavigationButton>
        ))}
      </ul>
      {isOpenDrawer ? (
        <BiX className="block md:hidden text-4xl" onClick={menuOpen} />
      ) : (
        <BiMenu className="block md:hidden text-4xl " onClick={menuOpen} />
      )}
      <Drawer isOpenDrawer={isOpenDrawer} />

      <ul className="gap-6 md:flex ">
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
    </nav>
  );
};

export default NavBar;
