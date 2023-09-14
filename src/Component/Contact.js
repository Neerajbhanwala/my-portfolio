import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "../Style/Contact.css";

function Contact() {

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  return (
    <>
      <div id="Contact" className="mains p-5">
        <span className="text-light hedng-h" style={{ fontSize: "35px" }}>
          Contact me
        </span>
        <br />
        <span
          className="hedng"
          style={{ fontFamily: "cursive", color: "#b7c5d3" }}
        >
          Get In Touch
        </span>
        <br />

        <div className=" d-flex ms-5 mainContForm">
          <div className=" ">
            <form action="https://formspree.io/f/mleynlvr" method="POST">
              <input type="text" name="Name" placeholder="Name" required />
              <input type="email" name="Email" placeholder="Email" required />
              <textarea
                name="Message"
                col="2"
                row="2"
                placeholder="Message"
                required
              ></textarea>
              <br />
              <ReCAPTCHA
    sitekey="6LfNhiMoAAAAAB4R4-cfsa9X5aIdPID7XwBKeiOT"
    onChange={onChange}
    required
  />,
  <br />
              <button type="submit">Submit</button>
            </form>
          </div>

          <div>
            <a href="mailto:kukaa904@gmail.com" target="_">
              <div className="mail">
                <i class="fa fa-envelope" aria-hidden="true"></i>&nbsp;
                kukaa904@gmail.com
              </div>
            </a>

            <a href="tel:+9996689916" target="_">
              <div className="mail">
                <i class="fa fa-phone" aria-hidden="true"></i> +91-99966-89916
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/neeraj-bhanwala-b71918228/"
              target="_"
            >
              <div className="mail">
                <i class="fa fa-linkedin-square" aria-hidden="true"></i>{" "}
                LinkedIn
              </div>
            </a>

            <a href="https://github.com/Neerajbhanwala" target="_">
              <div className="mail">
                <i class="fa fa-github" aria-hidden="true"></i> Github
              </div>
            </a>

            <br />
            <br />
          </div>
        </div>
      </div>
      <div className=" mt-2 mb-3 text-center">
        <h2>Neeraj Bhanwala</h2>
        <h6>NeerajBhanwala &copy; All CopyRights Reserved 2023 </h6>
      </div>
    </>
  );
}

export default Contact;
