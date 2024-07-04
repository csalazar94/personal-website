export default function Projects() {
  return (
    <div id="projects" className="prose mt-8 w-full">
      <a href="/#projects">
        <h3>PROJECTS</h3>
      </a>
      <div>
        <h4>bewell+</h4>
        <p>Platform for insurance policy management</p>
        <ul>
          <li>AWS ECS</li>
          <li>AWS S3</li>
          <li>AWS SES</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>Vue.js</li>
          <li>Ant Design</li>
          <li>PostgreSQL</li>
          <li>Redis</li>
        </ul>
      </div>
      <div>
        <h4>AlexIA</h4>
        <p>Chatbot for answering questions regarding your policy</p>
        <ul>
          <li>AWS ECS</li>
          <li>AWS SES</li>
          <li>FastAPI</li>
          <li>Langchain</li>
          <li>OpenAI</li>
          <li>Next.js</li>
          <li>shadcn/ui</li>
        </ul>
      </div>
    </div>
  );
}
