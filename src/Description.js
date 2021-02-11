import React from "react";

function Description({  description }) {
  return (
      <div className="character-labels">
        <h3 className="character-label">{description}</h3>
      </div>
  );
}

export default Description;
