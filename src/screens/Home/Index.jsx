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
        <div className="row my-5">
          <WhySection />
        </div>
        <section className="row">
          <WorkerInfoSection />
        </section>
      </div>
      <Footer />
    </>
  );
}
