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
      <section className="resume_section education">
        <h2 className="section_title">Education</h2>
        <div className="education_div">
          <div className="ed-row">
            <p>{!school ? "School Name" : school}</p>
            <p>{!schoolLoc ? "School Location" : schoolLoc}</p>
          </div>
          <div className="ed-row">
            <p>{!study ? "School Study" : study}</p>
            <p>{!gradDate ? "3/2025" : gradDate}</p>
          </div>
          <p>{schoolAch}</p>
        </div>
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
              <fieldset id="education_form" className="form_fieldset">
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
