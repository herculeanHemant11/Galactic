import React from "react";

const TwoCol = ({
  imageURL,
  title,
  description,
  buttonText,
  link,
  imageAlign = "right",
}) => {
  return (
    <section className="dnd-section two-col">
      <div className="container">
        <div
          className={`row align-center ${
            imageAlign === "left" ? "row-reverse" : ""
          }`}
        >
          <div className="col-md-6">
            <h2>{title}</h2>
            <p>{description}</p>
            <a href={link} className="button">
              {buttonText}
            </a>
          </div>
          <div className="col-md-6">
            <img src={imageURL} alt={title} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoCol;
