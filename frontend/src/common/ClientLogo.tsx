import React from 'react';

type ClientLogoProps = {
  image: string;
  alt?: string;
};

const ClientLogo = ({ image, alt }: ClientLogoProps) => (
  <div className="flex items-center justify-center h-16">
    <img src={image} alt={alt || 'Client Logo'} className="max-h-10 object-contain grayscale opacity-70 hover:opacity-100 transition" />
  </div>
);

export default ClientLogo; 