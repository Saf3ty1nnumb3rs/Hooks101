import React, { useState } from 'react';
import './LightBulb.scss'

const LightBulb = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleLight = () => {
    setIsOn(prevIsOn => !prevIsOn)
  };

  const glow = isOn ? 'glow' : '';
  
  return (
    <>
    <h2>Light Toggle</h2>
      <button
        className={`light ${glow}`}
        onClick={() => toggleLight()}>
      </button>
    </>
  );
};

export default LightBulb;