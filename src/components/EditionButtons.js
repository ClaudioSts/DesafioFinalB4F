import Button from "@mui/material/Button";
import ButtonGroup from '@mui/material/ButtonGroup';
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { ObjectID } from "bson";

export default function ShowButtons(props) {
        const { job } = props
        
        const deleteJob = async () => {
          if(confirm(`Are you sure you want to delete the job: '${job.title}'?`) == true) {
            const answer = await fetch("api/company", {
              method: "DELETE",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                _id: job._id
              }),
            });

            if (answer.status === 400) {
              const json = await answer.json();
              let errorMessage = json.message + "\n";
              let errors = json.errors;
              for (const [key, value] of Object.entries(errors)) {
                errorMessage += `\n${value}`;
              }
              alert(errorMessage);
            }
        
            if (answer.status === 200) {
              alert(`Job '${job.title}' deleted successfully!`);
              window.location = "/";
            }
          }
        }

        const editJob = () => {
          console.log(job._id)
        }

        return (
            <div>
                <ButtonGroup variant="outlined" aria-label="functions">
                  <DeleteIcon
                    sx={{ color: "#3E6ADD" }}
                    cursor="pointer"
                    variant="outlined"
                    onClick={(e) => deleteJob()}
                  >
                    Delete
                  </DeleteIcon>
                  <EditIcon
                    sx={{
                      color: "#3E6ADD",
                      marginLeft: "1rem",
                    }}
                    cursor="pointer"
                    variant="outlined"
                    onClick={(e) => editJob()}
                  >
                    Edit
                  </EditIcon>
                </ButtonGroup>
            </div>
        )
}