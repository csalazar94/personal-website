import Contact from "../components/contact";
import { Slider } from "../components/slider";
import { H1, H2, P } from "../components/text";

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

export default function Brief() {
  return (
    <div id="brief" className="w-full max-w-2xl">
      <H1>Camilo Salazar</H1>
      <H2>Industrial Civil Engineer</H2>
      <P className="my-2">
        Engineering data-driven solutions: Merging AI innovation with full-stack
        mastery.
      </P>
      <Contact />
    </div>
  );
}
