import LoginCompany from "../src/components/loginCompany";
import LoginUser from "../src/components/loginUser";
import CustomButtonWithModal from "../src/components/modal/customButtonWithModal";
import CustomDivWithModal from "../src/components/modal/customDivWithModal";
import SignUpCompanies from "../src/components/signUpCompanies";
import SignUpUser from "../src/components/signupUser";
import FormularioComSubmit from "../src/components/submitFile";
import styles from "../styles/Home.module.css";
<<<<<<< HEAD
import LoginUser from "../src/components/loginUser";
import LoginCompany from "../src/components/loginCompany";
import SignUpUser from "../src/components/signupUser";
import FormularioComSubmit from "../src/components/submitFile";
import CustomButtonWithModal from "../src/components/modal/customButtonWithModal";
import CustomDivWithModal from "../src/components/modal/customDivWithModal";
import LogoPrincipal from "../src/components/logoPrincipal";
import SearchBar from "../src/components/searchBar";


=======
import { useState } from "react";
>>>>>>> 4d0f21c4dd09a7bfaf56e95b24a0f30d2e9d2fdf
export default function Home() {
  return (
    <div className="container">
      <LogoPrincipal />
      <SearchBar />
      <LoginUser />
      <LoginCompany />
      <SignUpUser />
      <SignUpCompanies />
      <FormularioComSubmit />
<<<<<<< HEAD
      <CustomButtonWithModal buttonTitle="Login Modal" modalTitle="Login Modal">
      </CustomButtonWithModal>
=======
      <CustomButtonWithModal
        buttonTitle="Login Modal"
        modalTitle="Login Modal"
      ></CustomButtonWithModal>
>>>>>>> 4d0f21c4dd09a7bfaf56e95b24a0f30d2e9d2fdf
      <CustomDivWithModal divText="Check the applications here...">
        Check the applications here...
      </CustomDivWithModal>
    </div>
  );
}
