import React from "react";
import "./header.css";
import lhsImg from "../../assets/lhsImg.png";

const Header = () => {
  return (
    <div className="lhs__header section__padding" id="home">
      <div className="lhs__header-content">
        <h1 className="gradient__text">
          Learn about Littleton High School's Industry Leading STEM Program
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor
          orci eu lobortis elementum nibh tellus molestie. Varius morbi enim
          nunc faucibus a pellentesque.
        </p>

        <div className="lhs__header-content__input">
          <input type="email" placeholder="Your Email Address"></input>
          <button type="button">Get In Contact</button>
        </div>
      </div>
      <div className="lhs__header-image">
        <img src={lhsImg} alt="LHS-Img"></img>
      </div>
    </div>
  );
};

export default Header;
