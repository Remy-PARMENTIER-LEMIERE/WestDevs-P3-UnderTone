import { useState } from "react";
import "./Research.css";

function Research() {
  const [selectedRole, setSelectedRole] = useState("");
  const [radius, setRadius] = useState("1");

  const handleRadius = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRadius(e.target.value);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRole(e.target.value);
  };

  return (
    <main className="research-page">
      <form>
        <div>
          <input
            type="radio"
            id="Artiste"
            name="recherche"
            value="Artiste"
            onChange={handleChange}
            checked={selectedRole === "Artiste"}
          />
          <label htmlFor="Artiste">
            <span>Artiste</span>
          </label>

          <input
            type="radio"
            id="Evenement"
            name="recherche"
            value="Évènement"
            onChange={handleChange}
            checked={selectedRole === "Évènement"}
          />
          <label htmlFor="Evenement">
            <span>Évènement</span>
          </label>

          <input
            type="radio"
            id="Lieu"
            name="recherche"
            value="Lieu"
            onChange={handleChange}
            checked={selectedRole === "Lieu"}
          />
          <label htmlFor="Lieu">
            <span>Lieu</span>
          </label>
        </div>
      </form>

      {selectedRole === "Évènement" && (
        <form action="Submit">
          <div className="input-group">
            <input
              type="text"
              name="town"
              id="town"
              required
              autoComplete="off"
            />
            <label htmlFor="town">Ville</label>
          </div>

          <div className="input-group">
            <input
              type="range"
              name="rayon"
              id="rayon"
              required
              autoComplete="off"
              placeholder="Rayon"
              min={1}
              max={50}
              onChange={handleRadius}
              value={radius}
            />
            <label htmlFor="rayon">Rayon: {radius} km</label>
          </div>

          <div className="input-group">
            <input
              type="date"
              name="date"
              id="date"
              required
              autoComplete="on"
              placeholder="Date"
            />
            <label htmlFor="date">Date</label>
          </div>

          <button type="submit">Rechercher</button>
        </form>
      )}
    </main>
  );
}

export default Research;
