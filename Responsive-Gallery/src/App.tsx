import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  // String Array For Initial State
  const [imgUrls, setImgUrls] = useState<string[]>([]);

  // Function to Add Image URL
  const addUrl = (newUrl: string) => {
    setImgUrls((curUrls) => {
      if (curUrls.includes(newUrl)) {
        return curUrls.filter((curUrl) => curUrl !== newUrl);
      } else {
        return [...curUrls, newUrl];
      }
    });
  };

  // Check if the url exists in the array or not
  const checkUrl = (url: string) => imgUrls.includes(url);

  // Styling function to change the color and background-color of the buttons
  const selectionAppearance = (url: string) => ({
    backgroundColor: checkUrl(url) ? "#604CC3" : "#8FD14F",
    color: checkUrl(url) ? "#fff" : "#fff",
  });

  // To arrive another page
  const navigate = useNavigate();

  // State property to pass data to new route
  const finish = () => {
    navigate("/gallery", { state: { imgUrls } });
  };

  return (
    // start main villa
    <div
      className="main-villa"
      style={{ backgroundImage: `url('./imgs/bg.jpg')` }}
    >
      <h1 className="title">CHOOSE IMAGES YOU TASTE</h1>
      {/* add image button list */}
      <div className="add-img-btn-list">
        <button
          className="add-img-btn"
          style={selectionAppearance("anime.jpg")}
          onClick={() => addUrl("anime.jpg")}
        >
          anime
        </button>
        <button
          className="add-img-btn"
          style={selectionAppearance("barcs.jpg")}
          onClick={() => addUrl("barcs.jpg")}
        >
          barcs
        </button>
        <button
          className="add-img-btn"
          style={selectionAppearance("barton.jpg")}
          onClick={() => addUrl("barton.jpg")}
        >
          barton
        </button>
        <button
          className="add-img-btn"
          style={selectionAppearance("deyoung.jpg")}
          onClick={() => addUrl("deyoung.jpg")}
        >
          deyoung
        </button>
        <button
          className="add-img-btn"
          style={selectionAppearance("ben.jpg")}
          onClick={() => addUrl("ben.jpg")}
        >
          ben
        </button>
        <button
          className="add-img-btn"
          style={selectionAppearance("content.jpg")}
          onClick={() => addUrl("content.jpg")}
        >
          content
        </button>
        <button
          className="add-img-btn"
          style={selectionAppearance("didssph.jpg")}
          onClick={() => addUrl("didssph.jpg")}
        >
          didssph
        </button>
        <button
          className="add-img-btn"
          style={selectionAppearance("florian.jpg")}
          onClick={() => addUrl("florian.jpg")}
        >
          florian
        </button>
        <button
          className="add-img-btn"
          style={selectionAppearance("zhang.jpg")}
          onClick={() => addUrl("zhang.jpg")}
        >
          zhang
        </button>
        <button
          className="add-img-btn"
          style={selectionAppearance("gidon.jpg")}
          onClick={() => addUrl("gidon.jpg")}
        >
          gidon
        </button>
        <button
          className="add-img-btn"
          style={selectionAppearance("jack.jpg")}
          onClick={() => addUrl("jack.jpg")}
        >
          jack
        </button>
        <button
          className="add-img-btn"
          style={selectionAppearance("jayden.jpg")}
          onClick={() => addUrl("jayden.jpg")}
        >
          jayden
        </button>
        <button
          className="add-img-btn"
          style={selectionAppearance("ludde.jpg")}
          onClick={() => addUrl("ludde.jpg")}
        >
          ludde
        </button>
        <button
          className="add-img-btn"
          style={selectionAppearance("marcin.jpg")}
          onClick={() => addUrl("marcin.jpg")}
        >
          marcin
        </button>
        <button
          className="add-img-btn"
          style={selectionAppearance("rocket.jpg")}
          onClick={() => addUrl("rocket.jpg")}
        >
          rocket
        </button>
        <button
          className="add-img-btn"
          style={selectionAppearance("redhead.jpg")}
          onClick={() => addUrl("redhead.jpg")}
        >
          redhead
        </button>
        <button
          className="add-img-btn"
          style={selectionAppearance("sardar.jpg")}
          onClick={() => addUrl("sardar.jpg")}
        >
          sardar
        </button>
        <button
          className="add-img-btn"
          style={selectionAppearance("timothy.jpg")}
          onClick={() => addUrl("timothy.jpg")}
        >
          timothy
        </button>
        <button
          className="add-img-btn"
          style={selectionAppearance("tobias.jpg")}
          onClick={() => addUrl("tobias.jpg")}
        >
          tobias
        </button>
        <button
          className="add-img-btn"
          style={selectionAppearance("vatra.jpg")}
          onClick={() => addUrl("vatra.jpg")}
        >
          vatra
        </button>
      </div>

      {/* ready button */}
      <div>
        <button className="finish-btn" onClick={finish}>
          FINISH
        </button>
      </div>
    </div>
    // End main villa
  );
}

export default App;
