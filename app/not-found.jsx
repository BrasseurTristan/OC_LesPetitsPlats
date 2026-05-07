import Hero from "./components/Hero/Hero";
import styles from "./page.module.css";

export default function NotFound() {
  return (
    <div className={styles.page}>
      <Hero notFound={true} />
    </div>
  );
}
