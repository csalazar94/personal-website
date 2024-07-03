const imgs = [
  "/logos/aws.svg",
  "/logos/css.svg",
  "/logos/docker.svg",
  "/logos/draw-io.svg",
  "/logos/express.svg",
  "/logos/fastapi.svg",
  "/logos/figma.svg",
  "/logos/github.svg",
  "/logos/gitlab.svg",
  "/logos/html5.svg",
  "/logos/javascript.svg",
  "/logos/jira.svg",
  "/logos/matplotlib.svg",
  "/logos/mongodb.svg",
  "/logos/nestjs.svg",
  "/logos/nextjs.svg",
  "/logos/nodejs.svg",
  "/logos/notion.svg",
  "/logos/openai.svg",
  "/logos/pandas.svg",
  "/logos/postgresql.svg",
  "/logos/prisma.svg",
  "/logos/python.svg",
  "/logos/qlik.svg",
  "/logos/react.svg",
  "/logos/redis.svg",
  "/logos/tailwindcss.svg",
  "/logos/typescript.svg",
  "/logos/vercel.svg",
  "/logos/vue.svg",
];

const Slider = () => (
  <div className="inline-flex animate-slide whitespace-nowrap w-max">
    {imgs.map((src, idx) => (
      <img key={idx} className="h-10 mx-5 inline" src={src} />
    ))}
  </div>
);

export default function Brief() {
  return (
    <div id="brief" className="prose text-balance w-full">
      <h1 className="m-0">Camilo Salazar</h1>
      <h2 className="m-0">Industrial Civil Engineer</h2>
      <p className="m-0 mt-2">
        Engineering data-driven solutions: Merging AI innovation with full-stack
        mastery.
      </p>
      <div className="relative whitespace-nowrap overflow-hidden">
        <Slider />
        <Slider />
        <div className="absolute top-0 left-0 h-full w-36 bg-gradient-to-r from-slate-50 to-transparent" />
        <div className="absolute top-0 right-0 h-full w-36 bg-gradient-to-l from-slate-50 to-transparent" />
      </div>
      <div className="mt-2">
        <a
          className="bg-black rounded-md px-4 py-2 font-semibold text-white no-underline"
          href="mailto:camilosalazar94@gmail.com"
        >
          Contact
        </a>
      </div>
    </div>
  );
}
