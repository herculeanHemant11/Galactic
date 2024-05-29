import React from "react";
import VideoBanner from "../components/VideoBanner";
import { HOME_VIDEO } from "../utils/constants";
import lang from "../utils/langConstants";
import { useSelector } from "react-redux";

const Home = () => {
  const selectedLanguage = useSelector((store) => store.config.lang);
  return (
    <div>
      <VideoBanner
        video={HOME_VIDEO}
        title={lang[selectedLanguage].home.bannerTitle}
        description={lang[selectedLanguage].home.bannerSubTitle}
      />
    </div>
  );
};

export default Home;
