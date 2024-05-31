import React from "react";
import VideoBanner from "../components/VideoBanner";
import { HOME_VIDEO } from "../utils/constants";
import lang from "../utils/langConstants";
import postDetail, { recentPostTopContent } from "../utils/postDetail";
import { useSelector } from "react-redux";
import PostCard from "../components/PostCard";

const Home = () => {
  const selectedLanguage = useSelector((store) => store.config.lang);
  return (
    <div>
      <VideoBanner
        video={HOME_VIDEO}
        title={lang[selectedLanguage].home.bannerTitle}
        description={lang[selectedLanguage].home.bannerSubTitle}
      />
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
    </div>
  );
};

export default Home;
