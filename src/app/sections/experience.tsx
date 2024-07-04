import { H3, H4, H5, UL } from "../components/text";

export default function Experience() {
  return (
    <div id="experience" className="mt-12 w-full max-w-2xl">
      <a href="/#experience">
        <H3>WORK EXPERIENCE</H3>
      </a>
      <div className="mt-4 flex flex-col gap-4">
        <div>
          <H5>December 2023 - Present</H5>
          <H4>Sr. Project Manager at bewell Corredores de Seguros</H4>
          <UL className="text-[#828bb8]">
            <li>
              Led and develop of{" "}
              <a href="https://somosbewell.cl" target="_blank">
                bewell+
              </a>{" "}
              platform for insurance policy management
            </li>
            <li>
              Designed and implemented automated services using Docker and AWS
            </li>
            <li>
              Developed AI-powered chatbot{" "}
              <a href="https://chat.somosbewell.cl" target="_blank">
                AlexIA
              </a>{" "}
              for insurance policy questions
            </li>
            <li>
              Implemented scalable file processing systems using Redis and
              Bull.js
            </li>
          </UL>
        </div>
        <div>
          <H5>July 2021 - November 2023</H5>
          <H4>Project Manager at Jumpitt</H4>
          <UL>
            <li>Managed projects from discovery to execution</li>
            <li>
              Coordinated with design and development teams to ensure technical
              feasibility
            </li>
            <li>
              Implemented Scrum methodologies using Jira for project management
            </li>
            <li>
              Developed full-stack web applications using various technologies
              including JavaScript, MongoDB, and AWS
            </li>
          </UL>
        </div>
        <div>
          <H5>January 2020 - June 2021</H5>
          <H4>Business Intelligence Manager at Banco BICE</H4>
          <UL>
            <li>
              Led a team of four engineers in creating successful commercial
              campaigns
            </li>
            <li>
              Coordinated campaign launches and monitoring using Microsoft
              Planner
            </li>
            <li>Implemented customer data in Salesforce</li>
            <li>
              Conducted customer segmentation analysis using Python and
              QlikView/QlikSense
            </li>
          </UL>
        </div>
        <div>
          <H5>January 2018 - December 2019</H5>
          <H4>Business Intelligence Analyst at Banco BICE </H4>
          <UL>
            <li>
              Developed predictive models for consumer credit sales and credit
              card usage
            </li>
            <li>Improved pre-approved consumer credit campaigns</li>
            <li>
              Utilized Python for data processing, visualization, and machine
              learning model development
            </li>
            <li>
              Automated data pipelines to improve analysis efficiency with Luigi
            </li>
          </UL>
        </div>
      </div>
    </div>
  );
}
