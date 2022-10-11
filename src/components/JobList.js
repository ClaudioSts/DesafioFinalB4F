import React from "react";
import JobItem from "./JobItem";
import "./JobList.css";

function JobList(props) {

  const list = "api/users"

  fetch(list, {
    method: "GET"
  }).then( )
}


// Mapping the dummy array, where you return a Job component, from each job element, with: title, desc, salary. Missing location, when it was uploaded.
return (
  <div className="list-container">
    <ul className="jobs-list">
      {props.jobs.map((job) => (
        <JobItem
          title={job.title}
          description={job.description}
          salary={job.salary}
        />
      ))}
    </ul>
  </div>
);
}

export default JobList;
