import { PCrest } from "@porsche-design-system/components-react";
import { PIcon } from "@porsche-design-system/components-react";
import { PCarousel } from "@porsche-design-system/components-react";
import { PDivider } from "@porsche-design-system/components-react";
import { PButtonTile } from "@porsche-design-system/components-react";
import { PLinkTileModelSignature } from "@porsche-design-system/components-react";
import { PLink } from "@porsche-design-system/components-react";

export const ProfilePage = (): JSX.Element => (
  <div className="bg-gray-900 bg-cover bg-center min-h-screen">
    <div className="text-white p-6">
      {/* Contenedor para los iconos */}
      <div className="flex justify-between items-center">
        {/* Icono de flecha (start) */}
        <PIcon
          theme="auto"
          name="arrow-head-left"
          size="x-large"
          aria={{ "aria-label": "Arrow Head Left icon" }}
        />

        {/* Logo de PCrest (center) */}
        <PCrest />

        {/* Icono de lupa (end) */}
        <PIcon
          theme="auto"
          name="search"
          size="x-large"
          aria={{ "aria-label": "Search icon" }}
        />
      </div>
    </div>
    <PDivider theme="auto" />
    <PCarousel
      theme="auto"
      slidesPerPage={1}
      heading="Most popular"
      className="pt-6">
      <PButtonTile
        label="Some label"
        description="Some Description"
        compact={true}
        align="top">
        <img
          src="public/assets/club-sport-story@2x.webp"
          alt="Some image description"
        />
      </PButtonTile>
      <PButtonTile
        label="Some label"
        description="Some Description"
        compact={true}
        align="top">
        <img src="public/assets/hero.webp" alt="Some image description" />
      </PButtonTile>
      <PButtonTile
        label="Some label"
        description="Some Description"
        compact={true}
        align="top">
        <img
          src="public/assets/mission-x-story.webp"
          alt="Some image description"
        />
      </PButtonTile>
      <PButtonTile
        label="Some label"
        description="Some Description"
        compact={true}
        align="top">
        <img
          src="public/assets/loyalist-teaser.webp"
          alt="Some image description"
        />
      </PButtonTile>
    </PCarousel>
    <PLinkTileModelSignature
      heading="Some heading"
      description="Some description"
    className="p-6">
      <img src="public/assets/urbanist-teaser.webp" alt="Some image description" />
      <PLink slot="primary" href="https://porsche.com/#primary">
        Primary label
      </PLink>
      <PLink slot="secondary" href="https://porsche.com/#secondary">
        Secondary label
      </PLink>
    </PLinkTileModelSignature>
  </div>
);

export default ProfilePage;
