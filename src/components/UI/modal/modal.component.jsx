import React from "react";
import { Button } from "./../button";

import "./modal.styles.css";

const Modal = (props) => {
  const { title, content, success, visible, onClick } = props;
  return (
    <div className={`wrapper ${visible ? "visible" : "hidden"}`}>
      <div className={`modal ${success ? "success" : "error"}`}>
        <header>
          <h2>{title}</h2>
        </header>
        <div>
          <p>{content}</p>
        </div>
        <footer>
          <Button onClick={onClick} label="OK" />
        </footer>
      </div>
    </div>
  );
};

export { Modal };
