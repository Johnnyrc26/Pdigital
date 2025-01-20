import { PIcon } from "@porsche-design-system/components-react";
import { useNavigate } from "react-router-dom";

const IconNavigation = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/"); // Navega a la ruta raíz
  };


  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black text-white py-3 shadow-lg flex justify-around items-center z-50">
      <button
        className="flex flex-col items-center justify-center text-gray-300 hover:text-white transition"
        onClick={navigateToHome}
      >
        <PIcon theme="auto" name="home" size="large" aria={{ "aria-label": "Home icon" }} />
        <span className="text-sm mt-1">Home</span>
      </button>

      <button
        className="flex flex-col items-center justify-center text-gray-300 hover:text-white transition"
      >
        <PIcon theme="auto" name="heart" size="large" aria={{ "aria-label": "Favorites" }} />
        <span className="text-sm mt-1">Favorites</span>
      </button>
      
      <button
        className="flex flex-col items-center justify-center text-gray-300 hover:text-white transition"
      >
        <PIcon theme="auto" name="user" size="large" aria={{ "aria-label": "User Menu" }} />
        <span className="text-sm mt-1">Profile</span>
      </button>
    </div>
  );
};

export default IconNavigation;