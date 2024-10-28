import React from "react";
import { useNotification } from "../context/NotificationContextProvider";

const NotificationList = () => {
  const { notificationList, removeNotification, deleteAllNotifications } =
    useNotification();

  return (
    <div
      style={{
        position: "fixed",
        top: 20,
        right: 20,
        width: "275px",
        zIndex: 1000,
      }}
    >
      {notificationList.map((notification) => (
        <div
          key={notification.id}
          style={{
            width: "250px",
            backgroundColor: "#333",
            color: "#fff",
            padding: "10px",
            margin: "10px 0",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {notification.message}
          <button
            onClick={() => {
              removeNotification(notification.id);
            }}
            style={{
              padding: "8px 12px",
              backgroundColor: "#d9534f",
              color: "#fff",
              border: "none",
              borderRadius: "3px",
              cursor: "pointer",
            }}
          >
            Remove
          </button>
        </div>
      ))}
      {notificationList.length > 0 && (
        <button
          onClick={deleteAllNotifications}
          style={{
            marginTop: "10px",
            padding: "8px 12px",
            backgroundColor: "#d9534f",
            color: "#fff",
            border: "none",
            borderRadius: "3px",
            cursor: "pointer",
          }}
        >
          Delete All
        </button>
      )}
    </div>
  );
};

export default NotificationList;
