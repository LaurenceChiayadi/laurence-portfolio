import { AnimatePresence, motion } from "framer-motion";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { BiMenu, BiX } from "react-icons/bi";
import { useTranslation } from "react-i18next";

import {
  getBackgroundClass,
  getBodyTextClass,
} from "../../utilities/ThemeUtilities";
import { useTheme } from "../../contexts/ThemeContext";

type DrawerProps = {
  isOpenDrawer: boolean;
  menuOpen: VoidFunction;
};

const Drawer = (props: DrawerProps) => {
  const { theme } = useTheme();
  // const { percentageScrolled } = useScrollLocation();
  const { t } = useTranslation();
  const menuOptions = t<"navBar", { returnObjects: true }, INavBarContent[]>(
    "navBar",
    {
      returnObjects: true,
    }
  ) as INavBarContent[];

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
            {menuOptions.map((item: INavBarContent) => (
              <a
                key={item.label}
                href="#home"
                className={`cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 ${getBodyTextClass(
                  theme
                )}`}
              >
                <li>{item.label}</li>
              </a>
            ))}
          </ul>
          <ul className="flex flex-wrap gap-5">
            <li
              className={`cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100 ${getBodyTextClass(
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
