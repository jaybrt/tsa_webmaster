import React from "react";
import "./techclasses.css";
import compSci from "../../assets/compsci.jpg";
import { Feature, TechClass } from "../../components";

const classes = [
  ["Computer Science", "A class about computer science", compSci],
];



const TechClasses = () => {
  return (
    <div className="lhs__techclasses section__margin" id="techClasses">
      <div className="lhs__techclasses-feature lhs__techclasses-title">
        <Feature />
      </div>
      <div className = "lhs__techclasses-sidebar"></div>
      {classes.map((_class) => (
        <TechClass cName={_class[0]} cDesc={_class[1]} cImg={_class[2]}></TechClass>
      ))}
    </div>
  );
};

export default TechClasses;
