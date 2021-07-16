import React from "react";

import coverVideo from "../../assets/Home/cover.mp4";



import "../../styles/Home/video-section.scss";

export default function VideoSection({fixed}) {


if(fixed) {
  return(
    <div className="fixed p-0">
    <section className="video-section">
      <div className="video-container">
        <video autoPlay muted loop className="w-100">
          <source src={coverVideo} type="video/mp4" />
          Your browser does not support HTML video.
        </video>
      </div>
    </section>
    </div>
    )    
}
  return (
    <div className="col p-0">
    <section className="video-section">
      <div className="video-container">
        <video autoPlay muted loop className="w-100">
          <source src={coverVideo} type="video/mp4" />
          Your browser does not support HTML video.
        </video>
      </div>
    </section>
    </div>
  );
}
