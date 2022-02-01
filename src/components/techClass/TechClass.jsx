import React from "react";
import Feature from "../feature/Feature";
import "./TechClass.css";

const techClass = ({ cName, cDesc, cImg, cImgAlt }) => {
  return (
    <div className="lhs__techclass__container">
      <Feature title={cName} text={cDesc} />
      <img className="lhs__techclass__img" src={cImg} alt={cImgAlt}></img>
    </div>
  );
};

export default techClass;
