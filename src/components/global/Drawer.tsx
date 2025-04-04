import { motion } from "framer-motion";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { getBackgroundClass } from "../../utilities/ThemeUtilities";
import { useTheme } from "../../contexts/ThemeContext";

type DrawerProps = {
  isOpenDrawer: boolean;
};

const Drawer = (props: DrawerProps) => {
  const { theme } = useTheme();
  return (
    <motion.div
      initial={{ width: "0%" }}
      animate={{ width: props.isOpenDrawer ? "50%" : "0%" }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className={`fixed right-0 top-[68px] h-screen border-gray-800  ${getBackgroundClass(
        theme
      )} ${props.isOpenDrawer ? "block" : "hidden"}`}
    >
      <div className="flex flex-col items-start justify-start p-12 gap-10">
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
    </motion.div>
  );
};

export default Drawer;
