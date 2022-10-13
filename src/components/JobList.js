import React, { useEffect, useState } from "react";
import JobItem from "./JobItem";
import styles from "./JobList.module.css";
<<<<<<< HEAD
import CardItemWithModal from "./applicationsList/cardItemWithModal";
=======
import CardItemWithModal from './applicationsList/cardItemWithModal';
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/material/IconButton";
import IconButton from "@mui/material/IconButton";
import ButtonGroup from '@mui/material/ButtonGroup'


>>>>>>> 775db4baa99f5b7af47fa9583b15b8859ab6a045

function JobList(props) {
  const [data, setData] = useState([
    {
      title: "",
      description: "",
      location: "",
    },
  ]);

  const { loggedUser, filter, isCompany } = props;

<<<<<<< HEAD
  const list = "api/users";
=======
  const { loggedUser, filter, isCompany } = props

  const list = "api/users"
  const jobsByCompany = "api/company"
>>>>>>> 775db4baa99f5b7af47fa9583b15b8859ab6a045

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
        {data.filter(filterPredicate).map((job, index) => (
          <div key={index} style={{ marginBottom: "1%" }}>
            <CardItemWithModal style={{ marginBottom: "1%" }}
              key={index}
              title={job.title}
              description={job.description}
              location={job.location}
              loggedUser={loggedUser}
              isCompany={isCompany}

            />
            <ButtonGroup variant="outlined" aria-label="functions">
            <Button variant="outlined">
              Delete
            </Button>
            <Button variant="outlined">
              Edit
            </Button>
            </ButtonGroup>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default JobList;
