import { PIcon } from "@porsche-design-system/components-react";

const IconNavigation = () => {
  const navigateToSearch = () => {
    console.log("Navigating to Search");
  };

  const navigateToHome = () => {
    console.log("Navigating to Home");
  };

  const navigateToFavs = () => {
    console.log("Navigating to Favorites");
  };

  const toggleDropdownMenu = () => {
    console.log("Toggling User Menu");
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black text-white py-3 shadow-lg flex justify-around items-center z-50">
      <button
        className="flex flex-col items-center justify-center text-gray-300 hover:text-white transition"
        onClick={navigateToHome}
      >
        <PIcon theme="auto" name="home" aria={{ "aria-label": "Home icon" }} />
        <span className="text-sm mt-1">Home</span>
      </button>

      <button
        className="flex flex-col items-center justify-center text-gray-300 hover:text-white transition"
        onClick={navigateToFavs}
      >
        <PIcon theme="auto" name="heart" aria={{ "aria-label": "Favorites" }} />
        <span className="text-sm mt-1">Favorites</span>
      </button>
      <button
        className="flex flex-col items-center justify-center text-gray-300 hover:text-white transition"
        onClick={toggleDropdownMenu}
      >
        <PIcon theme="auto" name="user" aria={{ "aria-label": "User Menu" }} />
        <span className="text-sm mt-1">Profile</span>
      </button>
    </div>
  );
};

export default IconNavigation;