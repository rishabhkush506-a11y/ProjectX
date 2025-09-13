import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import emailjs from "emailjs-com";

function Display() {
  const { userData } = useContext(UserContext);

  // Email details
  const subject = encodeURIComponent("Data from User");
  const body = encodeURIComponent(
    `Participant ID: ${userData?.participantId || "Not provided"}
Group: ${userData?.group || "Not provided"}

--- Pre Responses ---
Q1: ${userData?.answers1?.q1 || "Not answered"}
Q2: ${userData?.answers1?.q2 || "Not answered"}
Q3: ${userData?.answers1?.q3 || "Not answered"}
Stress Value: ${userData?.sliderValue || "Not answered"}
--- Post Responses ---
Q1: ${userData?.answers2?.q4 || "Not answered"}
Q2: ${userData?.answers2?.q5 || "Not answered"}
Q3: ${userData?.answers2?.q6 || "Not answered"}
Stress Value: ${userData?.postSliderValue || "Not answered"}
`
  );

  // 
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_behavior",
        "template_behavior",
        body,
        "Z-Q3wJCbOdnPHl5ZT"
      )
      .then(
        (result) => {
          console.log("✅ Email sent:", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.error("❌ Email failed:", error.text);
          alert("Failed to send message. Try again.");
        }
      );
  };

  

  return (
    <div>
      <h1>Summary of Your Responses</h1>
      <p><b>Participant ID:</b> {userData.participantId}</p>
      <p><b>Group:</b> {userData.group}</p>

      <br></br>

      <h3 className="display-subtitle">Pre Activity Responses</h3>
      <div className="display-box">
        <p><strong>Pre Activity Q1:</strong> {userData?.answers1?.q1 || "Not answered"}</p>
        <p><strong>Pre Activity Q2:</strong> {userData?.answers1?.q2 || "Not answered"}</p>
        <p><strong>Pre Activity Q3:</strong> {userData?.answers1?.q3 || "Not answered"}</p>
      </div>
    
      <div className="display-box">
        <p><strong>Pre Activity Stress Value:</strong> {userData?.sliderValue || "Not answered"}</p>
      </div>

      <br></br>

      <h3 className="display-subtitle">Post Activity Responses</h3>
      <div className="display-box">
        <p><strong>Post Activity Q1:</strong> {userData?.answers2?.q4 || "Not answered"}</p>
        <p><strong>Post Activity Q2:</strong> {userData?.answers2?.q5 || "Not answered"}</p>
        <p><strong>Post Activity Q3:</strong> {userData?.answers2?.q6 || "Not answered"}</p>
      </div>

      <div className="display-box">
        <p><strong>Post Activity Stress Value:</strong> {userData?.postSliderValue || "Not answered"}</p>
      </div>

      <br></br>

      <div className="button-container" style={{ marginLeft: "100px" }}>
        {/* Send Mail Button */}
        <button onClick={() => {sendEmail}}>
          Sumbit
        </button>
      </div>
    </div>
  );
}

export default Display;
