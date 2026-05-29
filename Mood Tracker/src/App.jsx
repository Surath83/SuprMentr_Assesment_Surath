// App.jsx

import { useState } from "react";
import "./App.css";

function App() {
  const [mood, setMood] = useState("😊 Happy");

  const moods = {
    "😊 Happy": "#ffe066",
    "😢 Sad": "#74c0fc",
    "😡 Angry": "#ff6b6b",
    "😴 Sleepy": "#b197fc",
    "😍 Excited": "#ff87b6",
  };

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: moods[mood],
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        transition: "0.3s ease",
        fontFamily: "Arial",
      }}
    >
      <h1>Mood Tracker</h1>

      <h2>Your Mood: {mood}</h2>

      <div style={{ marginTop: "20px" }}>
        {Object.keys(moods).map((item, index) => (
          <button
            key={index}
            onClick={() => setMood(item)}
            style={{
              margin: "10px",
              padding: "10px 20px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;