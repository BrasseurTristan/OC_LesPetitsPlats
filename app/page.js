"use client"

import styles from "./page.module.css";
import Hero from "./components/Hero/Hero";
import recipes from "./data/recipes.json";
import RecipeCard from "./components/RecipeCard/RecipeCard";
import { useEffect, useState } from "react";
import FilterInput from "./components/FilterInput/FilterInput";

export default function Home() {
  
  const [inputValue, setInputValue] = useState('')
  const [recipesData, updateRecipesData] = useState([])
  const [recipeCounter, updateRecipeCounter] = useState(0);
  const [ingredientsSelected, setIngredientsSelected] = useState([]);
  const [appliancesSelected, setAppliancesSelected] = useState([]);
  const [ustensilsSelected, setUstensilsSelected] = useState([]);
  const result = recipesData
                            .filter((r)=>[r.name.toLowerCase()].join(" ").includes(inputValue.toLowerCase()))
                            .filter((r)=> {
                                const ingredients = r.ingredients.map(((i) => i.ingredient.toLowerCase()))
                                return ingredientsSelected.every((i)=>ingredients.includes(i.toLowerCase()))
                            })
                            .filter((r)=> r.appliance.includes(appliancesSelected) )
                            .filter((r)=> ustensilsSelected.every((u) => r.ustensils.map((ust) => ust.toLowerCase()).includes(u.toLowerCase())));

 const allIngredients = [...new Set(recipesData.flatMap((r) => r.ingredients.map((i) => i.ingredient)))];
 const allAppliances = [...new Set(recipesData.map((a) => a.appliance))];
 const allUstensils = [...new Set(recipesData.flatMap((u) => u.ustensils))];

  useEffect(()=>{
    updateRecipesData(recipes);
    updateRecipeCounter(result.length);
  })
  
  return (
    <div className={styles.page}>
      <Hero searchBar={true} onChange={setInputValue} />
      <main className={styles.main}>
        <div className={styles.searchOptionsContainer}>
          <div className={styles.recipesOptions}>
            <FilterInput label="Ingrédients" options={allIngredients} onSelect={(value) => setIngredientsSelected(value)} />
            <FilterInput label="Appareils" options={allAppliances} onSelect={(value) => setAppliancesSelected(value)} />
            <FilterInput label="Ustensiles" options={allUstensils} onSelect={(value) => setUstensilsSelected(value)} />
          </div>
          <div className={styles.recipesCounter}>
            <span>{recipeCounter} {recipeCounter > 1 ? "RECETTES" : "RECETTE"}</span>
          </div>
        </div>
        <section className={styles.recipesList}>
          { result.length > 0 ? (
            result.map((r)=>(
              <RecipeCard key={r.id} {...r}/>
            ))
          ):(
            <div>
              <span> Aucune recette correspondant à votre recherche.</span>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
