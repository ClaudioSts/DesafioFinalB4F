import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Modal from "react-modal";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { InputSubmitType } from "../submitFile";
import { flexbox } from "@mui/system";

export default function CardItemWithModal(props) {
  const modalStyle = {
    overlay: {
      // position: 'absolute',
      // top: '95px',
      // bottom: '70px',
      // left: '50%',
      // marginLeft: '35px',
      // marginRight: 'auto',
      // transform: 'translate(-50%, -0%)',
      backgroundColor: "rgba(0, 0, 0, 0)",
      // border: 'none',
      width: "70rem",
      height: "55rem",
      marginLeft: "25%",
      marginTop: "5%",
      marginBottom: "5%",
    },
    content: {
      // position: 'absolute',
      // top: '0px',
      // left: '0px',
      // right: '0px',
      // bottom: '0px',
      background: "#fff",
      // overflow: 'auto',
      // WebkitOverflowScrolling: 'touch',
      // padding: '10px',
      // border: 'none',
      // maxWidth: "500px"
    },
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { title, location, description, loggedUser, isCompany } = props;

  const inputFetch = async (formData) =>
    await fetch("/api/users/application", {
      method: "POST",
      body: formData,
      header: {
        "content-type": "multipart/form-data",
        Authorization: localStorage.getItem("token"),
      },
    });

  console.log(inputFetch.status);

  if (inputFetch.status === 400) {
    alert("There was an error processing your application. Please try again.");
    // alert("Invalid data. Please verify parameters.");
  }

  if (inputFetch.status === 201) {
    alert("Application created successfully!");
    window.location = "/";
  }

  return (
    <>
      <Card
        sx={{
          minHeight: 200,
          minWidth: 800,
          backgroundColor: "#dae3f1",
          borderTop: "8px solid #3E6ADD",
          borderRadius: "10px",
          boxShadow: "10px 10px 17px -10px rgba(0,0,0,0.75)",
          marginTop: "1rem",
          cursor: "pointer",
        }}
        s
        onClick={handleOpen}
      >
        <CardContent>
          <Typography
            sx={{
              fontSize: 14,
              font: "Open Sans",
            }}
            align="right"
            color="#000"
            gutterBottom
          >
            {location}
          </Typography>
          <Typography
            sx={{ font: "Open Sans", fontWeight: "bold", margin: "1rem" }}
            align="left"
            variant="h5"
            component="div"
          >
            {title}
          </Typography>
          <Typography align="bottom" variant="body2">
            {description.substring(0, 200)}{" "}
            {description.length > 50 ? "..." : ""}
          </Typography>
        </CardContent>
      </Card>

      <Modal
        isOpen={open}
        onRequestClose={handleClose}
        contentLabel={title}
        ariaHideApp={false}
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
            onClick={handleClose}
          >
            Close
          </Button>
        </Box>
        <div className="job-card">
          <hr />
          <h5>{location}</h5>
          <h1>{title}</h1>
          <div>{description}</div>
          <br />
        </div>

        <Grid
          container
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          {/* <Button variant='outlined' color='primary' sx={ { borderRadius: 28 } } >Apply</Button> */}

          {!isCompany ? (
            <div>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Apply</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {loggedUser ? (
                      <InputSubmitType
                        onSelect={(formData) => inputFetch(formData)}
                      />
                    ) : (
                      <Alert severity="warning">
                        Operation allowed only for logged users!
                      </Alert>
                    )}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          ) : (
            ""
          )}
        </Grid>
      </Modal>
    </>
  );
}
