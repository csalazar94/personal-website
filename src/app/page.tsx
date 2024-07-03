import About from "./components/about";
import Brief from "./components/brief";
import Experience from "./components/experience";

export default function Home() {
  return (
    <main className="bg-slate-50 p-2 flex flex-col justify-center items-center">
      <Brief />
      <About />
      <Experience />
    </main>
  );
}
