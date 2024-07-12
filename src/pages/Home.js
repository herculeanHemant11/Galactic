import React, { useState } from "react";
import { useSelector } from "react-redux";
import VideoBanner from "../components/VideoBanner";
import RecentPost from "../components/RecentPost";
import ResCard from "../components/ResCard";
import useGetRestData from "../hooks/useGetRestData";
import Shimmer from "../components/Shimmer";
import FilterRestaurent from "../components/FilterRestaurent";
import { HOME_VIDEO } from "../utils/constants";
import lang from "../utils/langConstants";

const Home = () => {
  const selectedLanguage = useSelector((store) => store.config.lang);
  const [sortBy, setSortBy] = useState(null);
  const { resData, loading, maxCost } = useGetRestData(sortBy);
  const [priceValue, setPriceValue] = useState(maxCost);

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
            <FilterRestaurent
              maxCost={maxCost}
              setSortBy={setSortBy}
              priceValue={priceValue}
              setPriceValue={setPriceValue}
            />
            <div className="col-lg-8">
              <div className="row">
                {loading
                  ? [...Array(12)].map((_, index) => <Shimmer key={index} />)
                  : resData.map((res) => (
                      <ResCard key={res.info.id} data={res} />
                    ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <RecentPost />
    </div>
  );
};

export default Home;
