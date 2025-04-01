import React from 'react';
import { gem } from '../assets/icons';

const VerticalLine = ({ position_x }) => {
  return (
    <div className={`vertical-line bg-neon_blue-300 ${position_x} top-0 hidden xl:block`}>
      <img
        src={gem}
        alt="gem-icon"
        className="w-6 h-6 object-contain fixed top-[25%] transform -translate-x-[46.5%] -translate-y-1/2"
      />
      <img
        src={gem}
        alt="gem-icon"
        className="w-10 h-10 object-contain fixed top-1/2 transform -translate-x-[47.5%] -translate-y-1/2"
      />
      <img
        src={gem}
        alt="gem-icon"
        className="w-6 h-6 object-contain fixed top-[75%] transform -translate-x-[46.5%] -translate-y-1/2"
      />
    </div>
  );
};

export default VerticalLine;
