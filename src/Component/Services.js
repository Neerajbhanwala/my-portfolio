import React from "react";
import "../Style/Services.css";
function Services() {
  return (
    <>
      <div id="Services" className="services-main p-5">
        <span className="hddiing-h" style={{ fontSize: "35px" }}>
          Services
        </span>
        <br />
        <span
          className="hddiing"
          style={{ color: "rgb(183 197 211)", fontFamily: "Papyrus" }}
        >
          <b>What I Offer</b>
        </span>
        <br />

        <div className="main-container">
          <div className="service-content">
            <div className="hoverme"></div>
            <span style={{ fontSize: "45px" }}>
              <i class="fa fa-code" aria-hidden="true"></i>
            </span>
            <h3>
              <b>Web Development</b>
            </h3>
            <h5>
              I specialize in creating interactive and responsive websites that
              meet your unique business needs. From building dynamic web
              applications to optimizing website performance, I have the
              technical expertise to bring your online vision to life.
            </h5>
          </div>

          <div className="service-content">
            <div className="hoverme"></div>
            <span style={{ fontSize: "45px" }}>
              <i class="fa fa-code-fork" aria-hidden="true"></i>
            </span>
            <h3>
              <b>UI/ UX Designing</b>
            </h3>
            <h5>
              Crafting engaging user interfaces and exceptional user experiences
              is my forte. I focus on creating intuitive designs that captivate
              users and keep them engaged. From wireframing to prototyping, I
              ensure your digital products are visually appealing and
              user-friendly.
            </h5>
          </div>

          <div className="service-content">
            <div className="hoverme"></div>
            <span style={{ fontSize: "45px" }}>
              <i class="fa fa-crop" aria-hidden="true"></i>
            </span>
            <h3>
              <b>Photoshop Editing</b>
            </h3>
            <h5>
              With a keen eye for detail, I offer professional Photoshop editing
              services. Whether you need photo retouching, image manipulation,
              or creative design work, I can enhance your visuals and make them
              stand out in any context.
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
