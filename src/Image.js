import React from "react";

function Image({ image, name }) {
  return (
    <div className="character-image-container">
      {/* <img src={image.medium} alt={name} className="character-image" /> */}

      
      {/* This image is hardcoded just because the image of the current show is null */}
      <img src={"./images/girls.jpg"} alt={name} className="character-image" />
    </div>
  );
}
export default Image;
