import React from "react";
import ReactDOM from "react-dom";
import { Button } from "./../button";

import "./modal.styles.css";

const Overlay = (props) => {
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

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Overlay {...props} />,
        document.getElementById("overlay")
      )}
    </>
  );
};

export { Modal };
