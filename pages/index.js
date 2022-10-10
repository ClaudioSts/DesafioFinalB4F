import LoginCompany from "../src/components/loginCompany";
import LoginUser from "../src/components/loginUser";
import CustomButtonWithModal from "../src/components/modal/customButtonWithModal";
import CustomDivWithModal from "../src/components/modal/customDivWithModal";
import SignUpCompanies from "../src/components/signUpCompanies";
import SignUpUser from "../src/components/signupUser";
import FormularioComSubmit from "../src/components/submitFile";
import styles from "../styles/Home.module.css";
import { useState } from "react";
export default function Home() {
  return (
    <div className={styles.container}>
      <LoginUser />
      <LoginCompany />
      <SignUpUser />
      <SignUpCompanies />
      <FormularioComSubmit />
      <CustomButtonWithModal
        buttonTitle="Login Modal"
        modalTitle="Login Modal"
      ></CustomButtonWithModal>
      <CustomDivWithModal divText="Check the applications here...">
        Check the applications here...
      </CustomDivWithModal>
    </div>
  );
}
