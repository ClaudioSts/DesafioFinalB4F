import "./JobItem.css";

const JobItem = (props) => {
  // Properties of a job
  // TO DO: Probably better divs, for easier CSS
  return (
    <div className="job-container">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <div className="salary">Salário: {props.salary}€</div>
    </div>
  );
};

export default JobItem;
