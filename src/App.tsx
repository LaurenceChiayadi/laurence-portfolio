import NavBar from "./components/global/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Footer from "./components/global/Footer";

import { useTheme } from "./contexts/ThemeContext";
import { getBackgroundClass } from "./utilities/ThemeUtilities";

function App() {
  const { theme } = useTheme();
  return (
    <>
      <div
        className={`fixed -z-10 min-h-screen w-full ${getBackgroundClass(
          theme
        )}`}
      ></div>
      <main className="flex flex-col items-center md:px-8 lg:px-16">
        <NavBar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contacts />
        <Footer />
      </main>
    </>
  );
}

export default App;
