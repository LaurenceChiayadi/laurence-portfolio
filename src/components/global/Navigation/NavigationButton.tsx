type NavigationButtonProps = {
  selected: boolean;
  children: React.ReactNode;
  onClick: VoidFunction;
};

const NavigationButton = (props: NavigationButtonProps) => {
  return (
    <a
      onClick={props.onClick}
      className={`cursor-pointer px-3 py-1 rounded-t-lg ${
        props.selected ? "bg-white dark:bg-[#00091d]" : "bg-transparent"
      }`}
    >
      <li
        className={`opacity-100 transition-all duration-300 hover:opacity-70 ${
          props.selected &&
          "font-semibold bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent"
        } `}
      >
        {props.children}
      </li>
    </a>
  );
};

export default NavigationButton;
