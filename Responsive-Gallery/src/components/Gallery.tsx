import React from "react";
import { useLocation } from "react-router-dom";
import "./Gallery.css";

function Gallery() {
  // useLocation hook
  const location = useLocation();

  // Destructuring state property from location
  const { imgUrls } = location.state as { imgUrls: string[] };

  return (
    // start image gallery
    <div className="image-gallery">
      {imgUrls.map((url, index) => (
        <div key={index} className="img-item">
          <img src={`./imgs/${url}`} alt="img" />
        </div>
      ))}
    </div>
    // end image gallery
  );
}

export default Gallery;
