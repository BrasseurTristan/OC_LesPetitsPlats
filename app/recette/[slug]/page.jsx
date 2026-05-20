import styles from "./page.module.css"
import Image from "next/image"
import recipes from "../../data/recipes.json"
import Hero from "@/app/components/Hero/Hero";
import PreparationTimeBadge from "@/app/components/PreparationTimeBadge/PreparationTimeBadge";

export default async function RecipeDetails({ params }) {
    const { slug } = await params;

    const recipe = recipes.find((r) => r.slug === slug)

    return(
        <>
            <Hero searchBar={false}/>
            <div className={styles.container}>
                <div className={styles.imageContainer}>
                    <Image className={styles.picture} src={`/recipes/${recipe.image}`} alt={recipe.name} fill priority></Image>
                </div>
                <div className={styles.recipeContainer}>
                    <h1>{recipe.name}</h1>
                    <section className={styles.preparationTime}>
                        <h2>Temps de préparation </h2>
                        <PreparationTimeBadge timer={recipe.time}/>
                    </section>
                    <section className={styles.ingredientsList}>
                        <h2>Ingrédients</h2>
                        <div className={styles.ingredients}>
                            {recipe.ingredients.map((i) => (
                                <div key={i.ingredient}>
                                    <span>{i.ingredient}</span>
                                    <span>{i.quantity} {i.unit}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                    <section className={styles.ustensilsList}>
                        <h2>Ustensiles nécessaires</h2>
                        <div className={styles.ustensils}>
                        {recipe.ustensils.map((u) => (
                            <div key={u}>
                                <span>{u}</span>
                                <span>1</span>
                            </div>
                        ))}
                        </div>
                    </section>
                     <section className={styles.applianceList}>
                        <h2>Appareils nécessaires</h2>
                            <div className={styles.appliance}>
                                <span>{recipe.appliance}</span>
                                <span>1</span>
                            </div>
                    </section>
                    <section className={styles.description}>
                        <h2>Recette</h2>
                            <div>
                                <p>{recipe.description}</p>
                            </div>
                    </section>
                </div>
            </div>
        </>
    )
};
