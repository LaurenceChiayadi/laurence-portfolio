import { AnimatePresence, motion } from "framer-motion";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { BiMenu, BiX } from "react-icons/bi";

import {
  getBackgroundClass,
  getBodyTextClass,
} from "../../utilities/ThemeUtilities";
import { useTheme } from "../../contexts/ThemeContext";
import useScrollLocation from "../../hooks/useScrollLocation";
import navBarValues from "../../constants/NavBarValues";

type DrawerProps = {
  isOpenDrawer: boolean;
  menuOpen: VoidFunction;
};

const Drawer = (props: DrawerProps) => {
  const { theme } = useTheme();
  const { scrollToPercentage } = useScrollLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        {props.isOpenDrawer ? (
          <motion.div
            key="close"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.5 }}
          >
            <BiX
              className="block md:hidden text-4xl cursor-pointer"
              onClick={props.menuOpen}
            />
          </motion.div>
        ) : (
          <motion.div
            key="menu"
            initial={{ opacity: 0, rotate: 90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: -90 }}
            transition={{ duration: 0.5 }}
          >
            <BiMenu
              className="block md:hidden text-4xl cursor-pointer"
              onClick={props.menuOpen}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        initial={{ width: "0%" }}
        animate={{ width: props.isOpenDrawer ? "50%" : "0%" }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className={`fixed left-0 top-[68px] h-screen overflow-hidden border-gray-800  ${getBackgroundClass(
          theme
        )}`}
      >
        <div className="flex flex-col items-start justify-start p-12 gap-10">
          <ul className="flex flex-col gap-8">
            {navBarValues.map((item: INavBarContent) => (
              <a
                key={item.label}
                onClick={() => scrollToPercentage(item.position)}
                className={`cursor-pointer font-semibold opacity-70 transition-all duration-300 hover:opacity-100 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent ${getBodyTextClass(
                  theme
                )}`}
              >
                <li>{item.label}</li>
              </a>
            ))}
            <a
              onClick={() => {
                window.location.href = "/gallery";
              }}
              className={`cursor-pointer font-semibold opacity-70 transition-all duration-300 hover:opacity-100 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent ${getBodyTextClass(
                theme
              )}`}
            >
              <li>Gallery</li>
            </a>
          </ul>
          <ul className="flex flex-wrap gap-5">
            <li
              className={`cursor-pointer text-xl opacity-70 transition-all duration-300 gradient-text hover:text-red-500 hover:opacity-100 ${getBodyTextClass(
                theme
              )}`}
            >
              <BsInstagram />
            </li>
            <li
              className={`cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100 ${getBodyTextClass(
                theme
              )}`}
            >
              <BsLinkedin />
            </li>
            <li
              className={`cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100 ${getBodyTextClass(
                theme
              )}`}
            >
              <BsGithub />
            </li>
          </ul>
        </div>
      </motion.div>
    </>
  );
};

export default Drawer;
