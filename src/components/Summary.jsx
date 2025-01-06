import "../styles/Summary.css";

function SummaryForm() {
  return (
    <section>
      <form method="post">
        <fieldset>
          <legend>Summary</legend>

          <p>
            <label htmlFor="summary">How would you describe yourself?</label>
            <textarea name="summary" id="summary"></textarea>
          </p>
        </fieldset>
      </form>
      <button type="submit">Save</button>
    </section>
  );
}

export { SummaryForm };
