import React from "react";
import VideoBanner from "../components/VideoBanner";
import { HOME_VIDEO } from "../utils/constants";

const Home = () => {
  return (
    <div>
      <VideoBanner
        video={HOME_VIDEO}
        title="Galactic Tour"
        description="Welcome to My React App"
      />
    </div>
  );
};

export default Home;
