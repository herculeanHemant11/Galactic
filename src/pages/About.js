import React from "react";
import TwoCol from "../components/TwoCol";
import Banner from "../components/Banner";
import { images } from "../utils/constants";
import lang from "../utils/langConstants";
import { useSelector } from "react-redux";
const About = () => {
  const selectedLanguage = useSelector((store) => store.config.lang);
  return (
    <div>
      <Banner
        bgImageURL={images.teamDiscuss}
        title={lang[selectedLanguage].about.bannerTitle}
        description={lang[selectedLanguage].about.bannerSubTitle}
        textAlign="center"
      />
      <TwoCol
        imageURL={images.teamDiscuss}
        title="Find the job you'd love"
        description="Hungry to make a difference? There’s a seat at our table!

Find out how we connect tech, passions, projects and people – explore international career opportunities at foodpanda."
        buttonText="Join us!"
        link="#join-us"
        imageAlign="left"
      />
    </div>
  );
};

export default About;
