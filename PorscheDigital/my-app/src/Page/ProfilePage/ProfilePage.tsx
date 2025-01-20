// ProfilePage.tsx
import { useLocation, useNavigate } from "react-router-dom";
import {
  PWordmark,
  PHeading,
  PModelSignature,
  PLinkTile,
} from "@porsche-design-system/components-react";
import TopBar from "../../UI/TopBar/TopBar";
import IconNavigation from "../../UI/NavBar/NavBar";
import MostPopularCarousel from "../../UI/MostPopularCarousel/MostPopularCarousel";  // Importamos el componente

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
    "911": "public/assets/porsche-911-991-Targa-4S-420-ch-mk2-2015-2019-12.webp",
  };

  const carImage = carImages[carModel] || "/assets/default-car.jpg";

  return (
    <div className="bg-gray-900 bg-cover bg-center min-h-screen pb-16">
      <TopBar />

      {/* Mensaje dinámico */}
      <div className="text-white text-center pt-6">
        <h2 className="text-2xl font-bold">Hello, {userName}</h2>
        <h2 className="mt-5">Wellcome to</h2>
        <PWordmark theme="auto" size="inherit" style={{ height: "20px" }} className="p-4 mb-6" />
      </div>

      {/* Usamos el componente MostPopularCarousel */}
      <MostPopularCarousel />

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
 develop
        label="Descubre"
        description="El auto que soñaste, hecho realidad."
        aspectRatio="1/1"
        className="p-6"
        href={""}
      >

        <img src={carImage} alt="Some image description" />
      </PLinkTile>

      <IconNavigation />
    </div>
  );
};

export default ProfilePage;