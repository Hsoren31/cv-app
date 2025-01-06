import "../styles/Skills.css";

function SkillForm() {
  return (
    <section>
      <form method="post">
        <fieldset>
          <legend>Skills</legend>

          <p>
            <label htmlFor="skill">Skills</label>
            <input
              type="text"
              name="skill"
              id="skill"
              placeholder="Time management"
            />
          </p>
        </fieldset>
      </form>

      <button type="submit">Save</button>
    </section>
  );
}

export { SkillForm };
