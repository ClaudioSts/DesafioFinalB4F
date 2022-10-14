import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Modal from "react-modal";
import Chip from "@mui/material/Chip";
import Alert from "@mui/material/Alert";

export default function UserApplicationItem(props) {
  const modalStyle = {
    overlay: {
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
      background: "#ffffff",
      // overflow: 'auto',
      // WebkitOverflowScrolling: 'touch',
      // padding: '10px',
      // border: 'none',
      // maxWidth: "500px"
    },
  };

  const { title, location, description, status, statusId } = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // TODO: application status
  const statusLabel = () => {
    if (statusId === 1) {
      return <Chip label={status} color="primary" />;
    } else if (statusId === 2) {
      return <Chip label={status} color="info" />;
    } else if (statusId === 3) {
      return <Chip label={status} color="warning" />;
    } else if (statusId === 4) {
      return <Chip label={status} color="success" />;
    } else if (statusId === 5) {
      return <Chip label={status} color="error" />;
    } else {
      return <Chip label={status} color="info" />;
    }
  };

  return (
    <div style={{ margin: "5%" }}>
      <Card sx={{ minWidth: 250 }} onClick={handleOpen}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {location}
          </Typography>
          <Typography variant="h6" component="div">
            {title.substring(0, 20)} {title.length > 20 ? "..." : ""}
          </Typography>
          {/* <hr/> */}
          {/* {statusLabel()} */}
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
        {/* <hr /> */}
        {/* {statusLabel()} */}
        <h1>{location}</h1>
        <h2>{title}</h2>
        <div>{description}</div>
        <br />
      </Modal>
    </div>
  );
}
