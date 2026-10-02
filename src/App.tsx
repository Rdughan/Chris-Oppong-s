import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Belief from "./components/Belief";
import Impact from "./components/Impact";
import Work from "./components/Work";
import Ideas from "./components/Ideas";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatButtons from "./components/FloatButtons";

export default function App() {
  return (
    <div id="top" className="pb-[132px] min-[721px]:pb-0">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-forest focus:text-paper focus:px-4 focus:py-2 focus:rounded-md"
      >
        Skip to main content
      </a>

      <Nav />

      <main id="main">
        <Hero />
        <Belief />
        <Impact />
        <Work />
        <Ideas />
        <About />
        <Contact />
      </main>

      <Footer />
      <FloatButtons />
    </div>
  );
}
