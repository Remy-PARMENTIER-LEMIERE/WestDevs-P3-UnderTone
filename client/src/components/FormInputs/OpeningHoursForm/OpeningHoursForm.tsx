import React from "react";
import "./OpeningHoursForm.css";

const weekDays = [
  {
    id: "monday",
    value: "Lundi",
    label: "L",
  },
  {
    id: "tuesday",
    value: "Mardi",
    label: "M",
  },
  {
    id: "wednesday",
    value: "Mercredi",
    label: "M",
  },
  {
    id: "thursday",
    value: "Jeudi",
    label: "J",
  },
  {
    id: "friday",
    value: "Vendredi",
    label: "V",
  },
  {
    id: "saturday",
    value: "Samedi",
    label: "S",
  },
  {
    id: "sunday",
    value: "Dimanche",
    label: "D",
  },
];

function OpeningHoursForm() {
  return (
    <form className="opening-hours">
      <h2>Horaires</h2>
      <div className="input-group">
        <input type="time" name="opening-hour-noon" id="opening-hour-noon" />
        <label htmlFor="opening-hour-noon">Ouverture</label>
      </div>

      <div className="input-group">
        <input type="time" name="closing-hour-noon" id="closing-hour-noon" />
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
        {weekDays.map((wd) => (
          <React.Fragment key={wd.id}>
            <input
              type="checkbox"
              name="week_day"
              id={wd.id}
              required
              value={wd.value}
            />
            <label htmlFor="monday">{wd.label}</label>
          </React.Fragment>
        ))}
      </div>
      <button type="submit">Valider</button>
      <h3>
        Horaires validés <img src="" alt="" />
      </h3>
      <ul className="validated-opening-hours-list">
        <li />
      </ul>
    </form>
  );
}

export default OpeningHoursForm;
