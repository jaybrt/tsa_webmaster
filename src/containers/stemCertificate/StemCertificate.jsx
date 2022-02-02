import React from "react";
import { Feature } from "../../components";
import "./stemCertificate.css";

const StemCertificate = () => {
  return (
    <div
      className="lhs__stemcertificate-container section__margin_small"
      id="stemcert"
    >
      <Feature
        title="STEM Certificate @ Littleton"
        text=" Littleton High School offers students the opportunity to earn a STEM Certificate, to signify their hard work and accomplishments in STEM related subjects and activities. The STEM certificate program is open to all students who are interested, and there are two options, the Gold Certificate and the Purple Certificate. STEM students will also have the opportunity to go on STEM field trips as well as attending monthly STEM pizza lunches where they get to hear an industry leader speak about their work. "
      />
      <div className="lhs__stemcertificate-features">
        <Feature
          title="Purple STEM Certificate"
          text="In order to complete the Purple STEM Certificate students must meet all 4 of the following requirements: Maintain a cumulative grade point average of at least 3.0, take at least 3 years of math and science classes, create a portfolio documenting their progress and the work they have done for each of their 4 STEM electives, and complete 100 hours of STEM related extracurricular activities."
        />
        <Feature
          title="Gold STEM Certificate"
          text="In order to complete the Purple STEM Certificate students must meet all 4 of the following requirements: Maintain a cumulative grade point average of at least 3.5, take at least 4 years of math and science classes, create a portfolio documenting their progress and the work they have done for each of their 4 STEM electives, and complete 100 hours of STEM related extracurricular activities."
        />
      </div>
    </div>
  );
};

export default StemCertificate;
