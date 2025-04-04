import SelfImage from "../assets/image.jpg";
import { motion } from "framer-motion";

import HandWavingGif from "../assets/icons/hand-waving-hand.gif";

const Hero = () => {
  return (
    <div
      id="home"
      className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32 z-10"
    >
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={SelfImage}
            alt="self-image"
            className="w-[300px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[350px]"
          />
        </motion.div>
        <motion.div
          className="flex max-w-[800px] flex-col items-center justify-center gap-3 text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex flex-row font-light md:text-6xl text-5xl">
            <img className="w-[0.8em] h-[0.8em]" src={HandWavingGif} />
            <h1 className="text-primary dark:text-primary-dark">
              Laurence Chiayadi
            </h1>
          </div>
          <h3 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-2xl font-light md:text-3xl">
            Full Stack Developer
          </h3>
          <p className="md:text-base text-pretty text-sm text-gray-400">
            I&apos;m a web developer skilled in React, Next.js, and Tailwind,
            focused on building clean, scalable applications. From front-end
            design to seamless database integration with PostgreSQL, I create
            efficient solutions for dynamic user experiences. Let&apos;s build
            something great together!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
