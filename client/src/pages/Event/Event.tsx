import { useParams } from "react-router";
import "./Event.css";
import { useEffect, useState } from "react";

function Event() {
  const { id } = useParams();
  const [event, setEvent] = useState<null | EventData>();

  useEffect(() => {
    fetch(`http://localhost:3310/api/event/${id}`)
      .then((response) => response.json())
      .then((data) => setEvent(data));
  }, [id]);

  return (
    <main>
      {event && (
        <>
          <h1>{event.name}</h1>
          <img src="" alt="affiche de la soirée" />
          <p>date</p>
          <p>artiste invité</p>
          <p>adresse</p>
          <p>description</p>
        </>
      )}
    </main>
  );
}

export default Event;
