import { useState } from 'react';
import { motion } from 'framer-motion';
import { Blurhash } from 'react-blurhash';

import CameraImages from '../constants/CameraImages';
import { useOutletContext } from 'react-router-dom';

const Gallery = () => {
  const { handlePageChange } = useOutletContext<LayoutContext>();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loadedImages, setLoadedImages] = useState<{ [key: number]: boolean }>(
    {}
  );

  const handleLoad = (index: number) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  };

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
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
          onClick={() => handlePageChange('/')}
          className="mb-4 text-sm text-black dark:text-white bg-black/10 dark:bg-white/10 border border-black/20 dark:border-white/20 hover:bg-black/20 dark:hover:bg-white/20 backdrop-blur-md rounded-lg px-4 py-2 transition"
        >
          ← Go Back
        </button>
      </div>

      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-xl p-4">
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4 [&>div:not(:first-child)]:mt-5">
          {CameraImages.map((image, index: number) => (
            <motion.div
              key={index}
              className={`relative w-full overflow-hidden rounded-lg shadow-md cursor-pointer image ${
                image.landscape ? 'aspect-[3/2]' : 'aspect-[2/3]'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
                delay: Math.random() * 0.4 + 0.1,
              }}
              onClick={() => handleImageClick(image.src)}
            >
              {!loadedImages[index] && (
                <Blurhash
                  hash={image.blurhash}
                  width={'100%'}
                  height={'100%'}
                  resolutionX={32}
                  resolutionY={32}
                  punch={1}
                  className="absolute w-full rounded-lg shadow-md "
                />
              )}

              <img
                src={image.src}
                alt=""
                onLoad={() => handleLoad(index)}
                className={`w-full transition-transform duration-300 hover:scale-105 hover:brightness-110 rounded-lg shadow-md cursor-pointer ${
                  loadedImages[index] ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black/60 flex justify-center items-center z-50"
          onClick={handleOverlayClick} // Listen for click on overlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
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
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Gallery;
