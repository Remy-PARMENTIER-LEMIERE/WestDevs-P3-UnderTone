import { Link } from "react-router";
import "./Header.css";
import { useState } from "react";

function Header() {
  const [showLinks, setShowLinks] = useState(false);

  const handleSowLinks = () => setShowLinks(!showLinks);

  return (
    <header>
      <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"} `}>
        <Link to="/app">
          <img
            className="logo"
            src="images/Logo_UnderTone.svg"
            alt="Logo représentant un casque"
          />
        </Link>
        <div className="nav-wrapper">
          <ul>
            <li>
              <Link to="/app" onClick={handleSowLinks}>
                EVENEMENT
                <span />
              </Link>
            </li>

            <li>
              <Link to="/app" onClick={handleSowLinks}>
                RECHERCHE
              </Link>
            </li>

            <li>
              <Link to="/app" onClick={handleSowLinks}>
                CONTACT
              </Link>
            </li>
          </ul>
          <Link to=" ">
            <img src="images/Generic avatar.svg" alt="Connexion icon" />
          </Link>
          <button
            className="navbar_burger"
            type="button"
            onClick={handleSowLinks}
          >
            <span className="burger_bar" />
          </button>
        </div>
      </nav>
    </header>
  );
}
export default Header;
