import React from "react";
import person3 from "../Image/person3.png";
import "../Style/HireMe.css";
import CV from "../Image/CV.pdf";

function HireMe() {
  return (
    <>
      <div className="main ps-4 pt-5">
        <span className="hdng-h" style={{ fontSize: "35px" }}>
          Hire me
        </span>
        <br />
        <span className="hdng">For your projects</span>
        <br />

        <div className="d-flex justify-content-center align-items-center cntnr">
          <div className="hireme-image">
            <img src={person3} alt="person" />
          </div>

          <div className="box">
            <b>
              I'm a dedicated and skilled professional with a passion for
              delivering high-quality work. With a background of one year
              experience, I can bring valuable expertise to your projects.
            </b>
            <br />
            <a href={CV} download="Neeraj React Developer">
              <button>Hire me</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default HireMe;
