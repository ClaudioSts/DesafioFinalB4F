import LoginCompany from "../src/components/loginCompany";
import LoginUser from "../src/components/loginUser";
import CustomButtonWithModal from "../src/components/modal/customButtonWithModal";
import CompanyApplications from "../src/components/companyApplications";
import { InputSubmitType } from "../src/components/submitFile";
import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import CssBaseline from "@mui/material/CssBaseline";
import { Grid, List } from "@mui/material";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import JobList from "../src/components/JobList";
import Link from "@mui/material/Link";
import Modal from "react-modal";
import AppForm from "../src/components/JobPostForm";

const theme = createTheme();

export default function Home(props) {
  const [loginUserDisabled, setLoginUserDisabled] = useState(false);
  const [loginCompanyDisabled, setLoginCompanyDisabled] = useState(false);

  const [loggedUser, setLoggedUser] = useState("");
  const [isCompany, setIsCompany] = useState(false);
  const [searchText, setSearchText] = useState("");


  // Company Modals
  const [openCompanyApplicationsModal, setOpenCompanyApplicationsModal] =
    React.useState(false);
  const handleOpenCompanyApplicationsModal = () =>
    setOpenCompanyApplicationsModal(true);
  const handleCloseCompanyApplicationsModal = () =>
    setOpenCompanyApplicationsModal(false);

  const [openCompanyPostJobModal, setOpenCompanyPostJobModal] =
    React.useState(false);
  const handleOpenCompanyPostJobModal = () => setOpenCompanyPostJobModal(true);
  const handleCloseCompanyPostJobModal = () =>
    setOpenCompanyPostJobModal(false);

  // User Modal
  const [openUserApplicationsModal, setOpenUserApplicationsModal] =
    React.useState(false);
  const handleOpenUserApplicationsModal = () =>
    setOpenUserApplicationsModal(true);
  const handleCloseUserApplicationsModal = () =>
    setOpenUserApplicationsModal(false);

  const handleLogout = () => {
    setLoggedUser("");
    localStorage.clear();
    window.location = "/";
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem("username");
    if (
      loggedInUser !== "undefined" &&
      loggedInUser !== "" &&
      loggedInUser !== null
    ) {
      setLoggedUser(loggedInUser);
    } else {
      setLoggedUser("");
    }

    const isCompany = localStorage.getItem("isCompany");
    if (isCompany) {
      setIsCompany(true);
    } else {
      setIsCompany(false);
    }
  }, []);

  const modalStyle = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0)",
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
      // right: '100px',
      // bottom: '0px',
      background: "#ffffff",
    },
  };

  const inputFetch = (formData) =>
    fetch("/api/users/applications", {
      method: "POST",
      body: formData,
      header: { "content-type": "multipart/form-data" },
    });

  return (

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            <img className="logo" src="/img/logo.png" alt="logo" />
          </Typography>
          <Box sx={{ flexGrow: 1 }}></Box>
          {/* <InputSubmitType onSelect={(formData) => inputFetch(formData)} /> */}
          {loggedUser ? (
            <div>
              Welcome, {loggedUser}! &nbsp;
              <Link
                href="#"
                underline="hover"
                color="#fff"
                onClick={handleLogout}
              >
                Logout
              </Link>
            </div>
          ) : (
            <CustomButtonWithModal buttonTitle="Login" modalTitle="">
              <Grid
                container
                spacing={2}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item xs={1}></Grid>
                <Grid
                  item
                  xs={4}
                  onMouseOver={(e) => {
                    setLoginUserDisabled(false);
                    setLoginCompanyDisabled(true);
                  }}
                  onMouseOut={(e) => {
                    setLoginUserDisabled(false);
                    setLoginCompanyDisabled(false);
                  }}
                  style={
                    loginUserDisabled
                      ? { pointerEvents: "none", opacity: "0.4" }
                      : {}
                  }
                >
                  <LoginUser></LoginUser>
                </Grid>
                <Grid
                  item
                  xs={4}
                  onMouseOver={(e) => {
                    setLoginUserDisabled(true);
                    setLoginCompanyDisabled(false);
                  }}
                  onMouseOut={(e) => {
                    setLoginUserDisabled(false);
                    setLoginCompanyDisabled(false);
                  }}
                  style={
                    loginCompanyDisabled
                      ? { pointerEvents: "none", opacity: "0.4" }
                      : {}
                  }
                >
                  <LoginCompany></LoginCompany>
                </Grid>
              </Grid>
            </CustomButtonWithModal>
          )}
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "#fff",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm"></Container>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              {loggedUser ? (
                isCompany ? (
                  <Toolbar>
                    <div
                      style={{
                        marginTop: "-10%",
                        marginBottom: "5%",
                        marginLeft: "10%",
                      }}
                    >
                      <ButtonGroup
                        variant="contained"
                        aria-label="outlined primary button group"
                      >
                        <Button
                          style={{ minWidth: "200px" }}
                          onClick={handleOpenCompanyApplicationsModal}
                        >
                          Applications
                        </Button>
                        <Button
                          style={{ minWidth: "200px" }}
                          onClick={handleOpenCompanyPostJobModal}
                        >
                          Post Job
                        </Button>
                      </ButtonGroup>
                    </div>
                  </Toolbar>
                ) : (
                  <div
                    style={{
                      marginTop: "-38%",
                      marginBottom: "20%",
                    }}
                  >
                    <ButtonGroup
                      variant="contained"
                      aria-label="outlined primary button group"
                    >
                      <Button
                        style={{
                          minWidth: "200px",

                          backgroundColor: "#004AAD",
                          color: "#fff",

                          margin: "1rem",
                        }}
                        onClick={handleOpenUserApplicationsModal}
                      >
                        My Applications
                      </Button>
                    </ButtonGroup>
                  </div>
                )
              ) : (
                ""
              )}

              <TextField
                fullWidth
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                id="Search"
                label="Search for company name, location ..."
                sx={{ zIndex: 0 }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton>
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <Grid
                container
                display="flex"
                justifyContent="center"
                alignItems="center"
                style={{ marginLeft: "-5%" }}
              >
                <JobList
                  loggedUser={loggedUser}
                  filter={searchText}
                  isCompany={isCompany}
                />
              </Grid>
            </Typography>

            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              {/* <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button> */}
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}

          <Grid container spacing={4}></Grid>
        </Container>
      </main>
      {/* Footer */}
      {/* <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
      </Box> */}
      {/* End footer */}

      {/* Company Applications Modal */}
      <Modal
        isOpen={openCompanyApplicationsModal}
        onRequestClose={handleCloseCompanyApplicationsModal}
        ariaHideApp={false}
        contentLabel={"Company Applications"}
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
            onClick={handleCloseCompanyApplicationsModal}
          >
            Close
          </Button>
        </Box>
        <hr />
        <h1>{"Company Applications"}</h1>
        <div>
          <Grid
            container
            display="flex"
            justifyContent="center"
            alignItems="center"
            style={{ marginLeft: "-5%" }}
          >
            <CompanyApplications />
          </Grid>
        </div>
      </Modal>

      {/* Company Post Job */}
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
          <div>{<AppForm />}</div>
        </Box>
      </Modal>

      {/* User Applications */}
      <Modal
        isOpen={openUserApplicationsModal}
        onRequestClose={handleCloseUserApplicationsModal}
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
            onClick={handleCloseUserApplicationsModal}
          >
            Close
          </Button>
        </Box>
        <hr />
        <h1>{"My Applications"}</h1>
        <div>{ }</div>
      </Modal>
    </ThemeProvider>
  );
}
