import "./App.css"; // Importa los estilos de tu proyecto
import {PIcon} from "@porsche-design-system/components-react";

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
    <div className="icon-navigation-container">
      <button className="icon-container">
        <PIcon
          theme="auto"
          // name="briefcase"
          aria={{ "aria-label": "Briefcase icon" }}
        />
      </button>
      <button className="icon-container" onClick={navigateToSearch}>
        <PIcon
          theme="auto"
          name="search"
          aria={{ "aria-label": "Search icon" }}
        />
      </button>
      <button className="icon-container" onClick={navigateToHome}>
        <PIcon theme="auto" name="home" aria={{ "aria-label": "Home icon" }} />
      </button>
      <button className="icon-container" onClick={navigateToFavs}>
        <PIcon theme="auto" name="heart" aria={{ "aria-label": "Heart icon" }} />
      </button>
      <button className="icon-container" onClick={toggleDropdownMenu}>
        <PIcon theme="auto" name="user" aria={{ "aria-label": "User icon" }} />
      </button>
    </div>
  );
};

export default IconNavigation;