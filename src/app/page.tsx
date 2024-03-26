import ChileMap from "./components/chile-map";
import GitHub from "./components/github";
import LinkedIn from "./components/linkedin";
import WelcomeTitle from "./components/welcome-title";

export default function Home() {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-2 min-h-dvh items-center justify-center px-12 py-12">
      <div className="hidden lg:flex justify-center items-center w-full fill-emerald-500">
        <ChileMap />
      </div>
      <div className="lg:max-w-2xl">
        <WelcomeTitle />
        <p className="text-lg font-normal text-gray-600 mb-2">
          With a strong background in industrial civil engineering and extensive
          experience in data analysis, project management, and software
          development, I have honed my skills in creating innovative solutions
          and driving business growth. My career aspiration is to continue
          advancing in the field of software development, specializing in
          backend technologies, where I can contribute my expertise in building
          scalable and efficient systems that meet the evolving needs of
          organizations. I am passionate about leveraging technology to drive
          positive change and enhance operational efficiency, and I am committed
          to continuous learning and growth to stay at the forefront of the
          industry. Currently, I am seeking work at a company that develops the
          tools I use daily, allowing me to maximize my skills and contribute
          effectively to impactful projects.
        </p>
        <div className="flex gap-2">
          <a
            aria-label="GitHub"
            className="h-10 w-10 fill-emerald-500 hover:fill-blue-500 transform hover:scale-110 transition-transform"
            href="https://github.com/csalazar94"
            target="_blank"
          >
            <GitHub />
          </a>
          <a
            aria-label="LinkedIn"
            className="h-10 w-10 fill-emerald-500 hover:fill-blue-500 transform hover:scale-110 transition-transform"
            href="https://www.linkedin.com/in/camilo-salazar-a8630b78"
            target="_blank"
          >
            <LinkedIn />
          </a>
        </div>
      </div>
    </main>
  );
}
