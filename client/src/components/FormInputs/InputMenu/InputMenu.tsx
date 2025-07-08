import "./InputMenu.css";

function InputMenu() {
  return (
    <div className="input-group">
      <input type="file" name="menu" id="menu-file" accept=".pdf" />
      <label htmlFor="menu-file">Carte | Menu</label>
      <p>* format .pdf uniquement, Max. 2Mo</p>
    </div>
  );
}

export default InputMenu;
