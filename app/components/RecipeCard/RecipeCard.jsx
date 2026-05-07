import Link from "next/link";
import {styles} from "./RecipeCard.module.css"

export default function RecipeCard(props){

    const {slug, name, image, time, description,ingredients} = props;

    return(
        <Link href={`/recette/${slug}`}>
            <div className={styles.recipeCard}>
                <div className={styles.heroImage}>
                    <div className={styles.timerBadge}>
                        <span>{time} min</span>
                    </div>
                    <Image src={image} alt={name} fill priority className={styles.image}/>
                </div>
                <div className={styles.recipeDescription}>
                <h3>{name}</h3>
                <span>RECETTE</span>
                <p>{description}</p>
                <div className={styles.ingredientsList}></div>
                    <span>INGRÉDIENTS</span>
                    {ingredients.map((i) =>(
                        <>
                            <span className={styles.ingredient}>{i.ingredient}</span>
                            <span className={styles.quantity}>{i.quantity} {i.unit ? ` ${i.unit}` : ""}</span>
                        </> 
                    ))}
                </div>
            </div>
            </Link>
    )
}