import React from "react";

import "./button.styles.css";

const Button = (props) => {
  const { type, label, onClick } = props;
  const onClickhandler = (event) => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button className="button" type={type} onClick={onClickhandler}>
      {label}
    </button>
  );
};

export { Button };
