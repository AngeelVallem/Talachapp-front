import React from "react";

import VideoSection from "./VideoSection";
import WhySection from "./WhySection";
import WorkerInfoSection from "./workerInfo/WorkerInfoSection";

export default function LandingPage(props) {
  return (
      <div className="container-fluid">
        <div className="row">
          <VideoSection />
        </div>
        <div className="row my-5">
          <WhySection />
        </div>
        <section className="row">
          <WorkerInfoSection />
        </section>
      </div>
  );
}
