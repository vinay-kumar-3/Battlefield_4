import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import Stats from "../components/Stats";

export default function ServerInfo() {
  const [serverInfo, setServerInfo] = useState({ settings: [], advanced: [], rules: [] });

  useEffect(() => {
    fetch("https://battlefield4-backend-7blnib22r-vinay-kumars-projects-c35f172e.vercel.app/api/server-info")
      .then((response) => response.json())
      .then((data) => setServerInfo(data));
  }, []);


  const renderSection = (title, data) => {
    return (
      <div className="subcontainer">
        <div className="row1">{title.toUpperCase()}</div>
        <div className="row2">
          {data.map((entry) => (
            <Button key={entry.id} first={entry.first} sec={entry.sec} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="Server">
      <Stats />
      <div className="container">
        {renderSection("SETTINGS", serverInfo.settings)}
        {renderSection("ADVANCED", serverInfo.advanced)}
        {renderSection("RULES", serverInfo.rules)}
      </div>
    </div>
  );
}
