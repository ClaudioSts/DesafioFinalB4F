import LoginCompany from "../src/components/loginCompany";
import LoginUser from "../src/components/loginUser";
import CustomButtonWithModal from "../src/components/modal/customButtonWithModal";
import CustomDivWithModal from "../src/components/modal/customDivWithModal";
import SignUpCompanies from "../src/components/signUpCompanies";
import SignUpUser from "../src/components/signupUser";
import FormularioComSubmit from "../src/components/submitFile";
import styles from "../styles/Home.module.css";
import LogoPrincipal from "../src/components/logoPrincipal";
import SearchBar from "../src/components/searchBar";
import CardsList from "../src/components/applicationsList/cardsList";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import { Grid, Item } from "@mui/material";
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
import Card from "@mui/material/Card";

import { useState } from "react";

const theme = createTheme();

export default function Home(props) {
  // return (
  //   <div className={styles.container}>
  //     <LogoPrincipal />
  //     <SearchBar />
  //     <LoginUser />
  //     <LoginCompany />
  //     <SignUpUser />
  //     <SignUpCompanies />
  //     <FormularioComSubmit />
  //     <CustomButtonWithModal buttonTitle="Login Modal" modalTitle="Login Modal">
  //     </CustomButtonWithModal>
  //     <CustomDivWithModal divText="Check the applications here...">
  //       Check the applications here...
  //     </CustomDivWithModal>

  //   </div>
  // )

  const [loginUserDisabled, setLoginUserDisabled] = React.useState(false);
  const [loginCompanyDisabled, setLoginCompanyDisabled] = React.useState(false);
  const [loggedUser, setLoggedUser] = React.useState(props.loggedUser ?? false);
  const [searchText, setSearchText] = React.useState("");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            <img className="logo" src="/img/logo.png" alt="logo" />
          </Typography>
          <Box sx={{ flexGrow: 1 }}></Box>

          {loggedUser ? (
            <div>
              Welcome, User! <a href="">Logout</a>{" "}
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
                <Grid
                  item
                  xs={6}
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
                  xs={2}
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
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              {/* Album layout */}
              <TextField
                fullWidth
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                id="Search"
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
              >
                <CardsList loggedUser={loggedUser} filter={searchText} />
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
    </ThemeProvider>
  );
}
