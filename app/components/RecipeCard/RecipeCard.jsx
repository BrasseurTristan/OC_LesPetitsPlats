import Link from "next/link";
import Image from "next/image";
import styles from "./RecipeCard.module.css"
import PreparationTimeBadge from "../PreparationTimeBadge/PreparationTimeBadge";
import React from "react";

export default function RecipeCard(props){

    const {slug, name, image, time, description,ingredients} = props;

    return(
        <Link href={`/recette/${slug}`}>
            <div className={styles.card}>
                <div className={styles.heroImage}>
                    <PreparationTimeBadge timer={time} className={styles.badge} />
                    <Image className={styles.image} src={`/recipes/${image}`} alt={name} fill priority/>
                </div>
                <div className={styles.recipeDescription}>
                <h3>{name}</h3>
                <span className={styles.titles}>RECETTE</span>
                <p>{description}</p>
                </div>
                <div className={styles.ingredientsList}>
                    <span className={styles.titles}>INGRÉDIENTS</span>
                    <div className={styles.grid}>
                        {ingredients.map((i) =>(
                            <div className={styles.ingredients} key={i.ingredient}>
                                <span>{i.ingredient}</span>
                                <span>{i.quantity} {i.unit}</span>
                            </div> 
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    )
}