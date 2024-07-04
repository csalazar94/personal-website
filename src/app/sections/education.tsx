import { H3, H4, H5, P } from "../components/text";

export default function Education() {
  return (
    <div id="education" className="mt-12 w-full max-w-2xl">
      <a href="/#education">
        <H3>EDUCATION</H3>
      </a>
      <div className="mt-4 flex flex-col gap-4">
        <div>
          <H5>2012 - 2018</H5>
          <H4>Industrial Civil Engineer</H4>
          <P>Universidad de Chile</P>
        </div>
        <div>
          <H5>2023</H5>
          <H4>IBM AI Engineering Professional Certificate</H4>
          <a
            href="https://www.credly.com/badges/87392728-e824-4d5b-b15f-9dae50cedffd/public_url"
            target="_blank"
          >
            Coursera
          </a>
        </div>
        <div>
          <H5>2022</H5>
          <H4>Google Project Management Certificate</H4>
          <a
            href="https://www.credly.com/badges/b8be7ba2-59c5-44b2-a48c-7be4c9301372/public_url"
            target="_blank"
          >
            Coursera
          </a>
        </div>
        <div>
          <H5>2021</H5>
          <H4>Google Project Management Certificate</H4>
          <a
            href="https://www.credly.com/badges/4c743cf8-3a44-4c73-8538-175af53030a1"
            target="_blank"
          >
            Scrum.org
          </a>
        </div>
      </div>
    </div>
  );
}
