import { useLocation, useParams } from "react-router";
import FavoriteButton from "./FavoriteButton/FavoriteButton";
import PlayPause from "./PlayPause/PlayPause";
import "./ProfilePicturePlayFavorite.css";
import { useEffect, useState } from "react";

function ProfilePicturePlayFavorite({
  profilePicture,
  name,
  demo,
}: ProfilePicturePlayFavoriteProps) {
  const location = useLocation();
  const { id } = useParams();
  const [srcNoProfilePicture, setSrcNoProfilePicture] = useState("");

  const user = JSON.parse(localStorage.getItem("user") || "null");

  useEffect(() => {
    if (location.pathname.includes("artist")) {
      setSrcNoProfilePicture("/images/noProfilePictureArtist.jpg");
    }
  }, [location]);

  const type = location.pathname.includes("artist")
    ? "artist"
    : "concert_place";

  return (
    <figure className="profile-picture-play-favorite">
      <FavoriteButton
        targetId={Number.parseInt(id || "0")}
        type={type}
        userId={user?.id || null}
      />
      <img
        src={profilePicture ? profilePicture : srcNoProfilePicture}
        alt={profilePicture ? name : "Avatar"}
      />
      <div className="gradient" />
      {demo && <PlayPause demo={demo} />}
    </figure>
  );
}

export default ProfilePicturePlayFavorite;
