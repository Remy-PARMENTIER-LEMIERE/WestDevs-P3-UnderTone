import "./InputName.css";

function InputName({ label }: { label: string }) {
  return (
    <>
      <div className="input-group">
        <input
          type="text"
          name="name"
          id="name"
          required
          autoComplete="on"
          placeholder=""
        />
        <label htmlFor="name">{label}</label>
      </div>
    </>
  );
}

export default InputName;
