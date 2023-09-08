import React, { useState } from "react";
import "../Style/Home.css";
import person from "../Image/person.png";

function Home() {
  const [show, setShow] = useState(false);
  return (
    <div>
      {show ? (
        <div className="navbar-container">
          <div className="navbar">
            <a href="#home">
              <div className="navbar-list" title="Home">
                <i class="fa fa-home" aria-hidden="true"></i>
              </div>
            </a>
            <a href="#skill">
              <div className="navbar-list" title="Skills">
                <i class="fa fa-user" aria-hidden="true"></i>
              </div>
            </a>
            <a href="#Services">
              <div className="navbar-list" title="Services">
                <i class="fa fa-heart" aria-hidden="true"></i>
              </div>
            </a>
            <a href="#Project">
              <div className="navbar-list" title="my projects">
                <i class="fa fa-camera" aria-hidden="true"></i>
              </div>
            </a>
            <a href="#Contact">
              <div className="navbar-list" title="contact me">
                <i class="fa fa-address-book" aria-hidden="true"></i>
              </div>
            </a>
          </div>
        </div>
      ) : null}

      <div id="home" className="main-div-home">
        <div className="left-content">
          <div className="immg">
            <img src={person} alt="React Logo" style={{ width: "100%" }} />
          </div>
          <div
            className="navv"
            title="Open Navbar"
            onClick={() => setShow(!show)}
          >
            <i class="fa fa-bars" aria-hidden="true"></i>
          </div>
          <div className="left-div-content">
            <h2
              style={{
                fontSize: "3rem",
                fontFamily: "Inria Serif",
                fontWeight: "600",
                letterSpacing: "3px",
              }}
            >
              Web Developer
            </h2>
            <div className="hire">Hire Me</div>
            <span>
              <span
                style={{
                  fontFamily: "Paprika",
                  fontSize: "4rem",
                  lineHeight: "1",
                }}
              >
                1+
              </span>
              Years experience in web development
            </span>
            <br />
            <span>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Project work in
              my career <span style={{ fontSize: "60px" }}>20+</span>
            </span>
          </div>
        </div>
        <div className="right-content">
          <div className="right-content-name">
            <span style={{ color: "#eaf2fa" }}>NEERAJ</span> BHANWALA
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
