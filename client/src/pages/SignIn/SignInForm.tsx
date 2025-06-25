import { Link } from "react-router";
import "./SignInForm.css";

function SignInForm() {
  return (
    <main className="signin-page">
      <section className="form-container">
        <h1>Inscription</h1>

        <div className="custom-radio-holder">
          <input
            className="custom-radio-input"
            id="artist"
            type="radio"
            name="role"
            value="artist"
          />
          <label className="custom-radio-wrapper" htmlFor="artist">
            <div className="custom-radio">
              <div className="inner">Artiste</div>
            </div>
          </label>

          <input
            className="custom-radio-input"
            id="user"
            type="radio"
            name="role"
            value="user"
          />
          <label className="custom-radio-wrapper" htmlFor="user">
            <div className="custom-radio">
              <div className="inner">User</div>
            </div>
          </label>

          <input
            className="custom-radio-input"
            id="place"
            type="radio"
            name="role"
            value="place"
          />
          <label className="custom-radio-wrapper" htmlFor="place">
            <div className="custom-radio">
              <div className="inner">Lieux</div>
            </div>
          </label>
        </div>

        <form
          className="signin-form"
          action="http://localhost:3310/api/register"
          method="POST"
        >
          <div className="input-group">
            <input
              type="text"
              name="username"
              id="username"
              required
              autoComplete="off"
            />
            <label htmlFor="username">Name</label>
          </div>
          <div className="input-group">
            <input
              type="text"
              id="identifier"
              name="identifier"
              required
              autoComplete="off"
            />
            <label htmlFor="identifier">Identifiant</label>
          </div>
          <div className="input-group">
            <input
              type="email"
              id="email"
              name="email"
              required
              autoComplete="on"
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-group">
            <input
              type="password"
              id="password"
              name="password"
              required
              autoComplete="off"
            />
            <label htmlFor="password">Mot de passe</label>
          </div>
          <div className="input-group">
            <input
              type="password"
              id="verified-password"
              name="confirmPassword"
              required
              autoComplete="off"
            />
            <label htmlFor="verified-password">Vérifier mot de passe</label>
          </div>

          <button type="submit" className="signin-button">
            S'inscrire
          </button>
        </form>

        <Link to="/login-page">Déjà un compte ? Connectez-vous</Link>
      </section>
    </main>
  );
}

export default SignInForm;
