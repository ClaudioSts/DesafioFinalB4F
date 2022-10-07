import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import LoginForm from "../src/components/login";
import Overlay from "../src/components/overlay";

export default function Home() {
  return (
    <div className={styles.container}>
      <LoginForm />
      <Overlay />
    </div>
  );
}
