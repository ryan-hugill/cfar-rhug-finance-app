import { Link } from 'react-router';

export function Header() {
    return(
      <div className="header header-footer-bar">
        <h4>
          <Link to="/">cfar.dev/finance</Link>
        </h4>
      </div>
    );
}
