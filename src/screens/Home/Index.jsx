import React, { useEffect, useState } from "react";

import WorkerCard from "../../components/workerCard/Index";
import WorkersFilters from "../../components/WorkersFilters/Index";

import { getWorkers,getFilteredWorkers } from "../../services";

import "../../styles/workers/index.scss";

const Home = () => {
  const [workers, setWorkers] = useState(null);
  const [filters, setFilters] = useState('')

async function filterWorkers() {
  const res = await getFilteredWorkers(filters)
    setWorkers(res)
}

async function getAllWorkers() {
  const workers = await getWorkers();
  setWorkers(workers);
}
  useEffect(() => {
  
    getAllWorkers();
  }, []);

useEffect(() => {
 
if(filters.length > 1){
  return filterWorkers()
}
getAllWorkers()

},[filters])


  if (!workers) {
    return (
      <div className="fix-screen">
        <h1>loading</h1>
      </div>
    );
  }


  console.log(workers);
  return (
    <div className="container fix-screen">
      <div className="row">
        <div className="col-12 col-lg-3">
          <WorkersFilters setFilters={setFilters} filters={filters} reset={getWorkers}/>
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
