import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner"
import WorkerCard from "../../components/workerCard/Index";
import WorkersFilters from "../../components/WorkersFilters/Index";

import { getWorkers,getFilteredWorkers } from "../../services";
import {colors} from "../../globals/index"
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
      <div className="fix-screen container d-flex justify-content-center align-items-center">
      <Loader
        type="Puff"
        color={colors.orange}
        height={200}
        width={200}
      />
      </div>
    );
  }

  return (
    <div className="container fix-screen">
      <div className="row">
        <div className="col-12 col-lg-3">
          <WorkersFilters setFilters={setFilters} filters={filters} reset={getWorkers}/>
        </div>
        <div className="col-12 col-lg-9">
          <div className="row pp">
            { workers.map((worker, i) => (
              <WorkerCard key={i} worker={worker} />
            ))}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
