type WrapperProps = {
  className?: string;
  children?: React.ReactNode;
};

const Wrapper = (props: WrapperProps) => {
  return (
    <div
      id="home"
      className={`px-7 flex  items-center justify-center py-24 md:px-32 z-10 ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default Wrapper;
