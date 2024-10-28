// src/App.tsx
import React from "react";
import NotificationList from "./components/NotificationList";
import NotificationTrigger from "./components/NotificationTrigger";
import NotificationContextProvider from "./context/NotificationContextProvider";

const App: React.FC = () => {
  return (
    <NotificationContextProvider>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Notification Feature</h1>
        <NotificationTrigger />
        <NotificationList />
      </div>
    </NotificationContextProvider>
  );
};

export default App;
