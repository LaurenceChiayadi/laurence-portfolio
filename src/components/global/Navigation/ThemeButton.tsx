import React from "react";
import { useTheme, ThemeEnum } from "../../../contexts/ThemeContext";

type ThemeButtonProps = {
  className?: string;
  children: React.ReactNode;
  selected: boolean;
  onClick: VoidFunction;
};

const ThemeButton = (props: ThemeButtonProps) => {
  const { theme } = useTheme();
  return (
    <button
      onClick={props.onClick}
      className={` px-4 py-1.5 rounded-t-lg text-xl ${
        !props.selected && "cursor-pointer"
      } ${
        props.selected && theme === ThemeEnum.Light
          ? "bg-white"
          : props.selected && theme === ThemeEnum.Dark
          ? "bg-black"
          : "bg-transparent"
      } `}
      disabled={props.selected}
    >
      <span
        className={`opacity-100 transition-all duration-300 hover:opacity-70 ${props.className}`}
      >
        {props.children}
      </span>
    </button>
  );
};

export default ThemeButton;
