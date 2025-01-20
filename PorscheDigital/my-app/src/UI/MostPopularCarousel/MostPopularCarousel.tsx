import { useState } from "react";
import { PButtonTile, PCarousel } from "@porsche-design-system/components-react";
import { useNavigate } from "react-router-dom";


const ButtonList = (): JSX.Element => {
  const [selectedTitle, setSelectedTitle] = useState<string>("");
  const navigate = useNavigate();

  const handleButtonClick = (title: string) => {
    setSelectedTitle(title);
    navigate('/general', { state: { selectedTitle: title } });
  };


  return (
    <div className="text-center">
      <PCarousel theme="auto" slidesPerPage={1} heading="Select a topic">
        <PButtonTile
          label="Porsche ID and My Porsche Account"
          description="Information about your ID and account"
          compact={true}
          weight="semi-bold"
          onClick={() => handleButtonClick("Porsche ID and My Porsche Account")}
        >
          <img src="public/assets/club-sport-story@2x.webp" alt="Some image description" />
        </PButtonTile>

        <PButtonTile
          label="Registration and Access to My Porsche"
          description="How to register and log in"
          compact={true}
          weight="semi-bold"
          onClick={() => handleButtonClick("Registration and Access to My Porsche")}
        >
          <img
            src="/public/assets/hero.webp"
            alt="Some image description"
          />
        </PButtonTile>

        <PButtonTile
          label="Porsche Connect Services"
          description="Porsche Connect Services"
          compact={true}
          weight="semi-bold"
          onClick={() => handleButtonClick("Porsche Connect Services")}
        >
          <img src="public/assets/mission-x-story.webp" alt="Some image description" />
        </PButtonTile>

        <PButtonTile
          label="Functions and Additional Services (Functions on Demand - FoD)"
          description="FoD and additional services"
          compact={true}
          weight="semi-bold"
          onClick={() => handleButtonClick("Functions and Additional Services (Functions on Demand - FoD)")}
        >
          <img src="/public/assets/photo-1705973437997-ef5b80dfef86.webp" alt="Some image description" />
        </PButtonTile>

        <PButtonTile
          label="Charging Your Porsche"
          description="Charging Your Porsche"
          compact={true}
          weight="semi-bold"
          onClick={() => handleButtonClick("Charging Your Porsche")}
        >
          <img src="/public/assets/2307-bp-porsche-chargingstation-01-0126-230720-64c3da5733f18.webp" alt="Some image description" />
        </PButtonTile>

        <PButtonTile
          label="Technical Assistance and Issues"
          description="Technical solutions"
          compact={true}
          weight="semi-bold"
          onClick={() => handleButtonClick("Technical Assistance and Issues")}
        >
          <img src="/public/assets/photo-1457332253637-21d324d25df9.webp" alt="Some image description" />
        </PButtonTile>

        <PButtonTile
          label="Other General Topics"
          description="Other general topics"
          compact={true}
          weight="semi-bold"
          onClick={() => handleButtonClick("Other General Topics")}
        >
          <img src="/public/assets/photo-1715504636015-4b922d974296.webp" alt="Some image description" />
        </PButtonTile>
      </PCarousel>

      {/* Mostrar el título seleccionado */}
      {selectedTitle && (
        <div className="mt-4 text-xl text-white">
          <h2>{selectedTitle}</h2>
        </div>
      )}
    </div>
  );
};

export default ButtonList;