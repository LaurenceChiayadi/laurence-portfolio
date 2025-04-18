import { ThemeEnum } from "../contexts/ThemeContext";

export const getBackgroundClass = (theme: string) => {
  return theme === ThemeEnum.Light
    ? "bg-white bg-[radial-gradient(#d3d3d3_1px,transparent_1px)] bg-[size:40px_40px] md:[background-size:20px_20px]"
    : "bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:40px_40px] md:bg-[size:20px_20px]";
};

export const getBodyTextClass = (theme: string) => {
  return theme === ThemeEnum.Light ? "text-[#000000CC]" : "text-[#FFFFFFCC]";
};
