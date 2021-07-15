import React, { useEffect, useState } from "react";

import WorkerCard from "../../components/workerCard/Index";
import WorkersFilters from "../../components/WorkersFilters/Index"

import { getWorkers } from "../../services";

import "../../styles/workers/index.scss";

const Home = () => {
  const [workers, setWorkers] = useState(null);

  useEffect(() => {
    async function getAllWorkers() {
      const workers = await getWorkers();
      setWorkers(workers);
    }

    getAllWorkers();
  }, []);

  if (!workers) {
    return (
      <div className="fix-screen">
        <h1>loading</h1>
      </div>
    );
  }
  return (
    <div className="container fix-screen">
      <div className="row">
        <div className="col-12 col-lg-3">
          <WorkersFilters/>
        </div>
        <div className="col-12 col-lg-9">
         <div className="row">
	 {workers.map((worker, i) => (
            <WorkerCard key={i} worker={worker} />
          ))}
	 </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
