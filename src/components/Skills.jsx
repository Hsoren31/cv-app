import "../styles/Skills.css";
import { useState } from "react";
import { createPortal } from "react-dom";

export default function Skill() {
  const [showModal, setShowModal] = useState(false);
  const [skills, setSkills] = useState("");
  /*Skills should be an array that we will use array.map to render */
  return (
    <>
      <section id="skills_section">
        <h2>Skills</h2>
        <ul>
          <li>{skills}</li>
        </ul>
        <button onClick={() => setShowModal(true)}>Edit</button>
      </section>
      {showModal &&
        createPortal(
          <section id="skill_form" className="form_portal">
            <form
              method="post"
              onSubmit={(e) => {
                e.preventDefault();
                setShowModal(false);
              }}
            >
              <fieldset>
                <legend>Skills</legend>

                <p>
                  <label htmlFor="skill">Skills</label>
                  <input
                    value={skills}
                    onChange={(e) => {
                      setSkills(e.target.value);
                    }}
                    type="text"
                    name="skill"
                    id="skill"
                    placeholder="Time management"
                  />
                </p>

                <button onClick={() => setShowModal(false)}>Cancel</button>
                {/*Cancel button should not save input values. It bypasses the form validation */}
                <button
                  type="submit"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setShowModal(false);
                  }}
                >
                  Save
                </button>
              </fieldset>
            </form>
          </section>,
          document.body
        )}
    </>
  );
}
