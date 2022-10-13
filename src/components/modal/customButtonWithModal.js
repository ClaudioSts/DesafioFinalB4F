import React from "react";
import Modal from "react-modal";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import { height } from "@mui/system";

export default function CustomButtonWithModal(props) {
  // Get the component Children
  const childrenElements = React.Children.toArray(props.children);

  const { buttonTitle, modalTitle } = props;

  // React Component: http://reactcommunity.org/react-modal/
  const modalStyle = {
    overlay: {
      // position: 'absolute',

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

      // bottom: '0px',
      background: "#ffffff",
      // overflow: 'auto',
      // WebkitOverflowScrolling: 'touch',
      // padding: '10px',
      // border: 'none',
      // maxWidth: "800px"dis
    },
  };

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        variant="outlined"
        color="inherit"
        sx={{ borderRadius: 28 }}
        onClick={handleOpen}
      >
        {buttonTitle}
      </Button>
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

        <h1>{modalTitle ?? "Set Modal Title"}</h1>
        <hr />
        <div>{childrenElements}</div>
      </Modal>
    </div>
  );
}
