import React, { useState } from "react";
import VideoBanner from "../components/VideoBanner";
import { HOME_VIDEO } from "../utils/constants";
import lang from "../utils/langConstants";
import { useSelector } from "react-redux";
import RecentPost from "../components/RecentPost";
import ResCard from "../components/ResCard";
import useGetRestData from "../hooks/useGetRestData";
import Shimmer from "../components/Shimmer";

const Home = () => {
  const selectedLanguage = useSelector((store) => store.config.lang);
  const [sortBy, setSortBy] = useState(null);
  const resData = useGetRestData(sortBy);

  const handleSort = (sortType) => {
    setSortBy(sortType);
  };
  return (
    <div>
      <VideoBanner
        video={HOME_VIDEO}
        title={lang[selectedLanguage].home.bannerTitle}
        description={lang[selectedLanguage].home.bannerSubTitle}
      />
      <div className="dnd-section">
        <div className="container">
          <div className="sorting-buttons">
            <span>Sort By</span>
            <button onClick={() => handleSort("rating")}>Rating</button>
            <button onClick={() => handleSort("delivery")}>Deliver Time</button>
            <button onClick={() => handleSort("cost")}>Cost</button>
          </div>
          <div className="row">
            {resData.length === 0 ? (
              <div className="container">
                <div className="row">
                  {/* Shimmer loading placeholders */}
                  {[...Array(12)].map((_, index) => (
                    <Shimmer key={index} />
                  ))}
                </div>
              </div>
            ) : (
              <>
                {resData.map((res) => (
                  <ResCard key={res.info.id} data={res} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
      <RecentPost></RecentPost>
    </div>
  );
};

export default Home;
