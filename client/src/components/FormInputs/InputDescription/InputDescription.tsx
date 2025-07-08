import "./InputDescription.css";

function InputDescription() {
  return (
    <div className="input-group">
      <textarea name="description" id="description" />
      <label htmlFor="description">Description</label>
    </div>
  );
}

export default InputDescription;
