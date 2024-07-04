import About from "./components/about";
import Brief from "./components/brief";
import Contact from "./components/contact";
import Education from "./components/education";
import Experience from "./components/experience";
import Projects from "./components/projects";

export default function Home() {
  return (
    <main className="bg-slate-50 p-2 flex flex-col justify-center items-center">
      <Brief />
      <About />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </main>
  );
}
