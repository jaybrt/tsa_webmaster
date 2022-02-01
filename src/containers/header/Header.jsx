import React, { useState } from "react";
import "./header.css";
import lhsImg from "../../assets/lhsImg.png";

const Header = () => {
  const [email, setEmail] = useState("");

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailButtonPressed = () => {
    console.log(email);
  };

  return (
    <div className="lhs__header section__padding" id="home">
      <div className="lhs__header-content">
        <h1 className="gradient__text">
          Learn about Littleton High School's Industry Leading STEM Program
        </h1>
        <p>
          Littleton High School is proud to offer students a multitude of
          opportunities to engage in the STEM field and prepare them for
          anything the future brings. We offer students an abundance of STEM
          electives, the ability to participate in STEM related extracurricular
          activities, and the opportunity to pursue a STEM Certificate which
          signifies their interest and work in the subject.
        </p>

        <div className="lhs__header-content__input">
          <input
            type="email"
            placeholder="Your Email Address"
            onChange={handleInputChange}
          ></input>
          <button type="button" onClick={handleEmailButtonPressed}>
            Get In Contact
          </button>
        </div>
      </div>
      <div className="lhs__header-image">
        <img src={lhsImg} alt="LHS-Img"></img>
      </div>
    </div>
  );
};

export default Header;
