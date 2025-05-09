import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdOutlineQuestionMark } from "react-icons/md";

import CapsuleTransitImage from "../assets/CapsuleTransit Landing Page.png";
import CapsuleTransitHMSImage from "../assets/CapsuleTransitHMS.png";
import BatamNaritaImage from "../assets/BatamNarita.png";
import { IoDocumentText } from "react-icons/io5";

const logoMap: Record<string, React.ReactNode> = {
  ["Github"]: <FaGithub />,
  ["LinkedIn"]: <FaLinkedin />,
  ["Email"]: <MdEmail />,
  ["Resume"]: <IoDocumentText />,
  ["Unknown"]: <MdOutlineQuestionMark />,
};

export const getLogo = (type: string): React.ReactNode | null => {
  const logoSrc = logoMap[type];
  return logoSrc ? logoSrc : logoMap["Unknown"];
};

export const getProjectImage = (title: string) => {
  switch (title) {
    case "Capsule Transit Landing Page":
      return CapsuleTransitImage;
    case "PT. Batam Narita Indah":
      return BatamNaritaImage;
    case "Capsule Transit HMS":
      return CapsuleTransitHMSImage;
  }
};

export const getRedirectURL = (title: string) => {
  switch (title) {
    case "LinkedIn":
      return "https://www.linkedin.com/in/laurence-chia/";
    case "Github":
      return "https://github.com/LaurenceChiayadi";
    case "Email":
      return "mailto:laurence.tjahyadi@gmail.com";
    case "Resume":
      return "https://drive.google.com/file/d/1jzmXSOJPj_LdjDZ5QP_wqv5d6Wo5cxpt/view?usp=sharing";
    default:
      return "";
  }
};
