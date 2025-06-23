import { Link } from "react-router";
import "./SignInForm.css";

function SignInForm() {
  return (
    <div className="signinForm-container">
      <section className="form-container">
        <h1>Inscription</h1>

        <div className="customRadioHolder">
          <input
            className="customRadioInput"
            id="artist"
            type="radio"
            name="myRadioGroup"
          />
          <label className="customRadioWrapper" htmlFor="artist">
            <div className="customRadio">
              <div className="inner">Artiste</div>
            </div>
          </label>

          <input
            className="customRadioInput"
            id="user"
            type="radio"
            name="myRadioGroup"
          />
          <label className="customRadioWrapper" htmlFor="user">
            <div className="customRadio">
              <div className="inner">User</div>
            </div>
          </label>

          <input
            className="customRadioInput"
            id="lieux"
            type="radio"
            name="myRadioGroup"
          />
          <label className="customRadioWrapper" htmlFor="lieux">
            <div className="customRadio">
              <div className="inner">Lieux</div>
            </div>
          </label>
        </div>

        <form className="signinform">
          <div className="inputGroup">
            <input type="text" required autoComplete="off" />
            <label htmlFor="name">Name</label>
          </div>
          <div className="inputGroup">
            <input type="email" required autoComplete="on" />
            <label htmlFor="Email">Email</label>
          </div>
          <div className="inputGroup">
            <input type="password" required autoComplete="off" />
            <label htmlFor="password">Mot de passe</label>
          </div>
          <div className="inputGroup">
            <input type="password" required autoComplete="off" />
            <label htmlFor="verified-password">Vérifier mot de passe</label>
          </div>
        </form>
        <button type="button" className="signin-button">
          S'inscrire
        </button>
        <Link to="lklsf">Déjà un compte ? Connectez-vous</Link>
      </section>
    </div>
  );
}

export default SignInForm;
