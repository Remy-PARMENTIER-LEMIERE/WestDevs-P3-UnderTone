import "./InputPhotos.css";

function InputPhotos() {
  return (
    <div className="input-group">
      <input type="file" name="photos" id="photos" />
      <label htmlFor="photos">Photos</label>
      <p>* formats .jpg, .jpeg, .png uniquement, Max. 2Mo/fichier</p>
    </div>
  );
}

export default InputPhotos;
