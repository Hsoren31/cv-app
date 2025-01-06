import "../styles/Summary.css";
import { useState } from "react";
import { createPortal } from "react-dom";

export default function Summary() {
  const [showModal, setShowModal] = useState(false);
  const [summary, setSummary] = useState("");

  return (
    <>
      <section id="summary_section">
        <h2>Summary</h2>
        <p>{summary}</p>
        <button onClick={() => setShowModal(true)}>Edit</button>
      </section>
      {showModal &&
        createPortal(
          <section id="summary_form" className="form_portal">
            <form
              method="post"
              onSubmit={(e) => {
                e.preventDefault();
                setShowModal(false);
              }}
            >
              <fieldset>
                <legend>Summary</legend>

                <p>
                  <label htmlFor="summary">
                    How would you describe yourself?
                  </label>
                  <textarea
                    value={summary}
                    onChange={(e) => {
                      setSummary(e.target.value);
                    }}
                    name="summary"
                    id="summary"
                  ></textarea>
                </p>
              </fieldset>
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
            </form>
          </section>,
          document.body
        )}
    </>
  );
}
