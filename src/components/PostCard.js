import React from "react";
import "../css/post.css";

const PostCard = ({ title, description, imageUrl, link, buttonText }) => {
  return (
    <div className="col-md-4">
      <div className="item-card sr-card">
        <div className="card-image mb-3">
          <div
            className="img-wrap"
            style={{ backgroundImage: `url(${imageUrl})` }}
          ></div>
        </div>
        <div className="card-content">
          <div className="card-content-top">
            <h3 className="heading">{title}</h3>
            <div className="card-description">
              <p>{description}</p>
            </div>
          </div>
          <div>
            <a className="button" href={link}>
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
