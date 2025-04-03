import { motion } from "framer-motion";
import React from "react";

type ThemeButtonProps = {
  className?: string;
  children: React.ReactNode;
  selected: boolean;
  onClick: VoidFunction;
};

const ThemeButton = (props: ThemeButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className={`relative px-4 py-1.5 rounded-t-lg text-xl overflow-hidden ${
        !props.selected && "cursor-pointer"
      }`}
      disabled={props.selected}
    >
      {/* Animated Background */}
      <motion.div
        initial={{ height: "0%" }}
        animate={{ height: props.selected ? "100%" : "0%" }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-full bg-white dark:bg-[#00091d]"
      />

      {/* Button Content */}
      <span
        className={`relative z-10 opacity-100 transition-all duration-300 hover:opacity-70 ${props.className}`}
      >
        {props.children}
      </span>
    </button>
  );
};

export default ThemeButton;
