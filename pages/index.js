import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import LoginUser from "../src/components/login";
import LoginCom from "../src/components/loginCompany";
import Overlay from "../src/components/overlay";

export default function Home() {
  return (
    <div className={styles.container}>
          <LoginUser />
          <LoginCom />
      <Overlay />
    </div>
  );
}
