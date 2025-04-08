import { useTranslation } from "react-i18next";

import SelfPhoto from "../assets/self-photo.jpg";
import Blob from "./global/Animation/Blob";
import Wrapper from "./global/Wrapper";
import Description from "./global/Typography/Description";
import AnimateOnSeen from "./global/Animation/AnimateOnSeen";

const About = () => {
  const { t } = useTranslation();

  return (
    <Wrapper className="w-full pt-0">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20">
        <AnimateOnSeen className="relative h-95">
          <Blob />
          <img
            src={SelfPhoto}
            alt="blob"
            className="w-full h-full object-cover"
            style={{ clipPath: "url(#blobClip)" }}
          />
        </AnimateOnSeen>
        <div className="flex flex-col items-start gap-4  md:w-42/100">
          <AnimateOnSeen>
            <h2 className="text-4xl font-semibold dark:text-white">
              {t("about.title")}
            </h2>
          </AnimateOnSeen>
          <AnimateOnSeen>
            <Description i18nKey="about.intro" />
          </AnimateOnSeen>
          <AnimateOnSeen>
            <Description i18nKey="about.story" />
          </AnimateOnSeen>
          <AnimateOnSeen>
            <Description i18nKey="about.hobbies" />
          </AnimateOnSeen>
        </div>
      </div>
    </Wrapper>
  );
};

export default About;
