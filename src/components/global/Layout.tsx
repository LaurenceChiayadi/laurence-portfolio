import { Outlet } from "react-router-dom";

import { useTheme } from "../../contexts/ThemeContext";
import { getBackgroundClass } from "../../utilities/ThemeUtilities";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = () => {
  const { theme } = useTheme();

  return (
    <>
      <div
        className={`fixed -z-10 min-h-screen w-full ${getBackgroundClass(
          theme
        )}`}
      />
      <main className="flex flex-col items-center md:px-8 lg:px-16">
        <NavBar />
        <Outlet /> {/* Render child routes here */}
        <Footer />
      </main>
    </>
  );
};

export default Layout;
