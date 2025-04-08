import { DiMysql } from "react-icons/di";
import { FaAws } from "react-icons/fa";
import {
  SiDart,
  SiDjango,
  SiDocker,
  SiFlutter,
  SiJavascript,
  SiNextdotjs,
  SiNginx,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

export const SkillsData = [
  {
    category: "Language",
    items: [
      {
        name: "JavaScript",
        Icon: SiJavascript,
        color: "#F7DF1E",
        years: 3,
      },
      {
        name: "TypeScript",
        Icon: SiTypescript,
        color: "#3178C6",
        years: 3,
      },
      {
        name: "Python",
        Icon: SiPython,
        color: "#FFC331",
        years: 3,
      },
      {
        name: "Dart",
        Icon: SiDart,
        color: "#0075BA",
        years: 1,
      },
    ],
  },
  {
    category: "Framework",
    items: [
      {
        name: "React",
        Icon: SiReact,
        color: "#61DBFB",
        years: 3,
      },
      {
        name: "NextJS",
        Icon: SiNextdotjs,
        color: "#000000",
        years: 3,
      },
      {
        name: "Django",
        Icon: SiDjango,
        color: "#44B78B",
        years: 3,
      },
      {
        name: "Flutter",
        Icon: SiFlutter,
        color: "#40D0FD",
        years: 1,
      },
    ],
  },
  {
    category: "Deployment",
    items: [
      {
        name: "NGINX",
        Icon: SiNginx,
        color: "#019639",
        years: 2,
      },
      {
        name: "Docker",
        Icon: SiDocker,
        color: "#2396ED",
        years: 1,
      },
    ],
  },
  {
    category: "Database",
    items: [
      {
        name: "PostgreSQL",
        Icon: SiPostgresql,
        color: "#336791",
        years: 3,
      },
      {
        name: "MySQL",
        Icon: DiMysql,
        color: "#00758F",
        years: 1,
      },
    ],
  },
  {
    category: "Cloud",
    items: [
      {
        name: "Azure",
        Icon: VscAzure,
        color: "#0089D6",
        years: 2,
      },
      {
        name: "AWS",
        Icon: FaAws,
        color: "#FF9900",
        years: 1,
      },
    ],
  },
];
