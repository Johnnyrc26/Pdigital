import {
  PIcon,
  PCrest,
  PDivider,
} from "@porsche-design-system/components-react";
import SearchDropdown from "../SearchDropdown/SearchDropdown";
import { useNavigate } from "react-router-dom";

export default function TopBar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="text-white p-6">
        {/* Contenedor para los iconos */}
        <div className="flex justify-between items-center">
          {/* Icono de flecha (start) */}
          <PIcon
            theme="auto"
            name="arrow-head-left"
            size="x-large"
            onClick={() => navigate(-1)}
            aria={{ "aria-label": "Arrow Head Left icon" }}
          />

          {/* Logo de PCrest (center) */}
          <PCrest />

          {/* Icono de lupa (end) */}
          <SearchDropdown />
        </div>
      </div>
      <PDivider />
    </>
  );
}
