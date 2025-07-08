import "./SocialNetworksForm.css";

const socialNetworks = [
  {
    name: "Facebook",
    value: "facebook_link",
  },
  {
    name: "Instagram",
    value: "instagram_link",
  },
  {
    name: "X",
    value: "x_link",
  },
];

function SocialNetworksForm() {
  return (
    <>
      <form className="social-networks">
        <select name="" id="" required>
          <option value="">-- Choisissez un réseau --</option>
          {socialNetworks.map((sn) => (
            <option value={sn.value} key={sn.name}>
              {sn.name}
            </option>
          ))}
        </select>
        <input type="url" name="link" id="social-network-link" required />
        <button type="submit">Valider</button>
      </form>
    </>
  );
}

export default SocialNetworksForm;
