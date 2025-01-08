import { useState } from "react";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skill from "./components/Skills";
import Summary from "./components/Summary";
import "./App.css";

/*
Experience/Education/Skills will need an "add" button
to add more than one component if necessary
*/

function App() {
  return (
    <section id="resume_page">
      <Contact />
      <Summary />
      <Experience />
      <Skill />
      <Education />
    </section>
  );
}

export { App };
