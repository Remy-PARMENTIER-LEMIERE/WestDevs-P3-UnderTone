import { useState } from "react";
import "./Research.css";
import EventSearchForm from "../../components/EventForm/EventSearchForm";

function Research() {
  const [selectedRole, setSelectedRole] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRole(e.target.value);
  };

  return (
    <main className="research-page">
      <form>
        <div>
          <input
            type="radio"
            id="artiste"
            name="research"
            value="artist"
            onChange={handleChange}
            checked={selectedRole === "artist"}
          />
          <label htmlFor="artiste">
            <span>Artiste</span>
          </label>

          <input
            type="radio"
            id="evenement"
            name="research"
            value="event"
            onChange={handleChange}
            checked={selectedRole === "event"}
          />
          <label htmlFor="evenement">
            <span>Évènement</span>
          </label>

          <input
            type="radio"
            id="lieu"
            name="research"
            value="place"
            onChange={handleChange}
            checked={selectedRole === "place"}
          />
          <label htmlFor="lieu">
            <span>Lieu</span>
          </label>
        </div>
      </form>

      {selectedRole === "event" && <EventSearchForm />}
    </main>
  );
}

export default Research;
