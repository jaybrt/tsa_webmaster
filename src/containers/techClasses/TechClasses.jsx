import React from "react";
import "./techclasses.css";
import introCompSci from "../../assets/introCompSci.png";
import apCS from "../../assets/coding.png";
import woods from "../../assets/woods.jpg";
import { Feature, TechClass } from "../../components";

const classesData = [
  {
    title: "Intro To Computer Science",
    text: "A one-semester interactive introductory course for students brand new to programming that teaches the foundations of computer science using the Python language.",
    img: introCompSci,
    alt: "Python Logo",
  },
  {
    title: "AP Computer Science Principles",
    text: "Learn to design and evaluate solutions and to apply computer science to solve problems through the development of algorithms and programs. Use data to discover new knowledge.",
    img: apCS,
    alt: "AP Computer Science Image",
  },
  {
    title: "Woods",
    text: "Learn to use woodworking machines and create amazing projects. Do you like to build?  Then this class is for you! ",
    img: woods,
    alt: "Woods",
  },
  {
    title: "Engineering and Technology",
    text: "Learn 3D Computer Aided Drafting (CAD) software used in industry. Design, modify, assemble and manage complex parts in a 3D space as well as producing 2D drawings from the 3D models.",
    img: "",
    alt: "engineering",
  },
  {
    title: "IB Design Technology",
    text: "Learn to adapt to new experiences and to approach problems with the appropriate skills and the relevant techniques to identify the important elements and crucially develop optimum solutions",
    img: "",
    alt: "IB logo",
  },
  {
    title: "Animation",
    text: "An introduction to various aspects of the animation industry. Learn the skills to create animations including, but not limited to, story writing, storyboards, character design, the Principles of Animation, and shots/angles.",
    img: "",
    alt: "animation",
  },
  {
    title: "Art Photography",
    text: "Explore the skill and purpose of digital photography in contemporary art. Learn the basics of photography, including aperture, shutter speed, exposure, composition, and Photoshop techniques.",
    img: "",
    alt: "photography",
  },
];

const TechClasses = () => {
  return (
    <div className="lhs__techclasses section__margin_small" id="techClasses">
      <div className="lhs__techclasses-feature lhs__techclasses-title">
        <Feature
          title="Tech Classes @ Littleton"
          text="We offer a wide range of classes in the STEM/STEAM fields. At Littleton you will have the chance to learn anything from computer sciecne to digital media. The limit is your imagination."
        />
      </div>
      <div className="lhs__techclasses-sidebar"></div>
      <div className="lhs__techclasses-container">
        {classesData.map((_class) => (
          <TechClass
            cName={_class.title}
            cDesc={_class.text}
            cImg={_class.img}
            cImgAlt={_class.alt}
          ></TechClass>
        ))}
      </div>
    </div>
  );
};

export default TechClasses;
