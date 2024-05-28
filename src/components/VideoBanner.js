import React from "react";

const VideoBanner = ({ video, title, description }) => {
  return (
    <div className="video-banner text-white text-center">
      <div className="overlay z-1"></div>
      <div className="video-bg">
        <video autoPlay loop muted>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="content">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default VideoBanner;
