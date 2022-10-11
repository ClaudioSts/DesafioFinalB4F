import React, { useEffect, useState } from "react";
import JobItem from "./JobItem";
import styles from "./JobList.module.css";

function JobList(props) {

  const [data, setData] = useState([{
    title: "", description: "", location: ""
  }])


  const list = "api/users"

  const fetchData = () => {
    console.log("FETCHING")
    fetch(list)
      .then((res) => res.json())
      .then((result) => {
        console.log(result)
        setData(result)
      })
      .catch((err) => console.log("error"));
  };

  useEffect(() => {
    console.log("YES")
    fetchData();
  }, []);


  // Mapping the dummy array, where you return a Job component, from each job element, with: title, desc, salary. Missing location, when it was uploaded.
  return (
    <div className={styles.listContainer}>
      <ul className={styles.jobsList}>
        {data.map((job, index) => (
          <JobItem
            key={index}
            title={job.title}
            description={job.description}
            location={job.location}
          />
        ))}
      </ul>
    </div>
  );
}

export default JobList;
