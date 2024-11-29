import React, { useState } from "react";
import { PText, PButton } from "@porsche-design-system/components-react";
import { useNavigate } from "react-router-dom";

const items = [
  {
    value: "User1",
    title: "Liam O’Connor",
    description: "Porsche Taycan 4S",
  },
  {
    value: "User2",
    title: "Isabella Rossi",
    description: "Porsche 911 Carrera Cabriolet",
  },
  {
    value: "User3",
    title: "Ricardo Hernández",
    description: "Porsche 911 Carrera GTS",
  },
];

const Demo = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<{
    value: string;
    title: string;
  } | null>(null);

  const handleNext = () => {
    if (selected) {
      // Redirige a la página de destino
      navigate("../ProfilePage/ProfilePage", { state: { selectedUser: selected } });
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: 'url("/path/to/your/image.jpg")' }}
    >
      {/* Contenido centrado */}
      <div className="bg-black/50 p-6 rounded-lg backdrop-blur-md max-w-lg w-full">
        {/* Título principal */}
        <h2 className="text-xl font-semibold mb-6 text-center">Select your customer</h2>

        {/* Tarjetas */}
        <div className="space-y-4">
          {items.map((item) => (
            <RadioCardItem
              key={item.value}
              label={item.title}
              description={item.description}
              isSelected={selected?.value === item.value}
              onClick={() => setSelected({ value: item.value, title: item.title })}
            />
          ))}
        </div>

        {/* Botón personalizado */}
        {selected && (
          <div className="mt-6 text-center">
            <PButton
              theme="auto"
              variant="ghost"
              onClick={handleNext}
            >
              {`Do you want to continue with ${selected.title}?`}
            </PButton>
          </div>
        )}
      </div>
    </div>
  );
};

type RadioCardItemProps = {
  label: string;
  description: string;
  isSelected: boolean;
  onClick: () => void;
};

const RadioCardItem: React.FC<RadioCardItemProps> = ({
  label,
  description,
  isSelected,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-4 rounded-lg transition-all backdrop-blur-md focus:outline-none ${
        isSelected
          ? "border-2 border-gray-500 bg-white/30 shadow-lg"
          : "border border-gray-300 bg-white/20"
      }`}
      aria-pressed={isSelected}
    >
      <PText theme="auto" size="medium">
        {label}
      </PText>
      <PText theme="auto" size="small" className="text-gray-300">
        {description}
      </PText>
    </button>
  );
};


export default Demo;
