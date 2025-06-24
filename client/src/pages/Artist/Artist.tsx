import { useEffect, useState } from "react";
import Carousel from "../../components/Carousel/Carousel";
import MusicStyles from "../../components/MusicStyles/MusicStyles";
import SocialNetworks from "../../components/SocialNetworks/SocialNetworks";
import "./Artist.css";
import { useParams } from "react-router";

function Artist() {
  const { id } = useParams();
  const [artist, setArtist] = useState<null | Artist>();

  useEffect(() => {
    fetch(`http://localhost:3310/api/artist/${id}`)
      .then((response) => response.json())
      .then((data) => setArtist(data));
  }, [id]);
  return (
    <main className="artist-page">
      {artist && (
        <>
          <h1>{artist.name}</h1>
          <figure>
            <input
              type="checkbox"
              name="favorite"
              id="favorite"
              aria-label="Ajouter aux favoris"
              // checked
            />
            <img src={artist.profile_picture} alt={artist.name} />
            <button type="button" className="play-pause" />
          </figure>
          {id && <MusicStyles params={id} />}
          <p>{artist.description}</p>
          <SocialNetworks artist={artist} />
          <a href={artist.web_site} target="_blank" rel="noreferrer">
            {artist.name}.com
          </a>
          <Carousel />
        </>
      )}
    </main>
  );
}

export default Artist;
