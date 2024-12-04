import Link from "next/link";
import './header.css'
export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-danger">
        <div className="container-fluid d-flex align-items-center">
          <img src="clicky.jpg" className="logo" alt="logo" />
          {/* Toggle button for mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* Navbar links */}
          <div className="collapse navbar-collapse w-100" id="navbarNav">
            <div className="d-flex w-100 justify-content-center">
              <ul className="navbar-nav d-flex flex-row justify-content-center">
                <li className="nav-item">
                  <b>
                    <Link className="nav-link text-white" href="/">
                      HOME
                    </Link>
                  </b>
                </li>

                <li className="nav-item">
                  <b>
                    <Link className="nav-link text-white" href="/mens">
                      FOR MENS
                    </Link>
                  </b>
                </li>

                <li className="nav-item">
                  <b>
                    <Link className="nav-link text-white" href="/womens">
                      FOR WOMENS
                    </Link>
                  </b>
                </li>

                <li className="nav-item">
                  <b>
                    <Link className="nav-link text-white" href="/kids">
                      FOR KIDS
                    </Link>
                  </b>
                </li>

                <li className="nav-item">
                  <b>
                    <Link className="nav-link text-white" href="/cart">
                      CART
                    </Link>
                  </b>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
