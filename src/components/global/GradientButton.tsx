type GradientButtonProps = {
  children: React.ReactNode;
  onClick?: VoidFunction;
  className?: string;
};

const GradientButton = (props: GradientButtonProps) => {
  return (
    <button
      className={`bg-gradient-to-r from-blue-500 to-pink-500 rounded-lg px-3 py-1.5 hover:scale-120 duration-300 text-xl ${props.className}`}
    >
      <span className="flex flex-row items-center gap-2 font-semibold text-gray-800">
        {props.children}
      </span>
    </button>
  );
};

export default GradientButton;
