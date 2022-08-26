import React from 'react';
import image from '../../../images/logo.png';

const Logo: React.FC = () => {
  return (
    <div className="logo">
      <img src={image} />
    </div>
  );
};

export default Logo;
