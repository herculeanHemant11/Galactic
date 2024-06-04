import React from "react";
import postDetail, { recentPostTopContent } from "../utils/postDetail";
import PostCard from "../components/PostCard";
import { useSelector } from "react-redux";

const RecentPost = () => {
  const selectedLanguage = useSelector((store) => store.config.lang);
  return (
    <div className="post-section">
      <div className="container">
        <div className="text-center">
          <div className="top-content">
            <h2>{recentPostTopContent[selectedLanguage].title}</h2>
            <p className="lead">
              {recentPostTopContent[selectedLanguage].subTitle}
            </p>
          </div>
        </div>
        <div className="row">
          {postDetail[selectedLanguage].map((post, index) => {
            return (
              <PostCard
                key={index}
                title={post.title}
                description={post.description}
                imageUrl={post.imageUrl}
                link={post.link}
                buttonText={post.buttonText}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RecentPost;
