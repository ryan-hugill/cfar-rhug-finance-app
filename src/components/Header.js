import { Link } from 'react-router';

export function Header() {
    return(
      <div className="header header-footer-bar">
        <h4>
          <Link to="/">{"<finance.cfar.dev/>"}</Link>
        </h4>
      </div>
    );
}