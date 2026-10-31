// PLACEHOLDER (council fix 12): no sign-up form is wired yet.
// Storing emails needs a service or secret (owner gate). When approved, replace the
// "soon" pill below with a form that has: an email field, a consent line, and a submit button.
export default function Newsletter() {
  return (
    <section className="news" aria-labelledby="news-h">
      <h3 id="news-h">Monthly Live Well note</h3>
      <p>Three checked picks, upcoming events and one self-care tip, once a month. No ads, no sharing your email.</p>
      <span className="soon">Sign-up opens soon</span>
    </section>
  );
}
