import { useLocation, useNavigate } from "react-router-dom";
import {
  PCarousel,
  PButtonTile,
  PLinkTile,
  PWordmark,
  PHeading,
  PModelSignature,
} from "@porsche-design-system/components-react";
import TopBar from "../../UI/TopBar/TopBar";
import IconNavigation from "../../UI/NavBar/NavBar";

type LocationState = {
  selectedUser: {
    value: string;
    title: string;
    modelSignature: "taycan" | "911" | "cayenne";
  };
};

export const ProfilePage = (): JSX.Element => {
  const location = useLocation();
  const state = location.state as LocationState | undefined;
  const navigate = useNavigate();

  const userName = state?.selectedUser?.title || "Guest";
  const carModel = state?.selectedUser?.modelSignature || "a Porsche";

  // Lógica para asignar la imagen de acuerdo al modelo del coche
  const carImages: Record<string, string> = {
    taycan: "public/assets/porsche-taycan-turbo-gt-7-65ef7a9e0e91c.webp",
    cayenne: "public/assets/porsche-cayenne-2024-13-643d45f01db5c.webp",
    "911":
      "public/assets/porsche-911-991-Targa-4S-420-ch-mk2-2015-2019-12.webp",
  };

  const carImage = carImages[carModel] || "/assets/default-car.jpg";

  // const handleModelClick = () => {
  //   alert(`You clicked on ${carModel}!`);
  // };

  return (
    <div className="bg-gray-900 bg-cover bg-center min-h-screen pb-16">
      <TopBar />

      {/* Mensaje dinámico */}
      <div className="text-white text-center pt-6">
        <h2 className="text-2xl font-bold">Hello, {userName}</h2>
        <h2>Wellcome to</h2>
        <PWordmark
          theme="auto"
          size="inherit"
          style={{ height: "20px" }}
          className="p-6"
        />
      </div>
      <PCarousel theme="auto" slidesPerPage={1} heading="Most popular">
        <PButtonTile label="Care" description="Care" compact={true} align="top">
          <img
            src="public/assets/club-sport-story@2x.webp"
            alt="Some image description"
          />
        </PButtonTile>
        <PButtonTile
          label="Charging"
          description="Charging"
          compact={true}
          align="top">
          <img
            src="public/assets/2307-bp-porsche-chargingstation-01-0126-230720-64c3da5733f18.webp"
            alt="Some image description"
          />
        </PButtonTile>
        <PButtonTile
          label="Some label"
          description="Informative text"
          compact={true}
          align="top">
          <img
            src="public/assets/mission-x-story.webp"
            alt="Some image description"
          />
        </PButtonTile>
        <PButtonTile
          label="Some label"
          description="Profile"
          compact={true}
          align="top">
          <img
            src="public/assets/loyalist-teaser.webp"
            alt="Some image description"
          />
        </PButtonTile>
      </PCarousel>
      <PHeading theme="auto" tag="h3" size="large" className="pl-6 pt-2">
        More about your
      </PHeading>
      <div className="pl-6 pt-3">
        <PModelSignature theme="auto" safeZone={false} model={carModel} />
      </div>
      <PLinkTile
        onClick={() => {
          navigate("/MyCarHistory", {
            state: { selectedUser: state?.selectedUser },
          });
        }}
        label="Some Label" description="Your Car" weight="semi-bold" compact={true}
        className="p-6">
        <img src={carImage} alt="Some image description" />
      </PLinkTile>

      <IconNavigation />
    </div>
  );
};

export default ProfilePage;
