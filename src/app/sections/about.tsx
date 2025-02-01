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
        My journey into technology started during my &quot;Ingeniería Civil
        Industrial&quot; degree at Universidad de Chile. While working on my
        thesis at Banco BICE, I discovered professional software development,
        and it was love at first sight.
      </P>
      <P className="mt-2">
        Since then, I&apos;ve evolved from data analytics and machine learning
        into full-stack development and cloud infrastructure. I’ve built
        scalable platforms, led development teams, and designed AI-driven
        solutions that enhance user experiences.
      </P>
      <P className="mt-2">
        Currently, I lead the development of
        <A href="https://somosbewell.cl" rel="noreferrer" target="_blank">
          {" "}
          bewell+
        </A>
        , an insurance management platform, where I focus on building secure and
        efficient systems. One of my latest projects,
        <A href="https://chat.somosbewell.cl" rel="noreferrer" target="_blank">
          {" "}
          AlexIA
        </A>
        , is an AI-powered chatbot that helps users understand their policies
        and coverage seamlessly.
      </P>
      <P className="mt-2">
        Beyond my work at bewell, I&apos;m also developing arriendospro.com, a
        platform for managing product rentals. It streamlines the rental process
        with an intuitive booking system and inventory tracking. The platform is
        built with Go, Next.js, and AWS, offering a scalable and modern solution
        for rental businesses.
      </P>
      <P className="mt-2">
        Beyond coding, I enjoy lifting weights, following the Santiago Stock
        Exchange, and spending time with my family, friends, and partner.
      </P>
      <P className="mt-2">
        I&apos;m always looking to push the boundaries of software development
        and AI, solving real-world problems with innovative and scalable
        solutions.
      </P>
    </div>
  );
}
