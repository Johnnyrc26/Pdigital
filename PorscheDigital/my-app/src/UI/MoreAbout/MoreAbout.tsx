import React from "react";
import { Link } from "react-router-dom";

type CarInfoTileProps = {
  carModel: string;
  carImage: string;
  heading: string;
  primaryLink: {
    label: string;
    to: string;
    external?: boolean;
  };
  secondaryLink: {
    label: string;
    to: string;
    external?: boolean;
  };
};

const MoreAbout: React.FC<CarInfoTileProps> = ({
  carModel,
  carImage,
  heading,
  primaryLink,
}) => {
  return (
    <div className="p-6 bg-gray-800 rounded-lg shadow-md text-white">
      <h2 className="text-xl font-bold mb-4">{heading}</h2>
      <img
        src={carImage}
        alt={`${carModel} image`}
        className="w-full h-auto mb-4 rounded"
      />
      <div className="flex flex-col gap-4">
        {/* Primary Link */}
        {primaryLink.external ? (
          <a
            href={primaryLink.to}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline hover:text-blue-300"
          >
            {primaryLink.label}
          </a>
        ) : (
          <Link
            to={primaryLink.to}
            className="text-blue-500 underline hover:text-blue-300"
          >
            {primaryLink.label}
          </Link>
        )}
        
      </div>
    </div>
  );
};

export default MoreAbout;