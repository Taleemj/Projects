import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <span>OUR WORK</span>
      <h1>Projects</h1>
      <p>
        Check out all our latest projects in website an webapp development. We
        build a variety of projects from simple business landing pages to
        complex webapps such as management systems and ensure complete client
        satisfaction
      </p>
    </main>
  );
}
