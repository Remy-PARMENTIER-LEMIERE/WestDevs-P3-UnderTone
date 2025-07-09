// import { useState } from "react";
// import "./ArtistProfile.css";
// import DemoUploader from "./DemoUploader/DemoUploader";
// import MusicalInfluences from "./MusicalInfluences/MusicalInfluences";
// import { ArtistProfileData } from "./types/ArtistProfile.types";

// function ArtistProfile() {
//   const [formData, setFormData] = useState<ArtistProfileData>({
//     name: "",
//     description: "",
//     website: "",
//     musicalInfluences: [],
//     demo: null,
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log(formData);
//   };

//   return (
//     <main className="artist-profile-page">
//       <section className="artist-card">
//         <h1>Profil Artiste</h1>
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label htmlFor="name">Nom d'artiste</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div>
//             <label htmlFor="description">Description</label>
//             <textarea
//               id="description"
//               name="description"
//               rows={4}
//               value={formData.description}
//               onChange={handleChange}
//             />
//           </div>

//           <div>
//             <label htmlFor="website">Site Web</label>
//             <input
//               type="url"
//               id="website"
//               name="website"
//               value={formData.website}
//               onChange={handleChange}
//             />
//           </div>

//           <MusicalInfluences
//             influences={formData.musicalInfluences}
//             onChange={(newInfluences) => setFormData({ ...formData, musicalInfluences: newInfluences })}
//           />

//           <DemoUploader
//             demo={formData.demo}
//             onUpload={(file) => setFormData({ ...formData, demo: file })}
//           />

//           <button type="submit">Enregistrer</button>
//         </form>
//       </section>
//     </main>
//   );
// }

// export default ArtistProfile;
