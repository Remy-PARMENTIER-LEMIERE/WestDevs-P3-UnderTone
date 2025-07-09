// import "./DemoUploader.css";
// import { DemoUploaderProps } from "./types/DemoUploader.types";

// function DemoUploader({ demo, onUpload }: DemoUploaderProps) {
//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file && file.size <= 5 * 1024 * 1024 && file.type === "audio/mpeg") {
//       onUpload(file);
//     } else {
//       alert("Fichier invalide : MP3 et 5 Mo max");
//     }
//   };

//   return (
//     <div className="demo-uploader">
//       <label htmlFor="demo">Démo Musicale (MP3, 5 Mo max)</label>
//       <input type="file" id="demo" accept=".mp3" onChange={handleFileChange} />
//       {demo && <p>{demo.name}</p>}
//     </div>
//   );
// }

// export default DemoUploader;
// //
