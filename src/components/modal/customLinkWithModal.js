import React from "react";
import Modal from "react-modal";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";

export default function CustomLinkWithModal(props) {
  // Get the component Children
  const childrenElements = React.Children.toArray(props.children);

  const { linkTitle, modalTitle } = props;

  // React Component: http://reactcommunity.org/react-modal/
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
      // maxWidth: "800px"
      width: "60rem",
      height: "45rem",
      marginLeft: "25%",
      marginTop: "10%",
      marginBottom: "5%",
    },
  };

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Link href="#" underline="always" onClick={handleOpen}>
        {linkTitle}
      </Link>
      <Modal
        isOpen={open}
        onRequestClose={handleClose}
        ariaHideApp={false}
        contentLabel={modalTitle ?? "Set Modal Title"}
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
        <hr />
        <h1>{modalTitle ?? "Set Modal Title"}</h1>
        <div>{childrenElements}</div>
      </Modal>
    </div>
  );
}
