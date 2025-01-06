import "../styles/Education.css";
import { useState } from "react";
import { createPortal } from "react-dom";

export default function EducationForm() {
  const [showModal, setShowModal] = useState(false);
  const [school, setSchool] = useState("");
  const [schoolLoc, setSchoolLoc] = useState("");
  const [study, setStudy] = useState("");
  const [gradDate, setGradDate] = useState("");
  const [schoolAch, setSchoolAch] = useState("");

  return (
    <>
      <section id="education_section">
        <h2>Education</h2>
        <p>{school}</p>
        <p>{schoolLoc}</p>
        <p>{study}</p>
        <p>{gradDate}</p>
        <button onClick={() => setShowModal(true)}>Edit</button>
      </section>
      {showModal &&
        createPortal(
          <section id="education_form" className="form_portal">
            <form
              method="post"
              onSubmit={(e) => {
                e.preventDefault();
                setShowModal(false);
              }}
            >
              <fieldset>
                <legend>Education</legend>
                <p>
                  <label htmlFor="School">
                    <span aria-label="required">*</span>School
                  </label>
                  <br></br>
                  <input
                    value={school}
                    onChange={(e) => {
                      setSchool(e.target.value);
                    }}
                    id="School"
                    type="input"
                    name="school"
                    placeholder="ABC School"
                    required
                  ></input>
                </p>
                <p>
                  <label htmlFor="Study">
                    <span aria-label="required">*</span>Field of Study
                  </label>
                  <br></br>
                  <input
                    value={study}
                    onChange={(e) => {
                      setStudy(e.target.value);
                    }}
                    id="Study"
                    type="input"
                    name="study"
                    placeholder="Business"
                    required
                  ></input>
                </p>
                <p>
                  <label htmlFor="GradDate">
                    <span aria-label="required">*</span>Graduation Date
                  </label>
                  <br></br>
                  <input
                    value={gradDate}
                    onChange={(e) => {
                      setGradDate(e.target.value);
                    }}
                    id="GradDate"
                    type="input"
                    name="dateOfGraduation"
                    placeholder="MM/YYYY"
                    required
                  ></input>
                </p>
                <p>
                  <label htmlFor="schoolLocation">
                    <span aria-label="required">*</span>Location
                  </label>
                  <br></br>
                  <input
                    value={schoolLoc}
                    onChange={(e) => {
                      setSchoolLoc(e.target.value);
                    }}
                    id="schoolLocation"
                    type="input"
                    name="schoolLocation"
                    placeholder="City, State"
                    required
                  ></input>
                </p>
                <p>
                  <label htmlFor="schoolAchievements">
                    What are your academic achievements?
                  </label>
                  <br></br>
                  <textarea
                    value={schoolAch}
                    onChange={(e) => {
                      setSchoolAch(e.target.value);
                    }}
                    id="schoolAchievements"
                    type="input"
                    name="schoolAchievements"
                    placeholder="e.g. Recieved the Jane Doe Scholarship in YYYY"
                  ></textarea>
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
