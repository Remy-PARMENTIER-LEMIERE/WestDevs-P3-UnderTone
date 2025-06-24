import { useEffect, useState } from "react";
import Carousel from "../../components/Carousel/Carousel";
import MusicStyles from "../../components/MusicStyles/MusicStyles";
import SocialNetworks from "../../components/SocialNetworks/SocialNetworks";
import "./Artist.css";
import { useParams } from "react-router";

function Artist() {
  const params = useParams();
  const [artist, setArtist] = useState();

  useEffect(() => {
    fetch(`http://localhost:3310/api/artist/${params}`)
      .then((response) => response.json())
      .then((data) => setArtist(data));
  }, [params]);
  return (
    <main className="artist-page">
      <h1>{artist}</h1>
      <figure>
        <input
          type="checkbox"
          name="favorite"
          id="favorite"
          aria-label="Ajouter aux favoris"
        />
        <img src="" alt="" />
        <button type="button">
          <img src="" alt="" />
          <img src="" alt="" />
        </button>
      </figure>
      <MusicStyles />
      <p>{}</p>
      <SocialNetworks />
      <a href="/">{}</a>
      <Carousel />
    </main>
  );
}

export default Artist;
