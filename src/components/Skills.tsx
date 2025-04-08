import { useTranslation } from "react-i18next";

import Wrapper from "./global/Wrapper";
import { H2, H5 } from "./global/Typography/Typographies";
import { SkillsData } from "../constants/SkillsData";
import { ThemeEnum, useTheme } from "../contexts/ThemeContext";

const Skills = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  const checkColor = (color: string) => {
    if (color === "#000000" && theme === ThemeEnum.Dark) {
      return "#ffffff";
    } else {
      return color;
    }
  };
  return (
    <Wrapper className="w-full">
      <div className="flex flex-col md:flex-row items-center justify-evenly gap-8">
        <div className="h-full flex flex-col justify-start gap-10 max-w-120 text-center md:text-start">
          <H2>{t("skills.title")}</H2>
          <div className="flex flex-col gap-4">
            <H5>{t("skills.workExperience")}</H5>
            <H5>{t("skills.proficiency")}</H5>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {SkillsData.map((skills, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center gap-4"
            >
              <H5 className="min-w-30 text-center md:text-start">
                {skills.category}
              </H5>
              <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-start gap-2 max-w-90 md:max-w-100">
                {skills.items.map((item, index1) => (
                  <div
                    key={index1}
                    className={`flex flex-row items-center gap-2 border-2 rounded-2xl px-3 py-0.5 font-semibold`}
                    style={{
                      borderColor: checkColor(item.color),
                      color: checkColor(item.color),
                    }}
                  >
                    <item.Icon />
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* <div className="h-100 border"/> */}
      </div>
    </Wrapper>
  );
};

export default Skills;
