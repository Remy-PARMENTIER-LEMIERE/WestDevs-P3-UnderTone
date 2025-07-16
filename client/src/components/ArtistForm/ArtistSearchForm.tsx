import { useEffect, useRef, useState } from "react";
import "./ArtistSearchForm.css";

function SearchArtist() {
  const [musicStyleList, setMusicStyleList] = useState<StyleTypes[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/search/artist")
      .then((res) => res.json())
      .then((data) => setMusicStyleList(data));
  }, []);

  const nameInputRef = useRef<HTMLInputElement>(null);
  const musicStyleInputRef = useRef<HTMLSelectElement>(null);
  const [formObj, setFormObj] = useState<ArtistFormDataType | null>(null);
  const [filteredArtistList, setFilteredArtistList] = useState<
    FilteredArtistList[]
  >([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const form = e.currentTarget.form as HTMLFormElement | null;
    if (!form) return;

    const formData = new FormData(form);
    const name = formData.get("name")?.toString() || "";
    const musicStyle = formData.get("musicStyle")?.toString() || "";

    setFormObj({ name, musicStyle });
  };

  useEffect(() => {
    if (!formObj?.name && !formObj?.musicStyle) return;
    const params = new URLSearchParams();

    const queryTimer = setTimeout(() => {
      for (const [key, value] of Object.entries(formObj)) {
        if (value) {
          params.append(key, value);
        }
      }
      console.log(params);
      fetch(`http://localhost:3310/api/search/artist?${params}`)
        .then((res) => res.json())
        .then((data) => setFilteredArtistList(data))
        .catch((err) => console.error("Erreur fetch artist:", err));
    }, 1500);

    return () => clearTimeout(queryTimer);
  }, [formObj]);

  return (
    <form>
      <div className="input-group">
        {console.log(filteredArtistList)}
        <input
          type="text"
          name="name"
          ref={nameInputRef}
          id="name"
          autoComplete="off"
          onChange={handleChange}
        />
        <label htmlFor="name">nom</label>
      </div>

      <div className="input-group">
        <select
          name="musicStyle"
          id="music-style"
          ref={musicStyleInputRef}
          autoComplete="off"
          onChange={handleChange}
        >
          <option value="">--Genre Musical--</option>
          {musicStyleList.length &&
            musicStyleList.map((musicStyle) => (
              <option key={musicStyle.id} value={musicStyle.name}>
                {musicStyle.name}
              </option>
            ))}
        </select>
      </div>
      <section>
        <h2>Résultats</h2>
        <ul>
          {filteredArtistList.length ? (
            filteredArtistList.map((artist) => (
              <li key={artist.id}>{artist.name}</li>
            ))
          ) : (
            <li>Aucun artiste ne correspond à la recherche</li>
          )}
        </ul>
      </section>
    </form>
  );
}

export default SearchArtist;
