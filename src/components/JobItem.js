import styles from "./JobItem.module.css";

const JobItem = (props) => {
  // Properties of a job
  // TO DO: Probably better divs, for easier CSS
  return (
    <div className={styles.jobContainer} key={props.index}>
      <h6>Title: {props.title}</h6>
      <p>Description: {props.description}</p>
      <br />
      <p>Location: {props.location}</p>
      <br />
    </div>
  );
};

export default JobItem;
