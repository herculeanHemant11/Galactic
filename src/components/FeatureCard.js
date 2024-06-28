import React from "react";

const FeatureCard = ({ title, subTitle, iconUrl }) => {
  return (
    <div className="col-lg-4 col-md-6" tabIndex="0">
      <div className="media" role="main">
        <div className="image-wrap has-grayscale">
          <div
            className="image-wrap-bg"
            style={{
              mask: `url(${iconUrl}) no-repeat center / contain`,
              WebkitMask: `url(${iconUrl}) no-repeat center / contain`,
            }}
          ></div>
          <img
            src={iconUrl}
            alt={title}
            loading="lazy"
            width="43"
            height="35"
          />
        </div>
        <div className="media-body">
          <h6 className="card-heading text-auto">{title}</h6>
          <div className="card-description text-auto">
            <p>{subTitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
