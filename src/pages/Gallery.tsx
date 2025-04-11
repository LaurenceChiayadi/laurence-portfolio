import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import CameraImages from "../constants/CameraImages";
import { useEffect, useState } from "react";
import { getImageOrientation } from "../utilities/Functions";

const Gallery = () => {
  const navigate = useNavigate();
  const [sortedImages, setSortedImages] = useState<string[]>([]);

  useEffect(() => {
    const sortImagesByOrientation = async () => {
      const portrait: string[] = [];
      const landscape: string[] = [];

      for (const url of CameraImages) {
        const orientation = await getImageOrientation(url);
        if (orientation === "P") portrait.push(url);
        else landscape.push(url);
      }

      // Interleave for masonry balance
      const mixed: string[] = [];
      const max = Math.max(portrait.length, landscape.length);
      for (let i = 0; i < max; i++) {
        if (landscape[i]) mixed.push(landscape[i]);
        if (portrait[i]) mixed.push(portrait[i]);
      }

      setSortedImages(mixed);
    };

    sortImagesByOrientation();
  }, []);

  return (
    <div className="py-24 px-4 sm:px-8">
      <div className="flex flex-row justify-between items-center">
        <div className="text-black dark:text-white mb-6 ">
          <h1 className="text-3xl font-semibold mb-2">My Camera Gallery 📸</h1>
          <p className="text-sm sm:text-base text-black/80 dark:text-white/80">
            A collection of images captured through different lenses,
            perspectives, and moods.
          </p>
        </div>
        <button
          onClick={() => navigate("/")}
          className="mb-4 text-sm text-black dark:text-white bg-black/10 dark:bg-white/10 border border-black/20 dark:border-white/20 hover:bg-black/20 dark:hover:bg-white/20 backdrop-blur-md rounded-lg px-4 py-2 transition"
        >
          ← Go Back
        </button>
      </div>
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-xl p-4">
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5">
          {sortedImages.map((image, index) => (
            <motion.img
              src={image}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
              className="w-full transition-transform duration-300 hover:scale-105 hover:brightness-110 rounded-lg shadow-md"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
