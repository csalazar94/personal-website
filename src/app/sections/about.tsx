import { A, H3, P } from "../components/text";

export default function About() {
  return (
    <div id="about" className="mt-8 w-full max-w-2xl">
      <div className="sticky top-0 bg-[#222436]/50 backdrop-blur py-4 -mx-6 px-6">
        <a href="/#about">
          <H3>About Me</H3>
        </a>
      </div>
      <P className="mt-4">
        My journey into the world of technology began during the final stretch
        of my Industrial Engineering degree at Universidad de Chile. While
        working on my thesis at Banco BICE, I encountered professional software
        development for the first time and it was love at first sight.
      </P>
      <P className="mt-2">
        Since then, my career has been an adventure through various areas of the
        tech industry. I&apos;ve had the opportunity to develop and implement
        machine learning models, lead software development teams in
        collaboration with design teams, and create web applications from
        scratch.
      </P>
      <P className="mt-2">
        Today, my focus is on enhancing and optimizing the user experience for
        users of our{" "}
        <A href="https://somosbewell.cl" rel="noreferrer" target="_blank">
          bewell+
        </A>{" "}
        platform. I&apos;m passionate about developing new modules and tools for
        our users and clients, with one of my recent exciting projects being{" "}
        <A href="https://chat.somosbewell.cl" rel="noreferrer" target="_blank">
          AlexIA
        </A>
        , an AI-powered chatbot that answers users questions about their
        insurance policies and coverage.
      </P>
      <P className="mt-2">
        But there&apos;s more to me than just lines of code. When I&apos;m not
        in the digital world, you can find me lifting weights at the gym,
        keeping a close eye on the Santiago Stock Exchange, or spending quality
        time with my family, friends, and partner.
      </P>
      <P className="mt-2">
        My goal is to continue pushing the boundaries of what&apos;s possible in
        software development and AI, always with an eye on creating solutions
        that make a real difference in people&apos;s lives.
      </P>
    </div>
  );
}
