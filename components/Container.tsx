import { context } from "@/pages";
import React, { useContext } from "react";
import ContactMe from "./contact-me/ContactMe";
import Card from "./hero-section/Card";
import Projects from "./project-section/Projects";

function Container() {
  const { whatProject } = useContext(context);
  console.log(whatProject);
  return (
    <section className='section mb-12 xl:mb-0 flex w-full items-center gap-4 flex-wrap xl:flex-nowrap'>
      <Card />
      {whatProject === 1 ? <Projects id={1} /> : <ContactMe />}
    </section>
  );
}

export default Container;
