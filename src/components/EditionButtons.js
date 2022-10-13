import Button from "@mui/material/Button";
import ButtonGroup from '@mui/material/ButtonGroup';
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function ShowButtons() {

        return (
            <div>
                <ButtonGroup variant="outlined" aria-label="functions">
                  <DeleteIcon
                    sx={{ color: "#3E6ADD" }}
                    cursor="pointer"
                    variant="outlined"
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
                  >
                    Edit
                  </EditIcon>
                </ButtonGroup>
            </div>
        )
}