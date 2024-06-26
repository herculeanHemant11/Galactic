import React from "react";

const Banner = ({ bgImageURL, title, description, textAlign }) => {
  const backgroundImage = { backgroundImage: `url(${bgImageURL})` };

  return (
    <div className="hero-banner" style={backgroundImage}>
      <div className="hero-overlay"></div>
      <div className={`container text-${textAlign}`}>
        <div className="row">
          <div className="col-md-12">
            <div className="hero-content">
              <h1 className="heading">{title}</h1>
              <div className="description lead">{description}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
