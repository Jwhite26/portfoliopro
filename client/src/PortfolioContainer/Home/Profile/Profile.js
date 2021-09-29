import React from "react";
import Typical from "react-typical";
import "./Profile.css";
import ScrollService from "../../../utilities/ScrollService";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://web.facebook.com">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/Josh-white26">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https
              `````://www.instagram.com">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="https://www.twitter.com">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="https://github.com/jwhite26">
                <i className="fa fa-github"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Josh</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Ethusiastic Dev 🔴",
                    1000,
                    "Full Stack Developer 💻",
                    1000,
                    "MERN Stack Dev 😎",
                    1000,
                    "Cross Platform Dev 🌐",
                    1000,
                    "React/React Native Dev📱",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                knack of building applications with front and back end
                opreations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              {" "}
              Hire Me{" "}
            </button>
            <a href="JOSHUAWHITEResume.PDF" download="JOSHUAWHITEResume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
