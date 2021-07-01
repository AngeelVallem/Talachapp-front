import React from "react";

import coverVideo from "../../assets/Home/cover-video-real.mp4";
import Image from "../../components/Image";
// import logoName from "../../assets/Home/logo-name-white.png"

// import Image from "../../components/Image"

import "../../styles/Home/video-section.scss";

export default function VideoSection() {
  return (
    <section className="video-section">
      <div className="video-container">
        <video autoPlay muted loop className="w-100">
          <source src={coverVideo} type="video/mp4" />
          Your browser does not support HTML video.
        </video>
      </div>
    </section>
  );
}
