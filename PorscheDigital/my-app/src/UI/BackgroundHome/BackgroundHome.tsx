import { PHeading } from "@porsche-design-system/components-react"
import RadiusCard from "../RadioCard/RadioCard"
import IconNavigation from "../NavBar/NavBar"

export const BackgroundHome = (): JSX.Element => (
  <div
    className="bg-cover bg-center min-h-screen flex items-start justify-center"
    style={{
      backgroundImage: `url('/assets/eurocar.webp')`, // Ruta desde la carpeta `public`
    }}
  >
    <div className="text-white p-6 max-w-md w-full mb-20">
      <div className="flex justify-center">
        <img src="public/assets/porsche-crest@2x.png" alt="Porsche Logo" />
      </div>
      <div className="flex justify-center mt-4">
        <PHeading tag="h1" size="x-large" className="w-100% text-center absolute">
          Welcome to Porsche Assistant
        </PHeading>
      </div>
      <div className="flex justify-center">
        <RadiusCard />
      </div>
      <IconNavigation />
    </div>
  </div>
)

export default BackgroundHome
