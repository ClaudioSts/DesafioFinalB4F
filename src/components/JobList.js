import React, { useEffect, useState } from "react";
import JobItem from "./JobItem";
import styles from "./JobList.module.css";
import CardItemWithModal from './applicationsList/cardItemWithModal';

function JobList(props) {

  const [data, setData] = useState([{
    title: "", description: "", location: ""
  }])

  const {loggedUser, filter} = props

  const list = "api/users"

  const filterPredicate = (el) => {
    if (filter != "") {
        let filterUppercase = filter.toUpperCase();
        return el.title.toUpperCase().includes(filterUppercase) || 
            el.description.toUpperCase().includes(filterUppercase) || 
            el.location.toUpperCase().includes(filterUppercase);
    } else {
        return true;
    }
}

  const fetchData = () => {
    console.log("FETCHING")
    fetch(list)
      .then((res) => res.json())
      .then((result) => {
        console.log(result)
        setData(result.filter(filterPredicate))
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
          <div key={index} style={{marginBottom: "1%"}}>
              <CardItemWithModal style={{marginBottom: "1%"}}
                  key={index}
                  title={job.title}
                  description={job.description}
                  location={job.location}
                  loggedUser={loggedUser} />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default JobList;
