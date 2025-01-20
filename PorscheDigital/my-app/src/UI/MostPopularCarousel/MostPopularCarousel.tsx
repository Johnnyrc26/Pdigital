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
      <PCarousel theme="auto" slidesPerPage={1} heading="Selecciona un tema">
        <PButtonTile 
          label="ID de Porsche y cuenta en My Porsche" 
          description="Información sobre tu ID y cuenta"
          compact={true} 
          weight="semi-bold" 
          onClick={() => handleButtonClick("ID de Porsche y cuenta en My Porsche")}
        >
          <img src="public/assets/club-sport-story@2x.webp" alt="Some image description" />
        </PButtonTile>

        <PButtonTile 
          label="Registro y acceso a My Porsche" 
          description="Cómo registrarte y acceder"
          compact={true} 
          weight="semi-bold" 
          onClick={() => handleButtonClick("Registro y acceso a My Porsche")}
        >
          <img
            src="/public/assets/hero.webp"
            alt="Some image description"
          />
        </PButtonTile>

        <PButtonTile 
          label="Servicios Porsche Connect" 
          description="Servicios de Porsche Connect"
          compact={true} 
          weight="semi-bold" 
          onClick={() => handleButtonClick("Servicios Porsche Connect")}
        >
          <img src="public/assets/mission-x-story.webp" alt="Some image description" />
        </PButtonTile>

        <PButtonTile 
          label="Funciones y servicios adicionales (FoD)" 
          description="FoD y servicios adicionales"
          compact={true} 
          weight="semi-bold" 
          onClick={() => handleButtonClick("Funciones y servicios adicionales (Functions on Demand - FoD)")}
        >
          <img src="/public/assets/photo-1705973437997-ef5b80dfef86.webp" alt="Some image description" />
        </PButtonTile>

        <PButtonTile 
          label="Cargar el Porsche" 
          description="Cargar tu Porsche"
          compact={true} 
          weight="semi-bold" 
          onClick={() => handleButtonClick("Cargar el Porsche")}
        >
          <img src="/public/assets/2307-bp-porsche-chargingstation-01-0126-230720-64c3da5733f18.webp" alt="Some image description" />
        </PButtonTile>

        <PButtonTile 
          label="Asistencia y problemas técnicos" 
          description="Soluciones técnicas"
          compact={true} 
          weight="semi-bold" 
          onClick={() => handleButtonClick("Asistencia y problemas técnicos")}
        >
          <img src="/public/assets/photo-1457332253637-21d324d25df9.webp" alt="Some image description" />
        </PButtonTile>

        <PButtonTile 
          label="Otros temas generales" 
          description="Otros temas Generales"
          compact={true} 
          weight="semi-bold" 
          onClick={() => handleButtonClick("Otros temas generales")}
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