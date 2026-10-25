import { Link } from "react-router-dom";
import "./Contribute.scss";

/**
 * "Are we missing a gallery?" — invites visitors to add a space.
 *
 * Links to /submit. That route sends signed-out visitors to /login,
 * and login / signup both return to /submit, so the note under the
 * button sets that expectation before they click.
 */

const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path
      d="M2 7h10M8 3l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Contribute() {
  return (
    <section className="ct" id="contribute" aria-labelledby="ct-title">
      <h2 className="ct__title" id="ct-title">
        Are we missing <em>a gallery?</em>
      </h2>
      <p className="ct__lede">
        Know a space that isn’t on the map? Send it in and help keep this
        guide to Lagos art up to date.
      </p>
      <Link className="ct__btn" to="/submit">
        Submit a gallery <Arrow />
      </Link>
      <p className="ct__note">You’ll need a free account. It takes a minute.</p>
    </section>
  );
}
