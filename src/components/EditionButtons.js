import React from "react";
import Modal from "react-modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AppForm from "./JobPostForm";

export default function ShowButtons(props) {
  const { job } = props;

  const modalStyle = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0)",
      width: "60rem",
      height: "50rem",
      marginLeft: "25%",
      marginTop: "10%",
      marginBottom: "5%",
    },
    content: {
      // position: 'absolute',
      // top: '0px',
      // left: '0px',
      // right: '100px',
      // bottom: '0px',
      background: "#ffffff",
    },
  };

  const [openCompanyPostJobModal, setOpenCompanyPostJobModal] =
    React.useState(false);
  const handleOpenCompanyPostJobModal = () => setOpenCompanyPostJobModal(true);
  const handleCloseCompanyPostJobModal = () =>
    setOpenCompanyPostJobModal(false);

  const deleteJob = async () => {
    if (
      confirm(`Are you sure you want to delete the job: '${job.title}'?`) ==
      true
    ) {
      const answer = await fetch("api/company", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          _id: job._id,
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
  };

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
          onClick={handleOpenCompanyPostJobModal}
        >
          Edit
        </EditIcon>
      </ButtonGroup>
      <Modal
        isOpen={openCompanyPostJobModal}
        onRequestClose={handleCloseCompanyPostJobModal}
        ariaHideApp={false}
        contentLabel={"Post Job"}
        style={modalStyle}
      >
        <Box
          m={1}
          //margin
          display="flex"
          justifyContent="flex-end"
          alignItems="flex-end"
        >
          <Button
            variant="outlined"
            color="error"
            sx={{ borderRadius: 28 }}
            onClick={handleCloseCompanyPostJobModal}
          >
            Close
          </Button>
        </Box>
        <hr />
        <Box
          className="postBox"
          m={1}
          //margi
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <div>
            {
              <AppForm
                _id={job._id}
                title={job.title}
                location={job.location}
                description={job.description}
              />
            }
          </div>
        </Box>
      </Modal>
    </div>
  );
}
