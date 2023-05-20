import React from "react";
import "./Socials.css";

const Title = ({ text }) => {
  return (
    <div className="title">
      <h2>{text || "Default Title"}</h2>
      <div className="title-underline"></div>
    </div>
  );
};

export default Title;
