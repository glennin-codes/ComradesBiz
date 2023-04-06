import React, { useState } from "react";
import './MaintananceMessage.css'

function MaintenanceMessage() {
  const [position, setPosition] = useState(100); // initial position is 100 pixels from the right

  return (
    <div
      className="maintenance-message"
      style={{ right: `${position}px` }}
    >
     Our system is currently under maintenance to resolve some minor issues. We apologize for any inconvenience caused and appreciate your patience during this time.
    </div>
  );
}
export default MaintenanceMessage;