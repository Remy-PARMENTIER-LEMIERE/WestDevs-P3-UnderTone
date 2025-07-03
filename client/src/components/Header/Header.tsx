import { useState } from "react";
import { Link } from "react-router";
import { useAuth } from "../../services/AuthContext";
import "./Header.css";

function Header() {
  const [showLinks, setShowLinks] = useState(false);
  const [showPopover, setShowPopover] = useState(false);

  const { isLogged, setIsLogged } = useAuth();

  const handleShowLinks = () => setShowLinks(!showLinks);

  const handleLogout = () => {
    setIsLogged(false);
    setShowPopover(false);
  };

  const handleAvatarToggle = () => {
    setShowPopover((prev) => !prev);
  };

  return (
    <header>
      <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
        <Link to="/app">
          <img
            className="logo"
            src="/images/Logo_UnderTone.svg"
            alt="Logo représentant un casque"
          />
        </Link>

        <div className="nav-wrapper">
          <ul>
            <li>
              <Link to="/app" onClick={handleShowLinks}>
                EVENEMENT
                <span />
              </Link>
            </li>

            <li>
              <Link to="/app" onClick={handleShowLinks}>
                RECHERCHE
              </Link>
            </li>

            <li>
              <Link to="/app" onClick={handleShowLinks}>
                CONTACT
              </Link>
            </li>
          </ul>

          <button
            type="button"
            onClick={handleAvatarToggle}
            className="avatar-button"
          >
            <img
              src="/images/Generic avatar.svg"
              alt="Connexion icon"
              className="avatar-icon"
            />
          </button>

          {showPopover && (
            <div className="popover">
              {isLogged ? (
                <>
                  <Link
                    to="/app/account"
                    onClick={() => setShowPopover(false)}
                    className="popover-link"
                  >
                    Mon compte
                  </Link>
                  <Link
                    to="/app/artist-profile"
                    onClick={() => setShowPopover(false)}
                    className="popover-link"
                  >
                    Mon profil artiste
                  </Link>
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="popover-button"
                  >
                    Se déconnecter
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={() => setShowPopover(false)}
                    className="popover-link"
                  >
                    Se connecter
                  </Link>
                  <Link
                    to="/app/signin"
                    onClick={() => setShowPopover(false)}
                    className="popover-link"
                  >
                    Créer un compte
                  </Link>
                </>
              )}
            </div>
          )}

          <button
            type="button"
            className="navbar_burger"
            onClick={handleShowLinks}
          >
            <span className="burger_bar" />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
