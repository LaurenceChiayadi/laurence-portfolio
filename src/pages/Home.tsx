import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contacts from "../components/Contacts";
import Footer from "../components/global/Footer";
import NavBar from "../components/global/NavBar";

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contacts />
      <Footer />
    </>
  );
};

export default Home;
