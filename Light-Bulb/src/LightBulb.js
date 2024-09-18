import React, { useState } from "react";

export default function LightBulb() {
  // Styling
  const Container = {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const Buttons = {
    minWidth: "100px",
    marginTop: "20px",
    display: "flex",
    justifyContent: "space-between",
  };

  // Initial State
  const [switchAct, setSwitchAct] = useState(false);

  // Live functions
  const handleOn = () => {
    setSwitchAct(true); // Turns on the light
  };

  const handleOff = () => {
    setSwitchAct(false); // Turns off the light
  };

  return (
    <>
      <div className="" style={Container}>
        <div className="light-bulb">
          <i
            class="fa-solid fa-lightbulb"
            style={{ fontSize: "100px", color: switchAct ? "gold" : "black" }}
          ></i>
        </div>
        <div className="switch-buttons" style={Buttons}>
          <button onClick={() => handleOn()}>On</button>
          <button onClick={() => handleOff()}>Off</button>
        </div>
      </div>
    </>
  );
}
