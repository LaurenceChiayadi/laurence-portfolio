import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useTranslation } from "react-i18next";

import { useTheme, ThemeEnum } from "../contexts/ThemeContext";
import NavigationButton from "./global/Navigation/NavigationButton";
import ThemeButton from "./global/Navigation/ThemeButton";
import Drawer from "./global/Drawer";
import useScrollLocation from "../hooks/useScrollLocation";

const NavBar = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();
  const { percentageScrolled } = useScrollLocation();

  const menuOptions = t<"navBar", { returnObjects: true }, string[]>("navBar", {
    returnObjects: true,
  }) as string[];

  const [selected, setSelected] = useState(menuOptions[0]);
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const menuOpen = () => {
    setIsOpenDrawer(!isOpenDrawer);
  };

  useEffect(() => {
    if (percentageScrolled < 50) {
      setSelected(menuOptions[0]);
    } else if (percentageScrolled < 100) {
      setSelected(menuOptions[1]);
    } else if (percentageScrolled < 180) {
      setSelected(menuOptions[2]);
    }
  }, [percentageScrolled, menuOptions]);

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

      <Drawer isOpenDrawer={isOpenDrawer} menuOpen={menuOpen} />

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
