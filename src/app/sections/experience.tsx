import { H3, H4, H5, P, UL } from "../components/text";

export default function Experience() {
  return (
    <div id="experience" className="mt-8 w-full max-w-2xl">
      <div className="sticky top-0 bg-[#222436]/50 backdrop-blur py-4 -mx-6 px-6">
        <a href="/#experience">
          <H3>WORK EXPERIENCE</H3>
        </a>
      </div>
      <div className="mt-4 flex flex-col gap-4">
        <div>
          <H5>December 2023 - Present</H5>
          <H4>IT Lead at bewell Corredores de Seguros</H4>
          <P>
            Leading the development of bewell+, an internal platform for
            insurance policy management.
          </P>
          <UL className="text-[#828bb8]">
            <li>
              Built the platform using Vue.js, Express.js, and PostgreSQL.
            </li>
            <li>
              Developed AlexIA, an AI-powered chatbot that answers
              policy-related questions using FastAPI, LangChain, and OpenAI
              APIs.
            </li>
            <li>
              Integrated OAuth2 with AWS Cognito for secure M2M authentication
              and JWT for user sessions.
            </li>
            <li>
              Automated policy updates and background tasks with Redis/Bull.js,
              reducing manual errors.
            </li>
            <li>
              Mentored a junior developer, cutting task delivery time by 50% (6
              → 3 weeks).
            </li>
          </UL>
        </div>
        <div>
          <H5>July 2021 - November 2023</H5>
          <H4>Project Manager at Jumpitt</H4>
          <P>Managed multiple software projects from discovery to execution.</P>
          <UL>
            <li>
              Led 5 projects, including a real-time Node.js/MongoDB chatbot for
              client support.
            </li>
            <li>
              Coordinated with design and development teams to ensure on-time
              delivery using Jira and Agile methodologies.
            </li>
            <li>
              Contributed to full-stack web development, leveraging JavaScript,
              MongoDB, and AWS.
            </li>
          </UL>
        </div>
        <div>
          <H5>January 2018 - June 2021</H5>
          <H4>Business Intelligence Roles at Banco BICE</H4>
          <P>
            Worked in data analytics, machine learning, and business
            intelligence.
          </P>
          <UL>
            <li>
              Developed predictive models (logistic regression, k-means
              clustering) to assess credit risk and segment customers.
            </li>
            <li>
              Led a team of four engineers to create commercial campaigns based
              on customer analytics.
            </li>
            <li>
              Integrated customer data into Salesforce and automated processes
              with Python and Luigi.
            </li>
          </UL>
        </div>
      </div>
    </div>
  );
}
