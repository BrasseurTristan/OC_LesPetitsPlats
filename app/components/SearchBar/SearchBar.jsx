import styles from "./SearchBar.module.css"

export default function SearchBar() {
    return (
        <div className={styles.wrapper}>
            <input className={styles.input} placeholder="Rechercher une recette, un ingrédient,..." />
            <button className={styles.iconButton} type="button" aria-label="Rechercher">
                <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="32" y1="32" x2="18.65" y2="18.65" />
                </svg>
            </button>
        </div>
    )
};
