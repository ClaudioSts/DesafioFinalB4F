import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import LoginUser from "../src/components/loginUser";
import LoginCompany from "../src/components/loginCompany";
import SignUpUser from "../src/components/SignUpUser";
import FormularioComSubmit from "../src/components/submitFile";
import CustomButtonWithModal from "../src/components/modal/customButtonWithModal";
import Login from "../src/components/Login";
import CustomDivWithModal from "../src/components/modal/customDivWithModal";

//import signUpCompanies from "../src/components/signUpCompanies";

export default function Home() {
  return (
    <div className={styles.container}>
      
      
      <LoginUser />
      <LoginCompany />
      <SignUpUser />
      <signUpCompanies />
      <FormularioComSubmit />
      <CustomButtonWithModal buttonTitle="Login Modal" modalTitle="Login Modal">
        <Login/>
      </CustomButtonWithModal>
      <CustomDivWithModal divText="Check the applications here...">
        Check the applications here...
      </CustomDivWithModal>
    </div>
  );
}
