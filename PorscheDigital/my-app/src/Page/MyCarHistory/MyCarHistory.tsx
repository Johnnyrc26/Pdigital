import TopBar from "../../UI/TopBar/TopBar";
import { Accordion } from "../../UI/Accordion/Accordion";



export default function MyCarHistory() {
  const carModel = {}; // Replace {} with the actual car model object

  return (
    <>
      <div className="bg-gray-900 bg-cover bg-center min-h-screen pb-16">
        <TopBar />
        <Accordion selectedCar={carModel} />
      </div>
    </>
  );
}
