import React from "react";
import "../../styles/Home.css";

const HomeBanner = () => {
  return (
    <div className="HomeBanner">
      <div className="HomeBannerContent">
        <img src="./bannerImage.png" alt="" />
        <h1>Pocket Notes</h1>
        <h3>
          Send and receive messages without keeping your phone online. Use
          Pocket Notes on up to 4 linked devices and 1 mobile phone
        </h3>
      </div>
      <div className="encrypted">
        <span className="material-symbols-outlined">lock</span>
        <p>end-to-end encrypted</p>
      </div>
    </div>
  );
};

export default HomeBanner;
