// import "./MusicalInfluences.css";
// import { useState } from "react";
// import { MusicalInfluencesProps } from "./types/MusicalInfluences.types";

// function MusicalInfluences({ influences, onChange }: MusicalInfluencesProps) {
//   const [input, setInput] = useState("");

//   const handleAdd = () => {
//     if (input.trim() !== "") {
//       onChange([...influences, input]);
//       setInput("");
//     }
//   };

//   const handleRemove = (index: number) => {
//     const updated = influences.filter((_, i) => i !== index);
//     onChange(updated);
//   };

//   return (
//     <div className="influences-section">
//       <label>Mes Influences Musicales</label>
//       <div className="influences-list">
//         {influences.map((influence, index) => (
//           <span key={index} onClick={() => handleRemove(index)}>
//             {influence} ✕
//           </span>
//         ))}
//       </div>
//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         placeholder="Ajouter une influence"
//       />
//       <button type="button" onClick={handleAdd}>Ajouter</button>
//     </div>
//   );
// }

// export default MusicalInfluences;
