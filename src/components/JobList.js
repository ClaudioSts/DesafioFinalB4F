import React, { useEffect, useState } from "react";
import JobItem from "./JobItem";
import styles from "./JobList.module.css";
import CardItemWithModal from './applicationsList/cardItemWithModal';
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/material/IconButton";
import IconButton from "@mui/material/IconButton";
import ButtonGroup from '@mui/material/ButtonGroup';
import ShowButtons from './EditionButtons';



function JobList(props) {

  const [data, setData] = useState([{
    title: "", description: "", location: ""
  }])


  const { loggedUser, filter, isCompany } = props

  const list = "api/users"
  const jobsByCompany = "api/company"

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

  useEffect(() => {

    if (props.isCompany == false) {
      console.log('company is false')

      const fetchData = () => {

        fetch(list)
          .then((res) => res.json())
          .then((result) => {
            setData(result)
          })
          .catch((err) => console.log("error"));
      };
      fetchData()
    }
    if (props.isCompany == true) {
      console.log('company is true')

      const buttons = localStorage.getItem('companyId')

      const fetchData = () => {

        fetch(jobsByCompany, {
          method: "GET",
          headers: {
            "Authorization": localStorage.getItem("token")
          }
        })
          .then((res) => res.json())
          .then((result) => {
            setData(result)
          })
          .catch((err) => console.log("error"));
      };
      fetchData()
    }
  }, [props.isCompany]);






  // Mapping the dummy array, where you return a Job component, from each job element, with: title, desc, salary. Missing location, when it was uploaded.
  return (
    <div className={styles.listContainer}>
      <ul className={styles.jobsList}>
        <div>
          {data.filter(filterPredicate).map((job, index) => (
            <div>
              <div key={index} style={{ marginBottom: "1%" }}>
                <CardItemWithModal style={{ marginBottom: "1%" }}
                  key={index}
                  title={job.title}
                  description={job.description}
                  location={job.location}
                  loggedUser={loggedUser}
                  isCompany={isCompany}
                />
                {props.isCompany &&
                  <ShowButtons
                  />
                }
              </div>
            </div>
          ))}
        </div>
      </ul>
    </div>
  );
}

export default JobList;
