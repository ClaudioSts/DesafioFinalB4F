import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Modal from "react-modal";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

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

    const [open, setOpen] = React.useState(false);
    const {loggedUser} = props
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { title, location, description} = props
    return (
        <>
        <Card sx={{ minWidth: 500 }} onClick={handleOpen}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {location}
                </Typography>
                <Typography variant="h6" component="div">
                {title}
                </Typography>
                <Typography variant="body2">
                {description.substring(0, 50)}...
                </Typography>
            </CardContent>
        </Card>
        <Modal
            isOpen={open}
            onRequestClose={handleClose}
            contentLabel={title}
            style={modalStyle}>
            <Box
              m={1}
            //margin
              display="flex"
              justifyContent="flex-end"
              alignItems="flex-end"
            >
              <Button variant='outlined' color='inherit' sx={ { borderRadius: 28 } } onClick={handleClose}>Close</Button>
            </Box>
            <hr />
            <h1>{location}</h1>
            <h2>{title}</h2>
            <div>{description}</div>
            <br />
            
            <Grid container 
              display="flex"
              justifyContent="left"
              alignItems="left">
              {/* <Button variant='outlined' color='primary' sx={ { borderRadius: 28 } } >Apply</Button> */}
              
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
                      {loggedUser ? <input type={"file"}></input> : <Alert severity="warning">Operation allowed only for logged users!</Alert>}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </Grid>
        </Modal>
        </>
        
    );
}
