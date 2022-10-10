import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import LoginUser from "../src/components/login";
import Overlay from "../src/components/overlay";

export default function Home() {
  return (
    <div className={styles.container}>
      <LoginUser />
      <LoginCompany />
      <SignUpUser />
      <signUpCompanies />
      <FormularioComSubmit />
      <CustomButtonWithModal buttonTitle="Login Modal" modalTitle="Login Modal">
        <Login />
      </CustomButtonWithModal>
      <CustomDivWithModal divText="Check the applications here...">
        Check the applications here...
      </CustomDivWithModal>
    </div>
  );
}
