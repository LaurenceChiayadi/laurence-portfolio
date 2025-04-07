import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import HandWavingGif from "../assets/icons/hand-waving-hand.gif";
import Wrapper from "./global/Wrapper";
import { getLogo } from "../utilities/GetUtilities";
import GradientButton from "./global/GradientButton";

const Hero = () => {
  const { t } = useTranslation();

  const menuOptions = t<"hero.buttons", { returnObjects: true }, string[]>(
    "hero.buttons",
    {
      returnObjects: true,
    }
  ) as string[];

  return (
    <Wrapper className="min-h-screen w-full">
      <div className="flex flex-col md:flex-row items-center justify-evenly gap-14">
        <div className="flex flex-col md:w-1/2 items-center justify-center gap-4 md:mb-6">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center gap-4"
          >
            <img className="w-[3.5em] h-[3.5em]" src={HandWavingGif} />
            <h3 className="text-black dark:text-white opacity-80 font-semibold text-3xl md:text-3.5xl">
              {t("hero.subtitle")}
            </h3>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-primary dark:text-primary-dark font-semibold text-center text-4xl md:text-5xl">
              {t("hero.title")}
            </h1>
          </motion.div>
        </div>
        <div className="flex flex-col md:w-1/2 items-center justify-center gap-4 md:mt-8">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-black dark:text-white opacity-80 font-semibold text-3xl md:text-3.5xl text-center">
              {t("hero.description")}
            </h3>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex flex-row items-center justify-center gap-4">
              {menuOptions.map((item: string) => (
                <GradientButton key={item}>
                  {getLogo(item)}
                  {item}
                </GradientButton>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;
