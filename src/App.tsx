import Contacts from "./components/Contacts";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Tech from "./components/Tech";
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
        <Tech />
        <Projects />
        <Contacts />
      </main>
    </>
  );
}

export default App;
