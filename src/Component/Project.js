import React from "react";
import "../Style/Project.css";
import person2 from "../Image/person2.png";
import Amazon from "../Image/Amazon.png";
import Google from "../Image/Google.png";
import Art from "../Image/Art.png";

function project() {
  return (
    <>
      <div id="Project" className="project-main pt-5  pe-5">
        <span className="ps-5 creation-h" style={{ fontSize: "35px" }}>
          Projects
        </span>
        <br />
        <span className="ps-5 creation">MY CREATION</span>
        <br />

        <div className="d-flex justify-content-center align-items-center mainContainer">
          <div className="personPic">
            <img src={person2} alt="person" width="100%" />
          </div>
          <div className="prj">
            <div className="prj-container">
              <img src={Amazon} alt="-\Amazon-project" />
              <img src={Google} alt="Google-project" />
              <img src={Art} alt="Visual-Art-Gallery-Project" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default project;
