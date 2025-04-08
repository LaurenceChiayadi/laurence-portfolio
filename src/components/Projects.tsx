import { useTranslation } from "react-i18next";

import { H2, H4, Paragraph } from "./global/Typography/Typographies";
import { getProjectImage } from "../utilities/GetUtilities";
import Wrapper from "./global/Wrapper";

const Projects = () => {
  const { t } = useTranslation();

  const projects = t<"projects.projects", { returnObjects: true }, IProjects[]>(
    "projects.projects",
    {
      returnObjects: true,
    }
  ) as IProjects[];
  return (
    <Wrapper>
      <div className="flex flex-col items-center min-h-screen gap-8">
        <H2>{t("projects.title")}</H2>
        <div className="flex flex-col gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-6 md:gap-12`}
            >
              <img
                className="md:max-w-md rounded-2xl"
                src={getProjectImage(project.title)}
              />
              <div className="flex flex-col max-w-130 justify-evenly gap-2">
                <div className="flex flex-row justify-between items-center">
                  <H4 className="font-semibold max-w-70">{project.title}</H4>
                  {project.URL && (
                    <a
                      className="font-bold bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent hover:opacity-50 transition-all duration-300"
                      href={project.URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Site ↗
                    </a>
                  )}
                </div>
                <Paragraph className="font-normal">
                  {project.description}
                </Paragraph>
                <div className="flex flex-row gap-2">
                  {project.stacks.map((stack, index) => (
                    <div
                      key={index}
                      className="p-[2px] rounded-2xl bg-gradient-to-r from-blue-500 to-pink-500"
                    >
                      <div className="flex flex-row items-center gap-2 rounded-2xl bg-white dark:bg-black px-3 py-0.5 font-semibold">
                        <div className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
                          {stack}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Projects;
