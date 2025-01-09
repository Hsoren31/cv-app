import "../styles/Experience.css";
import { useState } from "react";
import { createPortal } from "react-dom";

export default function Experience() {
  const [showModal, setShowModal] = useState(false);
  const [company, setCompany] = useState("");
  const [companyLoc, setCompanyLoc] = useState("");
  const [companyPos, setCompanyPos] = useState("");
  const [companyStartTime, setCompanyStartTime] = useState("");
  const [companyEndTime, setCompanyEndTime] = useState("");
  const [companyResp, setCompanyResp] = useState("");

  return (
    <>
      <section className="resume_section experience">
        <h2 className="section_title">Experience</h2>
        <div className="experience">
          <div className="exp-row">
            <h3>{!company ? "Company A" : company}</h3>
            <p>{!companyLoc ? "Location" : companyLoc}</p>
          </div>
          <div className="exp-row">
            <p>{!companyPos ? "Sales Representative" : companyPos}</p>
            <p>
              {!companyStartTime && !companyEndTime
                ? "Start and End date"
                : companyStartTime + "-" + companyEndTime}
            </p>
          </div>

          {/*
            Format Dates (Month/Day/Year)
           + Add check that end time is not before start date
           + Add a current checkbox that disables end date and returns 'current' */}
          <p className="company_resp">{companyResp}</p>
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
              <fieldset id="exp_form" className="form_fieldset">
                <legend>Experience</legend>

                <p>
                  <label htmlFor="company">
                    <span aria-label="required">*</span>Company Name
                  </label>
                  <br />
                  <input
                    value={company}
                    onChange={(e) => {
                      setCompany(e.target.value);
                    }}
                    type="text"
                    name="company"
                    id="company"
                    placeholder="Company A"
                    required
                  />
                </p>

                <p>
                  <label htmlFor="company_location">
                    <span aria-label="required">*</span>Location
                  </label>
                  <br />

                  <input
                    value={companyLoc}
                    onChange={(e) => {
                      setCompanyLoc(e.target.value);
                    }}
                    type="text"
                    id="company_location"
                    name="company_location"
                    placeholder="City, State"
                    required
                  />
                </p>

                <p>
                  <label htmlFor="position">
                    <span aria-label="required">*</span>Position
                  </label>
                  <br />

                  <input
                    value={companyPos}
                    onChange={(e) => {
                      setCompanyPos(e.target.value);
                    }}
                    type="text"
                    name="position"
                    id="position"
                    placeholder="Sales Representative"
                    required
                  />
                </p>

                <p>
                  <label htmlFor="company_time">
                    <span aria-label="required">*</span>Start & End Date
                  </label>
                  <br />

                  <input
                    value={companyStartTime}
                    onChange={(e) => {
                      setCompanyStartTime(e.target.value);
                    }}
                    type="date"
                    name="company_time"
                    id="company_start"
                    required
                  />
                  <input
                    value={companyEndTime}
                    onChange={(e) => {
                      setCompanyEndTime(e.target.value);
                    }}
                    type="date"
                    name="company_time"
                    id="company_end"
                    required
                  />
                </p>

                <p id="role_desc_input">
                  <label htmlFor="role_description">
                    What were your responsibilities and/or accomplishments?
                  </label>
                  <br />

                  <textarea
                    value={companyResp}
                    onChange={(e) => {
                      setCompanyResp(e.target.value);
                    }}
                    name="role_description"
                    id="role_description"
                  ></textarea>
                </p>
                <p id="exp_form_btns" className="form_btns">
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
