import React from "react";

import "./input.styles.css";

const Input = (props) => {
  const { id, type, value, onChange, placeholder, label, reference } = props;

  return (
    <div className="input-item">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        ref={reference}
      />
    </div>
  );
};

export { Input };
