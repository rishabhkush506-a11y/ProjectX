import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormPage from "./pages/FormPage";
import Stress  from "./pages/Stress";
import PostStress  from "./pages/PostStress";
import { UserProvider } from "./pages/UserContext"; 
import DisplayPage from "./pages/Display";
import Questions from "./pages/Questions";
import PostQuestions from "./pages/PostQuestions";
import Situation from "./pages/Situation";

import Activity2Page from "./pages/Activity2Page";

import Activity1aPage from "./pages/Activity1/Activity1aPage";
import Activity1bPage from "./pages/Activity1/Activity1bPage";
import Activity1cPage from "./pages/Activity1/Activity1cPage";
import Activity1dPage from "./pages/Activity1/Activity1dPage";

import Activity2aPage from "./pages/Activity2/Activity2aPage";
import Activity2bPage from "./pages/Activity2/Activity2bPage";
import Activity2cPage from "./pages/Activity2/Activity2cPage";
import Activity2dPage from "./pages/Activity2/Activity2dPage";

import Activity3aPage from "./pages/Activity3/Activity3aPage";
import Activity3bPage from "./pages/Activity3/Activity3bPage";
import Activity3cPage from "./pages/Activity3/Activity3cPage";
import Activity3dPage from "./pages/Activity3/Activity3dPage";

import Activity4Page from "./pages/Activity4/Activity4Page";

import Activity5aPage from "./pages/Activity5/Activity5aPage";
import Activity5bPage from "./pages/Activity5/Activity5bPage";
import Activity5cPage from "./pages/Activity5/Activity5cPage";
import Activity5dPage from "./pages/Activity5/Activity5dPage";
import Feedback from "./pages/Feedback";
// import Situation from "./pages/Situation";


function GroupPage({ group }) {
  return (
    <div style={{ padding: "20px" }}>
      <h2>{group}</h2>
      <p>Welcome to {group} page!</p>
    </div>
  );
}

function App() {
  return (
    <UserProvider>
    <Router>
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/stress" element={<Stress />} />
        <Route path="/poststress" element={<PostStress />} />
        <Route path="/display" element={<DisplayPage />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/situation" element={<Situation />} />
        <Route path="/questionspost" element={<PostQuestions />} />
        {/* Group Activity Pages */}
        <Route path="/activity1a" element={<Activity1aPage />} />
        <Route path="/activity1b" element={<Activity1bPage />} />
        <Route path="/activity1c" element={<Activity1cPage />} />
        <Route path="/activity1d" element={<Activity1dPage />} />


        <Route path="/activity2a" element={<Activity2aPage />} />
        <Route path="/activity2b" element={<Activity2bPage />} />
        <Route path="/activity2c" element={<Activity2cPage />} />
        <Route path="/activity2d" element={<Activity2dPage />} />


        <Route path="/activity3a" element={<Activity3aPage />} />
        <Route path="/activity3b" element={<Activity3bPage />} />
        <Route path="/activity3c" element={<Activity3cPage />} />
        <Route path="/activity3d" element={<Activity3dPage />} />

        <Route path="/activity4" element={<Activity4Page />} />

        <Route path="/activity5a" element={<Activity5aPage />} />
        <Route path="/activity5b" element={<Activity5bPage />} />
        <Route path="/activity5c" element={<Activity5cPage />} />
        <Route path="/activity5d" element={<Activity5dPage />} />

        <Route path="/group2" element={<Activity2Page />} />

        <Route path="/feedback" element={<Feedback />} />

      </Routes>
    </Router>
    </UserProvider>
  );
}

export default App;
