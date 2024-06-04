import React from "react";
import TwoCol from "../components/TwoCol";
import { images } from "../utils/constants";
const About = () => {
  return (
    <div>
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
