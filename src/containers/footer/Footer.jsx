import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="lhs__footer">
      <div className="lhs__footer-title">
        <h1 className="gradient__text">References & Attributions</h1>
      </div>
      <div className="lhs__footer-container">
        <a
          href={process.env.PUBLIC_URL + "/plan-of-work-log.pdf"}
          title="plan of work log"
        >
          Plan of Work Log
        </a>
        <a
          href={process.env.PUBLIC_URL + "/copyright-checklist.pdf"}
          title="copyright checklist"
        >
          Student Copyright Checklist
        </a>
        <a href="https://www.flaticon.com/free-icons/code" title="code icons">
          Code icons created by Freepik - Flaticon
        </a>
        <a
          href="https://unsplash.com/photos/IVaKksEZmZA?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink"
          title="photography image"
        >
          Photography Image via Unsplash
        </a>
        <a
          href="https://unsplash.com/photos/p8GmCEgSmmo?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink"
          title="animation image"
        >
          Animation Image via Unsplash
        </a>
        <a
          href="https://unsplash.com/photos/nHRfTeqAxjs?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink"
          title="3d printer image"
        >
          3D Printer Image via Unsplash
        </a>
        <a
          href="https://unsplash.com/photos/Jcuz3_e1moQ?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink"
          title="yoda image"
        >
          Yoda Image via Unsplash
        </a>
      </div>
    </div>
  );
};

export default Footer;
