import Tag from "../components/tag";
import { Eye } from "lucide-react";
import { H3, H4, P } from "../components/text";

export default function Projects() {
  return (
    <div id="projects" className="w-full max-w-2xl mt-8">
      <div className="sticky top-0 bg-[#222436]/50 backdrop-blur py-4 -mx-6 px-6 z-10">
        <a href="/#projects">
          <H3>PROJECTS</H3>
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 items-start mt-4">
        <div className="relative col-span-1 sm:col-span-2 border-2 border-[#82AAFF]">
          {
            // <div className="opacity-0 hover:opacity-100 transition-all duration-300 hover:cursor-pointer">
            //   <div className="absolute bg-black/80 h-full w-full"></div>
            //   <Eye className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-[#c8d3f5]" />
            // </div>
          }
          <img
            className="h-full w-full object-cover"
            src="/projects/bewellplus/screenshots/dashboard.png"
          />
        </div>
        <div className="col-span-1 sm:col-span-3">
          <H4>bewell+</H4>
          <P>Platform for insurance policy management</P>
          <div className="flex gap-2 flex-wrap mt-2">
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
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 items-start mt-6">
        <div className="relative col-span-1 sm:col-span-2 border-2 border-[#82AAFF]">
          {
            // <div className="opacity-0 hover:opacity-100 transition-all duration-300 hover:cursor-pointer">
            //   <div className="absolute bg-black/80 h-full w-full"></div>
            //   <Eye className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-[#c8d3f5]" />
            // </div>
          }
          <img
            className="h-full w-full object-cover"
            src="/projects/alexia/screenshots/chat.png"
          />
        </div>
        <div className="col-span-1 sm:col-span-3">
          <H4 className="uppercase font-medium">AlexIA</H4>
          <P>Chatbot for answering questions regarding your policy</P>
          <div className="flex gap-2 flex-wrap mt-2">
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
    </div>
  );
}
