import "./InputWebsite.css";

function InputWebsite() {
  return (
    <div className="input-group">
      <input type="url" name="web_site" id="website-link" />
      <label htmlFor="website-link">Site Web</label>
    </div>
  );
}

export default InputWebsite;
