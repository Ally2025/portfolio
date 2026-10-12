import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

export function NotFound() {
  return (
    <div className="not-yet-page">
      <div className="not-yet-content">
        <h1 className="not-yet-code">Not Yet</h1>
        <h2 className="not-yet-title">The Page is not yet deployed</h2>
        <p className="not-yet-text">
          Oops! The page you're looking for hasn't been deployed yet.
        </p>
        <Link to="/" className="not-yet-btn">
          <FaHome /> Back to Home
        </Link>
      </div>
    </div>
  );
}