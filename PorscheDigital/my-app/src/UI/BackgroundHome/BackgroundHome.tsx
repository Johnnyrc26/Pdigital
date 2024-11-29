import { PHeading } from '@porsche-design-system/components-react';
import RadiusCard from "../RadioCard/RadioCard";
import { PCrest } from '@porsche-design-system/components-react';

export const BackgroundHome = (): JSX.Element => (
  <div
    className="bg-cover bg-center min-h-screen"
    style={{
      backgroundImage: `url('/assets/eurocar.webp')`, // Ruta desde la carpeta `public`
    }}
  >
    <div className="text-white p-6">
      <div className='flex justify-center'>
      <PCrest />
      </div>
      <PHeading className='text-center pt-6 '>Welcome to Porsche Assitant</PHeading>
      <RadiusCard />
    </div>
  </div>
);

export default BackgroundHome;