import Tag from "../components/tag";
import { H3, H4, P } from "../components/text";

export default function Projects() {
  return (
    <div id="projects" className="mt-12 w-full max-w-2xl">
      <a href="/#projects">
        <H3>PROJECTS</H3>
      </a>
      <div className="mt-4">
        <H4>bewell+</H4>
        <P>Platform for insurance policy management</P>
        <div className="flex gap-2 flex-wrap">
          <Tag>AWS ECS</Tag>
          <Tag>AWS S3</Tag>
          <Tag>AWS SES</Tag>
          <Tag>Node.js</Tag>
          <Tag>Express</Tag>
          <Tag>Vue.js</Tag>
          <Tag>Ant Design</Tag>
          <Tag>PostgreSQL</Tag>
          <Tag>Redis</Tag>
        </div>
      </div>
      <div className="mt-2">
        <H4 className="uppercase font-medium">AlexIA</H4>
        <P>Chatbot for answering questions regarding your policy</P>
        <div className="flex gap-2 flex-wrap">
          <Tag>AWS ECS</Tag>
          <Tag>AWS SES</Tag>
          <Tag>FastAPI</Tag>
          <Tag>Langchain</Tag>
          <Tag>OpenAI</Tag>
          <Tag>Next.js</Tag>
          <Tag>shadcn/ui</Tag>
        </div>
      </div>
    </div>
  );
}
