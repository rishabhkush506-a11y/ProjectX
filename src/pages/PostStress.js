import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";
import "./PostStress.css";

function Stress() {
  const { userData ,  setUserData } = useContext(UserContext);
  const [value, setValue] = useState(5); // default midpoint
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSliderChange = (e) => {
    setValue(Number(e.target.value));
    setTouched(true);
    setError(false);
  };

  const handleSaveAndNext = () => {
    if (touched) {
      setUserData((prev) => ({ ...prev, postSliderValue: value}));
      console.log("Updated userData:", { ...userData, postSliderValue: value });
      
      // setUserData((prev) => ({ ...prev, sliderValue: value }));
      navigate("/questionspost");
    } else {
      setError(true);
    }
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <div className="form-box">
        <h5 className="intro-text">
          I appreciate you opening up about this. Whatever you're going through, 
          your feelings are important. I'm here with you.
        </h5>
        <h2 className="title">After Completing the Activity</h2>
        <h1 className="question">How much stress is it causing you?</h1>

        <div className="slider-block">
          <label className="slider-label">Select a number (1–10):</label>
          <input
            type="range"
            min="1"
            max="10"
            step="1"
            name="Post Stress Value"
            value={value}
            onChange={handleSliderChange}
            className={`slider ${error ? "error-border" : ""}`}
          />
          <p className="slider-value">Current Value: {value}</p>
          {error && (
            <p className="error-message">
              Please adjust the slider to reflect your stress level before continuing.
            </p>
          )}
        </div>

        <div className="button-group">
          <button onClick={handleBack} className="back-btn">Back</button>
          <button onClick={handleSaveAndNext} className="next-btn">
            Save & Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Stress;
