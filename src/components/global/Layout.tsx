import { Outlet } from "react-router-dom";

import { useTheme } from "../../contexts/ThemeContext";
import { getBackgroundClass } from "../../utilities/ThemeUtilities";

const Layout = () => {
  const { theme } = useTheme();

  return (
    <>
      <div
        className={`fixed -z-10 min-h-full w-full ${getBackgroundClass(theme)}`}
      />
      <main className="flex flex-col items-center md:px-8 lg:px-16">
        <Outlet /> {/* Render child routes here */}
      </main>
    </>
  );
};

export default Layout;
