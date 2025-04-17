import { motion } from 'framer-motion';

type NavigationButtonProps = {
  selected?: boolean;
  children: React.ReactNode;
  onClick?: VoidFunction;
};

const NavigationButton = (props: NavigationButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className="relative cursor-pointer px-3 py-1 rounded-t-lg overflow-hidden"
    >
      {/* Background Animation */}
      <motion.div
        initial={{ height: '0%' }}
        animate={{ height: props.selected ? '100%' : '0%' }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="absolute bottom-0 left-0 w-full bg-white dark:bg-[#00091d]"
      />

      {/* List Item */}
      <li
        className={`relative z-10 opacity-100 transition-all duration-300 hover:opacity-70 ${
          props.selected &&
          'font-semibold bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent'
        }`}
      >
        {props.children}
      </li>
    </button>
  );
};

export default NavigationButton;
