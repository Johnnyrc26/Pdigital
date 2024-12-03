import { useLocation } from "react-router-dom";
import {
  PCrest,
  PIcon,
  PDivider,
  PCarousel,
  PButtonTile,
  PLinkTileModelSignature,
  PLink,
  PWordmark,
  PHeading,
} from "@porsche-design-system/components-react";
import SearchDropdown from "../../UI/SearchDropdown/SearchDropdown";

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
    <div className="bg-gray-900 bg-cover bg-center min-h-screen">
      <div className="text-white p-6">
        {/* Contenedor para los iconos */}
        <div className="flex justify-between items-center">
          {/* Icono de flecha (start) */}
          <PIcon
            theme="auto"
            name="arrow-head-left"
            size="x-large"
            aria={{ "aria-label": "Arrow Head Left icon" }}
          />

          {/* Logo de PCrest (center) */}
          <PCrest />

          {/* Icono de lupa (end) */}
          <SearchDropdown />
        </div>
      </div>
      <PDivider theme="auto" />
      {/* Mensaje dinámico */}
      <div className="text-white text-center pt-6">
        <h2 className="text-2xl font-bold">Hello, {userName}</h2>
        <h2>Wellcome to</h2>
        <PWordmark theme="auto" size="inherit" style={{ height: '20px' }} className="p-6"/>
      </div>
      <PCarousel theme="auto" slidesPerPage={1} heading="Most popular" >
        <PButtonTile label="Care" description="Care" compact={true} align="top" >
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
        More abour your car
      </PHeading>
      <PLinkTileModelSignature
        heading={`Explore the ${carModel}`}
        model={carModel} // Aquí pasas el modelo dinámicamente
        className="p-6">
        <img src={carImage} alt={`${carModel} image`} />
        <PLink slot="primary" href="https://porsche.com/#primary">
          Know more
        </PLink>
        <PLink slot="secondary" href="https://porsche.com/#secondary">
          User Manual
        </PLink>
      </PLinkTileModelSignature>
    </div>
  );
};

export default ProfilePage;
