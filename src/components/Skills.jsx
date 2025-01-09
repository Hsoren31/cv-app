import "../styles/Skills.css";
import { useState } from "react";
import { createPortal } from "react-dom";

export default function Skill() {
  const [showModal, setShowModal] = useState(false);
  const [skills, setSkills] = useState("");
  /*Skills should be an array that we will use array.map to render */
  return (
    <>
      <section className="resume_section skills">
        <h2 className="section_title">Skills</h2>
        <ul>
          <li>{!skills ? "Time Management" : skills}</li>
        </ul>
        <button
          className="edit fa-regular fa-pen-to-square"
          onClick={() => setShowModal(true)}
        ></button>
      </section>
      {showModal &&
        createPortal(
          <section className="form_portal">
            <form
              className="form"
              method="post"
              onSubmit={(e) => {
                e.preventDefault();
                setShowModal(false);
              }}
            >
              <fieldset id="skill_form" className="form_fieldset">
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
                <p className="form_btns">
                  <button onClick={() => setShowModal(false)}>Cancel</button>
                  {/*Cancel button should not save input values. It bypasses the form validation */}
                  <button
                    className="save_btn"
                    type="submit"
                    onSubmit={(e) => {
                      e.preventDefault();
                      setShowModal(false);
                    }}
                  >
                    Save
                  </button>
                </p>
              </fieldset>
            </form>
          </section>,
          document.body
        )}
    </>
  );
}
