import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import CameraImages from "../constants/CameraImages";
import { useEffect, useState } from "react";
import { getImageOrientation } from "../utilities/Functions";

const Gallery = () => {
  const navigate = useNavigate();
  const [sortedImages, setSortedImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
      setIsLoading(false);
    };

    sortImagesByOrientation();
  }, []);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Check if the click target is the background overlay (not the image)
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  return (
    <div className="py-8 md:py-24 px-4 sm:px-8">
      <div className="flex flex-col-reverse md:flex-row justify-between md:items-center">
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
        {isLoading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full"></div>
          </div>
        ) : (
          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5">
            {sortedImages.map((image, index) => (
              <motion.img
                key={index}
                src={image}
                loading="lazy"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.2,
                  delay: Math.min(index * 0.05, 0.5),
                }}
                className="w-full transition-transform duration-300 hover:scale-105 hover:brightness-110 rounded-lg shadow-md cursor-pointer"
                onClick={() => handleImageClick(image)}
              />
            ))}
          </div>
        )}
      </div>

      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black/60 flex justify-center items-center z-50"
          onClick={handleOverlayClick} // Listen for click on overlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-0 right-0 p-4 text-white text-2xl"
            >
              &times;
            </button>
            <motion.img
              src={selectedImage}
              alt="Enlarged"
              className="max-w-full max-h-screen object-contain"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Gallery;
