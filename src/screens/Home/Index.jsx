import React from "react";

import Navbar from "../../components/navbar/Index";
import VideoSection from "./VideoSection";
import WhySection from "./WhySection";
import WorkerInfoSection from "./workerInfo/WorkerInfoSection";
import Footer from "../../components/Footer/index"

export default function Home(props) {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <VideoSection />
        </div>
        <div className="row">
          <WhySection />
        </div>
        <div className="row">
          <WorkerInfoSection />
        </div>
      </div>
      <Footer />
    </>
  );
}
