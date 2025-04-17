import { motion, AnimatePresence } from 'framer-motion';

export default function PageTransition({ isVisible }: { isVisible: boolean }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={`fixed top-1/2 left-1/2 w-24 h-24 bg-black rounded-full z-[9999] bg-white dark:bg-[#00091d]`}
          initial={{ scale: 0 }}
          animate={{ scale: 30 }}
          exit={{ scale: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.6, 0.01, -0.05, 0.9],
          }}
          style={{ translateX: '-50%', translateY: '-50%' }}
        />
      )}
    </AnimatePresence>
  );
}
