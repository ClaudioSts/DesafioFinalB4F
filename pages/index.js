import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import LoginUser from "../src/components/loginUser";
import LoginCom from "../src/components/loginCompany";
import Overlay from "../src/components/overlay";
import SignUpUser from "../src/components/SignUpUser";
import FormularioComSubmit from "../src/components/submitFile";
//import signUpCompanies from "../src/components/signUpCompanies";

export default function Home() {
  return (
    <div className={styles.container}>
      <LoginUser />
      <LoginCom />
      <SignUpUser />
      <signUpCompanies />
      <FormularioComSubmit />
      <Overlay />
    </div>
  );
}
