import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type AnimateOnSeenProps = {
  children?: React.ReactNode;
  className?: string;
};

const AnimateOnSeen = (props: AnimateOnSeenProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className={props.className}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.5 }}
    >
      {props.children}
    </motion.div>
  );
};

export default AnimateOnSeen;
