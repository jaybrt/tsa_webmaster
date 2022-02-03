import React from "react";
import { Feature } from "../../components";
import "./tsa.css";

const Tsa = () => {
  return (
    <div className="lhs__tsa section__margin_small" id="tsa">
      <div className="lhs__tsa-header">
        <Feature
          title="TSA @ Littleton"
          text="Littleton’s Technology Student Associtation chapter offers students the opportunity to compete against schools across the state at the State TSA competition. We meet every Friday from 7:45 - 8:25 in the tech lab. Feel free to stop by anytime if you are interested in joining TSA!"
        />
      </div>
      <div className="lhs__tsa-container">
        <Feature
          title="TSA Advisors"
          text="Littleton’s TSA Chapter is led by two advisors, Daniel Steepleton and Pamela Wilkins. Alongside our advisors, the officer team is proud to help run Littleton TSA."
        />
        <div className="lhs__tsa-officers_container">
          <Feature title="TSA Officers" text="" />
          <div className="lhs__tsa-officers_list">
            <p>President: Ethan Pfister </p>
            <p>Vice President: Jay Landers</p>
            <p>Treasurer: Grady Redding</p>
            <p>Secretary: Katherine Sanders</p>
            <p>Sergeant at Arms: Caleb Schmitz</p>
            <p>Reporter: Paris Lyons</p>
            <p>Officer at large: Gillian Steinhart</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tsa;
