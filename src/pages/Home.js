import React, { useEffect, useState } from "react";
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
  const { resData, loading } = useGetRestData(sortBy);

  const handleSort = (sortType) => {
    setSortBy(sortType);
  };
  useEffect(() => {
    const priceRange = document.getElementById("price-range");
    priceRange.oninput = function () {
      var value = ((this.value - this.min) / (this.max - this.min)) * 100;
      this.style.background =
        "linear-gradient(to right, #82CFD0 0%, #82CFD0 " +
        value +
        "%, #fff " +
        value +
        "%, white 100%)";
    };
  }, []);
  return (
    <div>
      <VideoBanner
        video={HOME_VIDEO}
        title={lang[selectedLanguage].home.bannerTitle}
        description={lang[selectedLanguage].home.bannerSubTitle}
      />
      <div className="dnd-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 filter-col">
              <span className="filter-title">Sort By</span>
              <div className="sorting-buttons">
                <button onClick={() => handleSort("rating")}>Rating</button>
                <button onClick={() => handleSort("delivery")}>
                  Deliver Time
                </button>
                <button onClick={() => handleSort("cost")}>Cost</button>
              </div>
              <span className="filter-title">Filter</span>
              <div className="price-range">
                <div className="filter-title">Price</div>
                <input
                  id="price-range"
                  type="range"
                  min="100"
                  max="500"
                ></input>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="row">
                {loading ? (
                  <>
                    {/* Shimmer loading placeholders */}
                    {[...Array(12)].map((_, index) => (
                      <Shimmer key={index} />
                    ))}
                  </>
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
        </div>
      </div>
      <RecentPost></RecentPost>
    </div>
  );
};

export default Home;
