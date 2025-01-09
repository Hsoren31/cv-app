import { useState } from "react";
import { createPortal } from "react-dom";
import "../styles/Contact.css";

export default function Contact() {
  const [showModal, setShowModal] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");

  return (
    <>
      <section className="resume_section contact">
        <h1 id="name" className="section_title">
          {!firstName && !lastName ? "Jane Doe" : firstName + " " + lastName}
        </h1>
        <ul id="contact_list">
          <li>{!email ? "janedoe@email.com" : email}</li>
          <li>{phone}</li>
          <li>{location}</li>
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
              <fieldset id="contact_form" className="form_fieldset">
                <legend>Contact Info</legend>
                <p>
                  <label htmlFor="first_name">
                    <span aria-label="required">*</span>First Name:
                  </label>
                  <br></br>
                  <input
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                    id="first_name"
                    type="text"
                    name="first_name"
                    placeholder="John"
                    required
                  />
                </p>
                <p>
                  <label htmlFor="last_name">
                    <span aria-label="required">*</span>Last Name:
                  </label>
                  <br></br>

                  <input
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                    id="last_name"
                    type="text"
                    name="last_name"
                    placeholder="Smith"
                    required
                  />
                </p>
                <p>
                  <label htmlFor="email">
                    <span aria-label="required">*</span>Email:
                  </label>
                  <br></br>

                  <input
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    id="email"
                    type="email"
                    name="email"
                    placeholder="John.Smith123@resume..."
                    required
                  />
                </p>
                <p>
                  <label htmlFor="phone_num">Phone Number: </label>
                  <br></br>

                  <input
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    id="phone_num"
                    type="tel"
                    name="phone_num"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    placeholder="555-555-5555"
                  />
                </p>
                <p>
                  <label htmlFor="location">Location: </label>
                  <br></br>

                  <input
                    value={location}
                    onChange={(e) => {
                      setLocation(e.target.value);
                    }}
                    id="location"
                    type="text"
                    name="location"
                    placeholder="City, State"
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
