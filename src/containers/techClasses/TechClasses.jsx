import React from "react";
import "./techclasses.css";
import compSci from "../../assets/compsci.jpg";

const classes = [
  ["Computer Science", "A class about computer science", compSci],
];

const Tclass = ({ cName, cDesc, cImg }) => {
  return (
    <div>
      <h1>{cName}</h1>
      <p>{cDesc}</p>
      <img src={cImg} alt=""></img>
    </div>
  );
};

const TechClasses = () => {
  return (
    <div className="lhs__techclasses section__margin" id="techClasses">
      <div className="lhs__techclasses-feature"></div>
      {classes.map((_class) => (
        <Tclass cName={_class[0]} cDesc={_class[1]} cImg={_class[2]}></Tclass>
      ))}
    </div>
  );
};

export default TechClasses;
