import React from "react";

const Select = ({ label, name, options, handleChange }) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>

      <select id={label} name={name} onChange={handleChange}>
        <option value="">Seçiniz</option>

        {options.map((item) => (
          <option key={item} value={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
