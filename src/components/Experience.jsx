import "../styles/Experience.css";

function ExperienceForm() {
  return (
    <section>
      <form method="post">
        <fieldset>
          <legend>Experience</legend>

          <p>
            <label htmlFor="company">
              <span aria-label="required">*</span>Company Name
            </label>
            <input
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
              type="date"
              name="company_time"
              id="company_start"
              required
            />
            <input type="date" name="company_time" id="company_end" required />
          </p>

          <p>
            <label htmlFor="role_description">
              What were your responsibilities and/or accomplishments?
            </label>
            <textarea name="role_description" id="role_description"></textarea>
          </p>

          <button type="submit">Save</button>
        </fieldset>
      </form>
    </section>
  );
}

export { ExperienceForm };
