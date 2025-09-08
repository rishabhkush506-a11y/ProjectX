import React, { useState } from "react";
import "./Activity1dPage.css";
import { useNavigate } from "react-router-dom";
import img1 from "./images/ACQHA4@3x.png";

export default function Activity1dPage() {
  const [mantra, setMantra] = useState("");
  const [visual, setVisual] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const goToNextPage = () => {
    if (mantra.trim() === "") {
      setError(true);
      return;
    }
    navigate("/poststress"); // Change it to post stress
  };

  return (
    <div className="activity1d-container">
      <div className="page-box">
        {/* Intro */}
        <div className="intro-image-wrapper">
          <div className="text-section">
            <h3 className="section-title">Weeds and the Weather</h3>
            <h4 className="instruction">
              Create a <span className="highlight">“micro-action mantra”</span> &
              visualize acting on it
            </h4>
            <p className="example">
              Example of micro-action mantra: <em>“I can water one corner today”</em>
            </p>
          </div>
          <div className="image-section">
            <img src={img1} alt="Right visual" />
          </div>
        </div>

        {/* Inputs */}
        <div className="input-grid">
          <div className="input-box left-bubble">
            {/* <label className="label">My mantra</label> */}
            <textarea
              value={mantra}
              onChange={(e) => {
                setMantra(e.target.value);
                if (error) setError(false);
              }}
              className={`response-box ${error && mantra.trim() === "" ? "error-border" : ""}`}
              placeholder="Write your mantra..."
            />
          </div>

          
        </div>

        {error && (
          <p className="error-message">
            Please fill the field before continuing.
          </p>
        )}

        {/* Footer */}
        <p className="footer-note">
          ℹ️ No textual data will be stored; you may express freely in whichever
          language you’re comfortable
        </p>
        <div className="button-container">
          <button className="next-button" onClick={goToNextPage}>
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}
