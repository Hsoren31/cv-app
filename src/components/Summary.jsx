import "../styles/Summary.css";
import { useState } from "react";
import { createPortal } from "react-dom";

export default function Summary() {
  const [showModal, setShowModal] = useState(false);
  const [summary, setSummary] = useState("");

  return (
    <>
      <section className="resume_section summary">
        <h2 className="section_title">Summary</h2>
        <p>
          {!summary
            ? "Enter a brief description of your professional background."
            : summary}
        </p>
        <button
          id="edit_summary"
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
              <fieldset className="form_fieldset">
                <legend>Summary</legend>

                <p>
                  <label htmlFor="summary">
                    How would you describe yourself?
                  </label>
                  <br></br>
                  <textarea
                    value={summary}
                    onChange={(e) => {
                      setSummary(e.target.value);
                    }}
                    name="summary"
                    id="summary"
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
