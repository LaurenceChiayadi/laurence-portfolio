import Contacts from "./components/Contacts";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Tech from "./components/Tech";
import { useTheme, ThemeEnum } from "./contexts/ThemeContext";

function App() {
  const { theme } = useTheme();
  return (
    <>
      <div
        className={
          theme === ThemeEnum.Light
            ? "fixed -z 10 min-h-screen w-full bg-white bg-[radial-gradient(#d3d3d3_1px,transparent_1px)] [background-size:20px_20px]"
            : "fixed -z 10 min-h-screen w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"
        }
      ></div>
      <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
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
