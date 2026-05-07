import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./components/Hero/Hero";

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero searchBar={true} />
      <main className={styles.main}>
      </main>
    </div>
  );
}
