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
      className={` px-4 py-1.5 rounded-t-lg text-xl ${
        !props.selected && "cursor-pointer"
      } ${props.selected ? "bg-white dark:bg-[#00091d]" : "bg-transparent"} `}
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
