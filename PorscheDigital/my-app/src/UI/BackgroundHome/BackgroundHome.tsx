import { PHeading } from "@porsche-design-system/components-react";
import RadiusCard from "../RadioCard/RadioCard";
import { PCrest } from "@porsche-design-system/components-react";

export const BackgroundHome = (): JSX.Element => (
  <div
    className="bg-cover bg-center min-h-screen flex items-center justify-center"
    style={{
      backgroundImage: `url('/assets/eurocar.webp')`, // Ruta desde la carpeta `public`
    }}
  >
    <div className="text-white p-6 max-w-md w-full">
      <div className="flex justify-center">
        <PCrest />
      </div>
      <PHeading className="text-center pt-6">Welcome to Porsche Assistant</PHeading>
      <div className="flex justify-center mt-6">
        <RadiusCard />
      </div>
    </div>
  </div>
);

export default BackgroundHome;