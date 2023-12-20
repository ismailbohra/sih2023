import React from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
function App() {
  const navigate = useNavigate();
  return (
    <div className="parentContain">
      <div className="MainContain" style={{ textAlign: "center" }}>
        <h1>
          <span className="color_dash">W</span>elcome
        </h1>
        <div className="desc_content">
          Embark on a transformative journey of self-discovery with our
          comprehensive test, offering in-depth analysis and personalized
          insights. Uncover the intricate layers of your mind, revealing unique
          cognitive patterns that shape your intellectual landscape.
          <div>
            <p></p>
          </div>
          "Take the Test" invites you to open the door to self-awareness,
          guiding you through a curated assessment to illuminate strengths and
          areas for development. Dive into nuanced exploration, gaining profound
          insights beyond the surface. Start the transformative experience now,
          choosing to "Take Test," "Start Test," or "Begin Test."
          <div>
            <p></p>
          </div>{" "}
          This assessment empowers you with a personalized roadmap for growth,
          fostering a deeper understanding of your cognitive capabilities. Seize
          the opportunity to unlock self-realization in just a few clicks.
        </div>
        <button
          className="Testbtn"
          onClick={() => navigate("../test")}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            borderRadius: "7px",
            cursor: "pointer",
          }}
        >
          Take Test
        </button>
      </div>
    </div>
  );
}

export default App;
