import styles from "./JobItem.module.css";

const JobItem = (props) => {
  // Properties of a job
  // TO DO: Probably better divs, for easier CSS
  return (
    <div className={styles.jobContainer}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <p>Location: {props.location}</p>
    </div>
  );
};

export default JobItem;
