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
import InputSubmitType from "../submitFile";
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

  const { _id, title, location, description, loggedUser, isCompany } = props;

  return (
    <>
      <Card
        sx={{
          minHeight: 250,
          minWidth: 1000,
          backgroundColor: "#f2f5f7",
          borderTop: "8px solid #2d85fa",
          borderRadius: "10px",
          marginTop: "1rem",
          cursor: "pointer",
          "&:hover": {
            transform: "scale(1.09)",
            transition: "150ms ease-in-out",
          },
        }}
        onClick={handleOpen}
      >
        <div className="jobcard">
          <CardContent>
            <Typography
              sx={{
                fontSize: 14,
              }}
              align="right"
              color="#000"
              gutterBottom
            >
              {location}
            </Typography>
            <Typography
              sx={{ fontWeight: "bold", margin: "1rem" }}
              align="center"
              variant="h5"
              component="div"
            >
              {title}
            </Typography>
            <Typography variant="body2">
              {description.substring(0, 200)}{" "}
              {description.length > 50 ? "..." : ""}
            </Typography>
          </CardContent>
        </div>
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
            style={{ marginBottom: "1rem" }}
          >
            Close
          </Button>
        </Box>

        <hr />
        <div className="job-card" style={{ marginTop: "20%" }}>
          <h1
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {title}
          </h1>
          <h4
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {location}
          </h4>
          <h5
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {description}
          </h5>
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
                      <InputSubmitType jobId={_id} />
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
