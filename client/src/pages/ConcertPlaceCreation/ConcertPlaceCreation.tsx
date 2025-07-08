import InputAddress from "../../components/FormInputs/InputAddress/InputAddress";
import InputDescription from "../../components/FormInputs/InputDescription/InputDescription";
import InputMenu from "../../components/FormInputs/InputMenu/InputMenu";
import InputName from "../../components/FormInputs/InputName/InputName";
import InputPhotos from "../../components/FormInputs/InputPhotos/InputPhotos";
import InputProfilePicture from "../../components/FormInputs/InputProfilePicture/InputProfilePicture";
import InputWebsite from "../../components/FormInputs/InputWebsite/InputWebsite";
import InputsType from "../../components/FormInputs/InputsType/InputsType";
import OpeningHoursForm from "../../components/FormInputs/OpeningHoursForm/OpeningHoursForm";
import SocialNetworksForm from "../../components/FormInputs/SocialNetworksForm/SocialNetworksForm";
import "./ConcertPlaceCreation.css";

function ConcertPlaceCreation() {
  return (
    <main className="concert-place-creation">
      <section>
        <form action="" method="post">
          <InputName label={"Nom de l'établissement"} />
          <InputProfilePicture />
          <InputsType />
          <InputDescription />
          <OpeningHoursForm />
          <InputAddress />
          <SocialNetworksForm />
          <InputWebsite />
          <InputMenu />
          <InputPhotos />

          <button type="submit">Valider</button>
        </form>
      </section>
    </main>
  );
}

export default ConcertPlaceCreation;
