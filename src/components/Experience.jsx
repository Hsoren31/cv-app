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
      <section id="experience_section">
        <h2>Experience</h2>
        <div>
          <h3>{company}</h3>
          <p>{companyLoc}</p>
          <p>{companyPos}</p>
          <p>{companyStartTime + "-" + companyEndTime}</p>
          {/*
            Format Dates (Month/Day/Year)
           + Add check that end time is not before start date
           + Add a current checkbox that disables end date and returns 'current' */}
          <p>{companyResp}</p>
        </div>
        <button onClick={() => setShowModal(true)}>Edit</button>
      </section>
      {showModal &&
        createPortal(
          <section id="exp_form" className="form_portal">
            <form
              method="post"
              onSubmit={(e) => {
                e.preventDefault();
                setShowModal(false);
              }}
            >
              <fieldset>
                <legend>Experience</legend>

                <p>
                  <label htmlFor="company">
                    <span aria-label="required">*</span>Company Name
                  </label>
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

                <p>
                  <label htmlFor="role_description">
                    What were your responsibilities and/or accomplishments?
                  </label>
                  <textarea
                    value={companyResp}
                    onChange={(e) => {
                      setCompanyResp(e.target.value);
                    }}
                    name="role_description"
                    id="role_description"
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
