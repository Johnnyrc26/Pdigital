import NavBar from "../../UI/NavBar/index";
import backgroundImage from "../public/assets/hero.webp";
import { PButton } from "@porsche-design-system/components-react";
import './styles.css';

const App = (): JSX.Element => {
  return (
    <div className="background">
      <h1>Welcome to the Porsche Design System</h1>
      <div>
        <PButton theme="auto">Some label</PButton>
        <PButton theme="auto" compact={{ base: true, m: false }} variant="ghost">Some label</PButton>
        <PButton theme="auto">Some label</PButton>

      </div>
      <NavBar />
    </div>
  );
};

export default App;
