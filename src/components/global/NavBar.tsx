import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

import { useTheme, ThemeEnum } from "../../contexts/ThemeContext";
import NavigationButton from "../global/Navigation/NavigationButton";
import ThemeButton from "../global/Navigation/ThemeButton";
import Drawer from "../global/Drawer";
import useScrollLocation from "../../hooks/useScrollLocation";
import navBarValues from "../../constants/NavBarValues";

const NavBar = () => {
  const { theme, toggleTheme } = useTheme();
  const { percentageScrolled, scrollToPercentage } = useScrollLocation();

  const [selected, setSelected] = useState(navBarValues[0].label);
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const menuOpen = () => {
    setIsOpenDrawer(!isOpenDrawer);
  };

  useEffect(() => {
    if (percentageScrolled > navBarValues[4].position) {
      setSelected(navBarValues[4].label);
    } else if (percentageScrolled > navBarValues[3].position) {
      setSelected(navBarValues[3].label);
    } else if (percentageScrolled > navBarValues[2].position) {
      setSelected(navBarValues[2].label);
    } else if (percentageScrolled > navBarValues[1].position) {
      setSelected(navBarValues[1].label);
    } else if (percentageScrolled > navBarValues[0].position) {
      setSelected(navBarValues[0].label);
    }
  }, [percentageScrolled]);

  return (
    <nav className="fixed top-0 z-20 flex w-full items-end justify-between px-16 pt-8 text-white md:justify-evenly bg-gradient-to-r from-blue-500 to-pink-500">
      <ul className="hidden md:flex gap-6">
        {navBarValues.map((item: INavBarContent) => (
          <NavigationButton
            key={item.label}
            onClick={() => scrollToPercentage(item.position)}
            selected={selected === item.label}
          >
            {item.label}
          </NavigationButton>
        ))}
        <NavigationButton
          onClick={() => {
            window.location.href = "/gallery";
          }}
        >
          Gallery
        </NavigationButton>
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
