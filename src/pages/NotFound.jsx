import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

export function NotFound() {
  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <h1 className="not-found-code">404</h1>
        <h2 className="not-found-title">Page Not Found</h2>
        <p className="not-found-text">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="not-found-btn">
          <FaHome /> Back to Home
        </Link>
      </div>
    </div>
  );
}