import React, { useState } from "react";
import "../Style/Skills.css";

function Skills() {
  const [fig, setFig] = useState(false);
  const [nod, setNod] = useState(false);
  const [adb, setAdb] = useState(false);
  const [rct, setRct] = useState(false);
  const [skh, setSkh] = useState(false);
  const [ptn, setPtn] = useState(false);
  return (
    <>
      <div id="skill" className="skills-main p-5">
        <span className=" heddng-h" style={{ fontSize: "40px" }}>
          Skills
        </span>
        <br />
        <span
          className=" heddng"
          style={{
            color: "rgb(183 197 211)",
            fontFamily: "Papyrus",
          }}
        >
          <b>My Top Skills</b>
        </span>
        <div className="opt-main">
          <div className="opt-in">
            <div className="opt-logo">
              <img
                src="https://www.cdnlogo.com/logos/h/84/html.svg"
                alt="html Logo"
                style={{ height: "100%", width: "100%" }}
              />
            </div>
            <div>
              <span>
                <h4 className="mt-1 text-muted">
                  <b>HTML</b>
                </h4>
              </span>
              <span>
                <h6>
                  <i>Hyper Text Markup Language</i>
                </h6>
              </span>
            </div>

            <span className="icon text-muted" onClick={() => setFig(true)}>
              <i class="fa fa-arrow-right" aria-hidden="true"></i>
            </span>
          </div>

          <div className="opt-in text-muted ">
            <div className="opt-logo">
              <img
                src="data:image/png;base64,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"
                alt="CSS logo"
                style={{ height: "100%", width: "100%" }}
              />
            </div>
            <div className="">
              <span>
                <h4 className="mt-1 text-muted">
                  <b>CSS</b>
                </h4>
              </span>
              <span>
                <h6>
                  <i>Cascadinig Style Sheet</i>
                </h6>
              </span>
            </div>
            <span className="text-muted icon" onClick={() => setNod(true)}>
              <i class="fa fa-arrow-right" aria-hidden="true"></i>
            </span>
          </div>

          <div className="opt-in">
            <div className="opt-logo">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png"
                alt="Bootstrap Logo"
                style={{ height: "100%", width: "100%" }}
              />
            </div>
            <div>
              <span>
                <h4 className="mt-1 text-muted">
                  <b>Bootstrap</b>
                </h4>
              </span>
              <span>
                <h6>
                  <i>Cascading Style Sheet</i>
                </h6>
              </span>
            </div>
            <span className="text-muted icon" onClick={() => setAdb(true)}>
              <i class="fa fa-arrow-right" aria-hidden="true"></i>
            </span>
          </div>

          <div className="opt-in">
            <div className="opt-logo">
              <img
                src="data:image/png;base64,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"
                alt="React js Logo"
                style={{ height: "100%", width: "100%" }}
              />
            </div>
            <div>
              <span>
                <h4 className="mt-1 text-muted">
                  <b>JavScript</b>
                </h4>
              </span>
              <span>
                <h6>
                  <i> Programming Language</i>
                </h6>
              </span>
            </div>
            <span className="text-muted icon" onClick={() => setRct(true)}>
              <i class="fa fa-arrow-right" aria-hidden="true"></i>
            </span>
          </div>

          <div className="opt-in">
            <div className="opt-logo">
              <img
                src="data:image/png;base64,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"
                alt="Sketch Logo"
                style={{ height: "100%", width: "100%" }}
              />
            </div>
            <div>
              <span>
                <h4 className="mt-1 text-muted">
                  <b>jQuery</b>
                </h4>
              </span>
              <span>
                <h6>
                  <i>JavaScript Framework</i>
                </h6>
              </span>
            </div>
            <span className="icon text-muted" onClick={() => setSkh(true)}>
              <i class="fa fa-arrow-right" aria-hidden="true"></i>
            </span>
          </div>

          <div className="opt-in">
            <div className="opt-logo">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                alt="Python Logo"
                style={{ height: "100%", width: "100%" }}
              />
            </div>
            <div>
              <span>
                <h4 className="mt-1 text-muted">
                  <b>React-js</b>
                </h4>
              </span>
              <span>
                <h6>
                  <i>JavaScript library</i>
                </h6>
              </span>
            </div>
            <span className="icon text-muted" onClick={() => setPtn(true)}>
              <i class="fa fa-arrow-right" aria-hidden="true"></i>
            </span>
          </div>
        </div>
        {fig ? (
          <div className="discription">
            <div className="discription-content">
              <span>
                <img
                  src="https://www.cdnlogo.com/logos/h/84/html.svg"
                  alt="HTML Logo"
                  style={{
                    height: "10%",
                    width: "10%",
                    margin: "10px",
                    float: "left",
                  }}
                />
              </span>
              <span>
                <h1>HTML</h1>
              </span>
              <br />
              <p>
                I specialize in HTML and have a strong foundation in web
                development. My expertise includes:
              </p>
              <ol>
                <li>Creating semantic and accessible HTML markup.</li>
                <li>Implementing responsive web design principles.</li>
                <li>Optimizing web pages for performance and SEO.</li>
                <li>
                  Integrating HTML with CSS and JavaScript to build interactive
                  websites.
                </li>
                <li>
                  Ensuring cross-browser compatibility and adherence to web
                  standards.
                </li>
              </ol>

              <button onClick={() => setFig(false)}>close</button>
            </div>
          </div>
        ) : null}

        {nod ? (
          <div className="discription">
            <div className="discription-content">
              <span>
                <img
                  src="data:image/png;base64,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"
                  alt="Node JS Logo"
                  style={{
                    height: "10%",
                    width: "10%",
                    margin: "10px",
                    float: "left",
                  }}
                />
              </span>
              <span>
                <h1>CSS</h1>
              </span>
              <br />
              <p>
                I expert in CSS (Cascading Style Sheets) and bring creative
                design to life on the web. My CSS expertise includes:
              </p>
              <ol>
                <li>
                  Creating responsive and visually appealing user interfaces.
                </li>
                <li>
                  Implementing CSS animations and transitions for interactive
                  elements.
                </li>
                <li>Using Flexbox and CSS Grid for layout design.</li>
                <li>
                  Customizing and styling web components for a unique look and
                  feel.
                </li>
                <li>
                  Ensuring cross-browser compatibility and optimizing CSS for
                  performance.
                </li>
              </ol>

              <button onClick={() => setNod(false)}>close</button>
            </div>
          </div>
        ) : null}

        {adb ? (
          <div className="discription">
            <div className="discription-content">
              <span>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png"
                  alt="Node JS Logo"
                  style={{
                    height: "10%",
                    width: "13%",
                    margin: "10px",
                    float: "left",
                  }}
                />
              </span>
              <span>
                <h1>Bootstrap</h1>
              </span>
              <br />
              <p>
                I have extensive experience with Bootstrap, a popular front-end
                framework for building responsive and attractive web
                applications. My Bootstrap expertise includes:
              </p>
              <ol>
                <li>
                  Creating responsive and mobile-first web designs using
                  Bootstrap's grid system.
                </li>
                <li>
                  Customizing Bootstrap themes and components to match your
                  brand identity.
                </li>
                <li>
                  Integrating Bootstrap with JavaScript for interactive web
                  applications.
                </li>
                <li>
                  Optimizing Bootstrap-based websites for performance and SEO.
                </li>
                <li>
                  Keeping up-to-date with the latest Bootstrap features and best
                  practices.
                </li>
              </ol>
              <button onClick={() => setAdb(false)}>close</button>
            </div>
          </div>
        ) : null}

        {rct ? (
          <div className="discription">
            <div className="discription-content">
              <span>
                <img
                  src="data:image/png;base64,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"
                  alt="React js Logo"
                  style={{
                    height: "10%",
                    width: "12%",
                    margin: "10px",
                    float: "left",
                  }}
                />
              </span>
              <span>
                <h1>JavaScript</h1>
              </span>
              <br />
              <p>
                I am a JavaScript expert with a deep understanding of this
                versatile programming language. My JavaScript expertise
                includes:
              </p>
              <ol>
                <li>
                  Developing dynamic and interactive web applications using
                  JavaScript.
                </li>
                <li>
                  Working with modern JavaScript frameworks like React and
                  Vue.js.
                </li>
                <li>
                  Implementing client-side scripting for enhanced user
                  experiences.
                </li>
                <li>
                  Debugging and optimizing JavaScript code for performance.
                </li>
                <li>
                  Staying up-to-date with the latest JavaScript trends and best
                  practices.
                </li>
              </ol>
              <button onClick={() => setRct(false)}>close</button>
            </div>
          </div>
        ) : null}

        {skh ? (
          <div className="discription">
            <div className="discription-content">
              <span>
                <img
                  src="data:image/png;base64,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"
                  alt="Sketch Logo"
                  style={{
                    height: "11%",
                    width: "13%",
                    margin: "10px",
                    float: "left",
                  }}
                />
              </span>
              <span>
                <h1>jQuery</h1>
              </span>
              <br />
              <p>
                I have extensive experience with jQuery, a popular JavaScript
                library that simplifies web development. My jQuery expertise
                includes:
              </p>
              <ol>
                <li>
                  Creating interactive and dynamic web pages using jQuery.
                </li>
                <li>
                  Implementing jQuery plugins for various functionalities.
                </li>
                <li>
                  Working with AJAX and JSON to fetch and manipulate data
                  asynchronously.
                </li>
                <li>
                  Optimizing jQuery code for performance and cross-browser
                  compatibility.
                </li>
                <li>
                  Providing solutions and enhancements for existing jQuery-based
                  projects.
                </li>
              </ol>
              <button onClick={() => setSkh(false)}>close</button>
            </div>
          </div>
        ) : null}

        {ptn ? (
          <div className="discription">
            <div className="discription-content">
              <span>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                  alt="Node JS Logo"
                  style={{
                    height: "10%",
                    width: "13%",
                    margin: "10px",
                    float: "left",
                  }}
                />
              </span>
              <span>
                <h1>React-js</h1>
              </span>
              <br />
              <p>
                I am a React.js expert with a deep understanding of this popular
                JavaScript library for building user interfaces. My React.js
                expertise includes:
              </p>
              <ol>
                <li>
                  Developing dynamic and interactive web applications using
                  React.js.
                </li>
                <li>
                  Creating reusable and component-based UI elements for
                  efficient development.
                </li>
                <li>
                  Working with state management libraries like Redux or Mobx.
                </li>
                <li>
                  Implementing routing and navigation for single-page
                  applications.
                </li>
                <li>
                  Optimizing React applications for performance and scalability.
                </li>
              </ol>
              <button onClick={() => setPtn(false)}>close</button>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Skills;
