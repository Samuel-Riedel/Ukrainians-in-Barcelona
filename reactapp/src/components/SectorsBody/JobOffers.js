import React, { useState, useEffect } from "react";
import ListBody from "./ListBody";
import SearchFile from "./SearchFormsSectors/SearchFormJobOffers";
import "./Sectors.css";

function Jobs() {
  const [jobs, setJobs] = useState([]);

  function fetchJobs() {
    fetch("http://localhost:5000/jobs_offerrs")
      .then((response) => response.json())
      .then((data) => {
        setJobs(data);
        console.log(data);
      });
  }
  useEffect(() => {
    fetchJobs();
  }, []);
  return (
    <div className="sectors_body">
      <div>
        <ListBody items={jobs} />
      </div>
      <div>
        <SearchFile />
      </div>
    </div>
  );
}

export default Jobs;