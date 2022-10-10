import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import LoginUser from "../src/components/loginUser";
import LoginCompany from "../src/components/loginCompany";
import SignUpUser from "../src/components/signupUser";
import FormularioComSubmit from "../src/components/submitFile";
import CustomButtonWithModal from "../src/components/modal/customButtonWithModal";
import CustomDivWithModal from "../src/components/modal/customDivWithModal";
import LogoPrincipal from "../src/components/logoPrincipal";
import SearchBar from "../src/components/searchBar";


export default function Home() {
  return (
    <div className="container">
      <LogoPrincipal />
      <SearchBar />
      <LoginUser />
      <LoginCompany />
      <SignUpUser />
      <signUpCompanies />
      <FormularioComSubmit />
      <CustomButtonWithModal buttonTitle="Login Modal" modalTitle="Login Modal">
      </CustomButtonWithModal>
      <CustomDivWithModal divText="Check the applications here...">
        Check the applications here...
      </CustomDivWithModal>
    </div>
  );
}
