import React from "react";
import { useNotification } from "../context/NotificationContextProvider";

const NotificationTrigger = () => {
  const { addNotification } = useNotification();

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <button
        onClick={() => addNotification("This is a new notification!")}
        style={{ padding: "10px", fontSize: "16px" }}
      >
        Show Notification
      </button>
    </div>
  );
};

export default NotificationTrigger;
