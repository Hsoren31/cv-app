import "../styles/Education.css";

function EducationForm() {
  return (
    <section>
      <form method="post">
        <fieldset>
          <legend>Education</legend>
          <p>
            <label htmlFor="School">
              <span aria-label="required">*</span>School
            </label>
            <br></br>
            <input
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
              id="schoolAchievements"
              type="input"
              name="schoolAchievements"
              placeholder="e.g. Recieved the Jane Doe Scholarship in YYYY"
              required
            ></textarea>
          </p>

          <button type="submit">Save</button>
        </fieldset>
      </form>
    </section>
  );
}

export { EducationForm };
