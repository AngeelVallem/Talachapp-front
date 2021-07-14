import React, { useEffect, useState } from "react";

import WorkerCard from "../../components/workerCard/Index";

import { getAll } from "../../services";

import "../../styles/workers/index.scss";

const Home = () => {
  const [workers, setWorkers] = useState(null);

  useEffect(() => {
    async function getWorkers() {
      const workers = await getAll();
      setWorkers(workers);
    }

    getWorkers();
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
          <h1 className="text-center">FILTROS</h1>
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
