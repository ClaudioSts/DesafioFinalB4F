import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import LoginUser from "../src/components/loginUser";
import LoginCom from "../src/components/loginCompany";
import Overlay from "../src/components/overlay";
import SignUpUser from "../src/components/SignUpUser";
import signUpCompanies from "../src/components/SignUpCompanies";

export default function Home() {
  return (
    <div className={styles.container}>
          <LoginUser />
          <LoginCom />
      <Overlay />
    </div>
  );
}
export default function Home() {
  return (
    <div className={styles.container}>
          <SignUpUser />
          <SignUpCompanies />
      <Overlay />
    </div>
  );
}

