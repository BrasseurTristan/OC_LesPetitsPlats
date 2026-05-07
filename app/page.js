import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./components/Hero/Hero";

const notFound = false;
export default function Home() {
  return (
    <div className={styles.page}>
        <Hero searchBar={false} notFound={notFound}/>
      <main className={styles.main}>
      </main>
    </div>
  );
}
