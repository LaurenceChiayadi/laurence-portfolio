import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdOutlineQuestionMark } from "react-icons/md";

const logoMap: Record<string, React.ReactNode> = {
  ["GitHub"]: <FaGithub />,
  ["LinkedIn"]: <FaLinkedin />,
  ["Email"]: <MdEmail />,
  ["Unknown"]: <MdOutlineQuestionMark />,
};

export const getLogo = (type: string): React.ReactNode | null => {
  const logoSrc = logoMap[type];
  return logoSrc ? logoSrc : logoMap["Unknown"];
};
