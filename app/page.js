import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./components/Hero/Hero";
import recipes from "./data/recipes.json";
import RecipeCard from "./components/RecipeCard/RecipeCard";

export default function Home() {

  return (
    <div className={styles.page}>
      <Hero searchBar={true} />
      <main className={styles.main}>
        <section className={styles.recipesList}>
          {recipes.map((r)=>(
            <RecipeCard key={r.id} {...r}/>
          ))}
        </section>
      </main>
    </div>
  );
}
