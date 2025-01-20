import { useLocation } from "react-router-dom";
import Accordion from "../../UI/Accordion/AccordionGeneral";
import TopBar from "../../UI/TopBar/TopBar";

const GeneralPage = (): JSX.Element => {
  const location = useLocation();
  const selectedCategory = location.state?.selectedTitle;

  if (!selectedCategory) {
    return <div className="text-white text-center">No se seleccionó ninguna categoría</div>;
  }

  return (
    <div className="bg-gray-900 bg-cover bg-center min-h-screen pb-16">
      <TopBar />
      <Accordion category={selectedCategory} />
    </div>
  );
};

export default GeneralPage;