import React, { useState } from 'react';
import { PIcon, PFieldset, PTextFieldWrapper } from '@porsche-design-system/components-react';

const SearchDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      style={{
        position: 'relative',
        display: 'inline-block',
      }}
    >
      {/* Icono de búsqueda */}
      <PIcon
        theme="auto"
        name="search"
        size="x-large"
        aria={{ "aria-label": "Search icon" }}
        onClick={toggleDropdown}
        style={{
          cursor: 'pointer',
        }}
      />

      {/* Desplegable */}
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 8px)', // Espaciado para el dropdown debajo del ícono
            right: 0, // Alinea el dropdown hacia la izquierda
            zIndex: 10,
            backgroundColor: 'black',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            padding: '10px',
            borderRadius: '4px',
            width: '340px',
            maxWidth: '90vw', // Evita que se desborde en pantallas pequeñas
          }}
        >
          <PFieldset theme="auto" label="Buscar">
            <PTextFieldWrapper theme="auto" label="Escribe tu búsqueda">
              <input
                type="text"
                name="search"
                placeholder="Buscar..."
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                }}
              />
            </PTextFieldWrapper>
          </PFieldset>
        </div>
      )}
    </div>
  );
};

export default SearchDropdown;