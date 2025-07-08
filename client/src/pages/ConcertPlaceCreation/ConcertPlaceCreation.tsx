import "./ConcertPlaceCreation.css";

function ConcertPlaceCreation() {
  return (
    <main className="concert-place-creation">
      <section>
        <form action="" method="post">
          <div className="input-group">
            <input
              type="text"
              name="name"
              id="name"
              required
              autoComplete="on"
              placeholder=""
            />
            <label htmlFor="name">Nom de l'établissement</label>
          </div>
          <div className="input-group">
            <input
              type="file"
              name="profile_picture"
              id="profile-picture"
              accept=".jpg, .jpeg, .png"
            />
            <label htmlFor="profile-picture">Photo de profil</label>
          </div>

          <div className="custom-radio-holder">
            <p>Type d'établissement</p>

            <input
              className="custom-radio-input"
              id="restaurant"
              type="radio"
              name="type"
              value="Restaurant"
            />
            <label className="custom-radio-wrapper" htmlFor="restaurant">
              <div className="custom-radio">
                <div className="inner">Restaurant</div>
              </div>
            </label>

            <input
              className="custom-radio-input"
              id="bar"
              type="radio"
              name="type"
              value="Bar"
            />
            <label className="custom-radio-wrapper" htmlFor="bar">
              <div className="custom-radio">
                <div className="inner">Bar</div>
              </div>
            </label>

            <input
              className="custom-radio-input"
              id="concert-coffee"
              type="radio"
              name="type"
              value="Café concert"
            />
            <label className="custom-radio-wrapper" htmlFor="concert-coffee">
              <div className="custom-radio">
                <div className="inner">Café concert</div>
              </div>
            </label>
          </div>

          <div className="input-group">
            <textarea name="description" id="description" />
            <label htmlFor="description">Description</label>
          </div>

          <form className="opening-hours">
            <h2>Horaires</h2>
            <div className="input-group">
              <input
                type="time"
                name="opening-hour-noon"
                id="opening-hour-noon"
              />
              <label htmlFor="opening-hour-noon">Ouverture</label>
            </div>

            <div className="input-group">
              <input
                type="time"
                name="closing-hour-noon"
                id="closing-hour-noon"
              />
              <label htmlFor="closing-hour-noon">Fermeture</label>
            </div>

            <div className="input-group">
              <input
                type="time"
                name="opening-hour-evening"
                id="opening-hour-evening"
                aria-label="Deuxième Ouverture"
              />
            </div>

            <div className="input-group">
              <input
                type="time"
                name="closing-hour-evening"
                id="closing-hour-evening"
                aria-label="Deuxième Fermeture"
              />
            </div>
            <div className="checkbox-holder">
              <input
                type="checkbox"
                name="week_day"
                id="monday"
                required
                value="Lundi"
              />
              <label htmlFor="monday">L</label>
              <input
                type="checkbox"
                name="week_day"
                id="tuesday"
                required
                value="Mardi"
              />
              <label htmlFor="tuesday">M</label>
              <input
                type="checkbox"
                name="week_day"
                id="wednesday"
                required
                value="Mercredi"
              />
              <label htmlFor="wednesday">M</label>
              <input
                type="checkbox"
                name="week_day"
                id="thursday"
                required
                value="Jeudi"
              />
              <label htmlFor="thursday">J</label>
              <input
                type="checkbox"
                name="week_day"
                id="friday"
                required
                value="Vendredi"
              />
              <label htmlFor="friday">V</label>
              <input
                type="checkbox"
                name="week_day"
                id="saturday"
                required
                value="Samedi"
              />
              <label htmlFor="saturday">S</label>
              <input
                type="checkbox"
                name="week_day"
                id="sunday"
                required
                value="Dimanche"
              />
              <label htmlFor="sunday">D</label>
            </div>
            <button type="submit">Valider</button>
            <h3>
              Horaires validés <img src="" alt="" />
            </h3>
            <ul className="validated-opening-hours-list">
              <li />
            </ul>
          </form>

          <div className="input-group">
            <input type="text" name="address" id="address" required />
            <label htmlFor="address">Adresse</label>
          </div>

          <form className="social-networks">
            <select name="" id="" required>
              <option value="">-- Choisissez un réseau</option>
              <option value="facebook_link">Facebook</option>
              <option value="instagram_link">Instagram</option>
              <option value="x_link">X</option>
            </select>
            <input type="url" name="link" id="social-network-link" required />
            <button type="submit">Valider</button>
          </form>

          <div className="input-group">
            <input type="url" name="web_site" id="website-link" />
            <label htmlFor="website-link">Site Web</label>
          </div>

          <div className="input-group">
            <input type="file" name="menu" id="menu-file" accept=".pdf" />
            <label htmlFor="menu-file">Carte | Menu</label>
            <p>* format .pdf uniquement, Max. 2Mo</p>
          </div>

          <div className="input-group">
            <input type="file" name="photos" id="photos" />
            <label htmlFor="photos">Photos</label>
            <p>* formats .jpg, .jpeg, .png uniquement, Max. 2Mo/fichier</p>
          </div>

          <button type="submit">Valider</button>
        </form>
      </section>
    </main>
  );
}

export default ConcertPlaceCreation;
