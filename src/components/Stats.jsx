import "./Stats.css";
import React, { useEffect, useState } from "react";

export default function Stats() {
  const [statInfo, setStatInfo] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/stat-info")
      .then((response) => response.json())
      .then((data) => setStatInfo(data.data)); // Assuming `data` contains the "data" array
  }, []);

  return (
    <div className="stats">
      {statInfo.map((stat, index) => (
        <div key={index} className="stat">
          <div className="stat-title">{stat.title.toUpperCase()}</div>
          <div className="stat-value">
            {stat.value}
            {stat.title === "players" ? "/64" : stat.title === "ping" ? "ms" : stat.title === "tickrate" ? "Hz" : ""}
          </div>
        </div>
      ))}
    </div>
  );
}
