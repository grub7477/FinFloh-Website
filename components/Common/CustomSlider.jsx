// components/CustomSlider.js
import React from "react";

const CustomSlider = ({ min, max, step, value, onChange, label, unit }) => {
  const handleChange = (event) => {
    onChange(Number(event.target.value));
  };

  return (
    <div className="custom-slider">
      <label>{label}</label>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
      />
     
    </div>
  );
};

export default CustomSlider;
