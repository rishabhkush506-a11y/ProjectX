import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./UserContext";
import "./Feedback.css";

const FeedbackPage = () => {
  const [feedback, setFeedback] = useState("");
  const navigate = useNavigate();
  const { userData, setUserData } = useContext(UserContext);

  const handleSubmit = () => {
    if (!feedback.trim()) {
      alert("Please enter your feedback before proceeding.");
      return;
    }
    console.log("User Feedback:", feedback);

    setUserData((prev) => ({
      ...prev,
      feedback: feedback,
    }));

    navigate("/display"); // route navigation
  };

  // Storing value in user context
  


  return (
    <div className="container">
        <div className="form-box">
      <p className="intro-text">
        I appreciate you completing the activity. Whatever you’re going through,
        your feelings are important. I’m here with you...
      </p>

      <h1 className="thankyou-text">Thank you!</h1>

      <h2 className="feedback-heading">Share your feedback</h2>
      <p className="feedback-subtext">
        We would love to hear about your experience
      </p>

      <textarea
        className="feedback-box"
        rows="6"
        placeholder="Write your feedback here..."
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
      />

      <button className="next-btn" onClick={handleSubmit}>
        Next
      </button>
      </div>
    </div>
  );
};

export default FeedbackPage;
