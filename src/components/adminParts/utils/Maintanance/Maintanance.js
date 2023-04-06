import React, { useState } from "react";
import "./MaintananceMessage.css";

const MaintenanceMessage = () => {
  const [position, setPosition] = useState("50%"); // initial position is centered

  return (
    <div className="maintenance-message">
      <span className="text" >
        Our system is currently under maintenance to resolve some minor issues. We apologize for any inconvenience caused and appreciate your patience during this time.
      </span>
    </div>
  );
};

export default MaintenanceMessage;