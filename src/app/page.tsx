import About from "./sections/about";
import Brief from "./sections/brief";
import Education from "./sections/education";
import Experience from "./sections/experience";
import Projects from "./sections/projects";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center px-6 py-12 text-balance lg:text-pretty">
      <Brief />
      <About />
      <Projects />
      <Experience />
      <Education />
    </main>
  );
}
