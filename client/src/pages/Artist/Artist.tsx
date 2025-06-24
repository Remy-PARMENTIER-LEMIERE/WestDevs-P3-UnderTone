import Carousel from "../../components/Carousel/Carousel";
import MusicStyles from "../../components/MusicStyles/MusicStyles";
import SocialNetworks from "../../components/SocialNetworks/SocialNetworks";
import "./Artist.css";

function Artist() {
  return (
    <main className="artist-page">
      <h1>{}</h1>
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
