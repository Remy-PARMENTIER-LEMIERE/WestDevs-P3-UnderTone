import { useEffect, useState } from "react";
import "./FavoriteButton.css";

type FavoriteButtonProps = {
  targetId: number;
  type: "artist" | "concert_place";
  userId: number | null;
};

function FavoriteButton({ targetId, type, userId }: FavoriteButtonProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (!userId) return;

    fetch(`http://localhost:3310/api/favorites/${type}/${userId}/${targetId}`)
      .then((res) => res.json())
      .then((data) => setIsFavorite(data.isFavorite))
      .catch((err) => console.error(err));
  }, [targetId, type, userId]);

  const handleChange = () => {
    if (!userId) return;

    const method = isFavorite ? "DELETE" : "POST";

    fetch(`http://localhost:3310/api/favorites/${type}`, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, targetId }),
    })
      .then((res) => res.json())
      .then(() => setIsFavorite(!isFavorite))
      .catch((err) => console.error(err));
  };

  if (!userId) return null;

  return (
    <button type="button" className="favorite-toggle-container">
      <div className="love">
        <input
          id={`switch-${type}-${targetId}`}
          type="checkbox"
          aria-label="Ajouter aux favoris"
          checked={isFavorite}
          onChange={handleChange}
        />
        <label className="love-heart" htmlFor={`switch-${type}-${targetId}`}>
          <i className="left" />
          <i className="right" />
          <i className="bottom" />
          <div className="round" />
        </label>
      </div>
    </button>
  );
}

export default FavoriteButton;
