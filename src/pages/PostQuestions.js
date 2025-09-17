import React, { useState, useContext } from "react";
import { UserContext } from "./UserContext";
import { useNavigate } from "react-router-dom";
import "./Questions.css"; // import css

function PostQuestions() {
  const { userData, setUserData } = useContext(UserContext);

  const [form, setForm] = useState({
    q4: "",
    q5: "",
    q6: "",
  });

  const navigate = useNavigate();

  // handle change for radio inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveAndNext = () => {

    const { q4, q5, q6 } = form;
    if (!q4 || !q5 || !q6) {
      alert("Please answer all questions before proceeding.");
      return;
    }


    setUserData((prev) => ({ ...prev, answers2: form }));
    console.log("Updated userData:", { ...userData, answers2: form });
    navigate("/feedback");
        
  };

  const handleBack = () => {
    navigate("/stress");
  };
  

  return (
    <div className="container">
      <div className="form-box">
        <h5 className="intro-text">
          I appreciate you completing the activity. Whatever you’re going through,
          your feelings are important. I'm here with you...
        </h5>
        <h2 className="title">After completing the activity</h2>

        {/* Question 1 */}
        <div className="question-block">
          <p className="question">
            1. How well do you understand what's happening inside you?
          </p>
          {[
            "I feel numb/disconnected",
            "I have a vague distress but can't identify my feelings",
            "I know I am stressed but struggle to pinpoint",
            "I can identify some of my emotions but not all",
            "I have a clear understanding of my emotions",
            "I am highly attuned to my feelings",
          ].map((opt, i) => (
            <label key={i} className="option">
              <input
                type="radio"
                name="q4"
                value={opt}
                checked={form.q4 === opt}
                onChange={handleChange}
              />
              {opt}
            </label>
          ))}
        </div>

        {/* Question 2 */}
        <div className="question-block">
          <p className="question">
            2. How well do you understand the external factors of the situation?
          </p>
          {[
            "I have no idea what's going on",
            "I have a limited view",
            "I see some external factors but missing key details",
            "I have a good grasp of the facts but might miss some nuances",
            "I have clear understanding of the situation & other's perspective",
            "I am acutely aware of the context, relevant facts and perspectives of everyone",
          ].map((opt, i) => (
            <label key={i} className="option">
              <input
                type="radio"
                name="q5"
                value={opt}
                checked={form.q5 === opt}
                onChange={handleChange}
              />
              {opt}
            </label>
          ))}
        </div>

        {/* Question 3 */}
        <div className="question-block">
          <p className="question">
            3. How much do you believe you can influence the situation through
            your own actions and mindset?
          </p>
          {[
            "It is completely out of my control & there's nothing I can do",
            "I feel mostly helpless as what I do probably won't matter much",
            "I have small amount of influence but outside factors will likely decide what happens",
            "I believe my choices & efforts can have some effort",
            "I feel confident that my actions will have a big impact",
            "I feel that my actions and attitude will determine the outcome",
          ].map((opt, i) => (
            <label key={i} className="option">
              <input
                type="radio"
                name="q6"
                value={opt}
                checked={form.q6 === opt}
                onChange={handleChange}
              />
              {opt}
            </label>
          ))}
        </div>

        {/* Buttons */}
        <div className="button-group">
          {/* <button onClick={handleBack} className="back-btn">
            Back
          </button> */}
          <button onClick={handleSaveAndNext} className="next-btn">
            Save & Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostQuestions;
