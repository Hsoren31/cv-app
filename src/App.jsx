import { useState } from "react";
import { ContactForm } from "./components/Contact";
import { EducationForm } from "./components/Education";
import { ExperienceForm } from "./components/Experience";
import { SkillForm } from "./components/Skills";
import { SummaryForm } from "./components/Summary";
import "./App.css";

/*
Experience/Education/Skills will need an "add" button
to add more than one component if necessary
*/

function App() {
  return (
    <section>
      <ContactForm />
      <SummaryForm />
      <ExperienceForm />
      <SkillForm />
      <EducationForm />
    </section>
  );
}

export { App };
