import { motion } from "framer-motion";

const Blob = () => (
  <svg className="absolute w-0 h-0">
    <clipPath id="blobClip" clipPathUnits="objectBoundingBox">
      <motion.path
        d="M0.5,0.1 C0.8,0,0.95,0.2,0.95,0.5 C0.95,0.8,0.8,1,0.5,0.9 C0.2,0.8,0.05,0.8,0.05,0.5 C0.05,0.2,0.2,0,0.5,0.1 Z"
        animate={{
          d: [
            "M0.5,0.1 C0.8,0,0.95,0.2,0.95,0.5 C0.95,0.8,0.8,1,0.5,0.9 C0.2,0.8,0.05,0.8,0.05,0.5 C0.05,0.2,0.2,0,0.5,0.1 Z",
            "M0.5,0.15 C0.75,0.05,0.9,0.25,0.9,0.5 C0.9,0.75,0.75,0.95,0.5,0.85 C0.25,0.75,0.1,0.75,0.1,0.5 C0.1,0.25,0.25,0.05,0.5,0.15 Z",
          ],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />
    </clipPath>
  </svg>
);

export default Blob;
