import React from 'react';
import "./TechClass.css"

const techClass = ({ cName, cDesc, cImg }) => {
  return (
    <div className = "lhs__techclass__container">
      <h1>{cName}</h1>
      <p>{cDesc}</p>
      <img className = "lhs__techclass__img" src={cImg} alt=""></img>
    </div>
  );
};

export default techClass;
