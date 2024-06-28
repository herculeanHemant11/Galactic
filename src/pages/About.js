import React from "react";
import TwoCol from "../components/TwoCol";
import Banner from "../components/Banner";
import { images } from "../utils/constants";
import lang from "../utils/langConstants";
import features from "../utils/ourFeature";
import { useSelector } from "react-redux";
import RecentPost from "../components/RecentPost";
import FeatureCard from "../components/FeatureCard";
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
        title={lang[selectedLanguage].about.twoColTitle}
        description={lang[selectedLanguage].about.twoColSubTitle}
        buttonText={lang[selectedLanguage].about.twoColButton}
        link="#join-us"
        imageAlign="left"
      />
      <section className="dnd-section feature-cards-wrap">
        <div className="container">
          <div className="card-carousel row">
            {features[selectedLanguage].map((feature, index) => (
              <FeatureCard
                key={index}
                iconUrl={feature.iconUrl}
                title={feature.title}
                subTitle={feature.subtitle}
              />
            ))}
          </div>
        </div>
      </section>
      <RecentPost></RecentPost>
    </div>
  );
};

export default About;
