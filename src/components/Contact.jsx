import "../styles/Contact.css";

function ContactForm() {
  return (
    <section>
      <form method="post">
        <fieldset>
          <legend>Contact Info</legend>
          <p>
            <label htmlFor="first_name">
              <span aria-label="required">*</span>First Name:
            </label>
            <br></br>
            <input
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
              id="location"
              type="text"
              name="location"
              placeholder="City, State"
            />
          </p>
          <button type="submit">Save</button>
        </fieldset>
      </form>
    </section>
  );
}

export { ContactForm };
