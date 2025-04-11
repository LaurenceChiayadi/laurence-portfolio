import { useNavigate } from "react-router-dom";

import { H1, Paragraph } from "../components/global/Typography/Typographies";
import { useTheme } from "../contexts/ThemeContext";
import { getBackgroundClass } from "../utilities/ThemeUtilities";
import GradientButton from "../components/global/GradientButton";

const NotFound = () => {
  const { theme } = useTheme();

  const navigate = useNavigate();
  return (
    <div
      className={`h-screen w-screen flex flex-col justify-center items-center ${getBackgroundClass(
        theme
      )}`}
    >
      <div className="relative w-40 h-40 mb-6">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3212/3212608.png"
          alt="Floating astronaut"
          className="w-full h-full animate-bounce"
        />
      </div>
      <H1 className="text-7xl font-extrabold text-blue-400 mb-4">
        [Code: 404]
      </H1>
      <Paragraph className="text-2xl mb-6 text-center max-w-md">
        Uh oh! Looks like you drifted into uncharted space. 🪐
      </Paragraph>

      <GradientButton
        onClick={() => navigate("/")}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
      >
        🚀 Take me home
      </GradientButton>
    </div>
  );
};

export default NotFound;
