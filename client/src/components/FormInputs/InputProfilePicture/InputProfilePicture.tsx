import "./InputProfilePicture.css";

function InputProfilePicture() {
  return (
    <div className="input-group">
      <input
        type="file"
        name="profile_picture"
        id="profile-picture"
        accept=".jpg, .jpeg, .png"
      />
      <label htmlFor="profile-picture">Photo de profil</label>
    </div>
  );
}

export default InputProfilePicture;
