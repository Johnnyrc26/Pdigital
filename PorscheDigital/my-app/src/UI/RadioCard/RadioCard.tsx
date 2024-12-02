import React, { useState } from "react";
import {
  PText,
  PButton,
  PModelSignature,
} from "@porsche-design-system/components-react";
import { useNavigate } from "react-router-dom";

const items: {
  value: string;
  title: string;
  description: string;
  modelSignature:
    | "taycan"
    | "911"
    | "cayenne"
}[] = [
  {
    value: "User1",
    title: "Liam O’Connor",
    description: "Porsche Taycan Turbo GT with Weissach Package",
    modelSignature: "taycan", // Nuevo modelo Taycan Turbo GT
  },
  {
    value: "User2",
    title: "Isabella Rossi",
    description: "Porsche Cayenne Hybrid 2024",
    modelSignature: "cayenne", // Cambiado a Cayenne Hybrid 2024
  },
  {
    value: "User3",
    title: "Ricardo Peréz",
    description: "Porsche 911 Targa 4 GTS",
    modelSignature: "911", // Cambiado a 911 Targa 4 GTS
  },
];

const Demo = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<{
    value: string;
    title: string;
    modelSignature:
      | "taycan"
      | "cayman"
      | "panamera"
      | "718"
      | "911"
      | "boxster"
      | "cayenne"
      | "macan"
      | "turbo-s"
      | "turbo";
  } | null>(null);

  const handleNext = () => {
    if (selected) {
      navigate("/ProfilePage", { state: { selectedUser: selected } });
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: 'url("/path/to/your/image.jpg")' }}>
      <div className="bg-black/50 p-6 rounded-lg backdrop-blur-md max-w-lg w-full">
        <h2 className="text-xl font-semibold mb-6 text-center">
          Select your customer
        </h2>
        <div className="space-y-4">
          {items.map((item) => (
            <RadioCardItem
              key={item.value}
              label={item.title}
              description={item.description}
              isSelected={selected?.value === item.value}
              onClick={() =>
                setSelected({
                  value: item.value,
                  title: item.title,
                  modelSignature: item.modelSignature,
                })
              }
            />
          ))}
        </div>
        {selected && (
          <div className="mt-6 gap-4 flex flex-col items-center text-center">
              <PModelSignature theme="auto" safeZone={true} model={selected.modelSignature} />
            <PButton theme="auto" variant="ghost" onClick={handleNext}>
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
      aria-pressed={isSelected}>
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
