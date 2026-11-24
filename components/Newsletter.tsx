// "Coming soon" only: nothing is collected. No form, no email field.
// A real sign-up (email field + consent line + a service to store addresses) is an owner gate; the SPEC defines none yet.
export default function Newsletter() {
  return (
    <section className="news" aria-labelledby="news-h">
      <h3 id="news-h">Monthly Live Well note</h3>
      <p>A monthly email is planned: three checked picks, upcoming events and one self-care tip. It is not running yet, and this site does not collect email addresses.</p>
      <span className="soon">Coming soon</span>
    </section>
  );
}
