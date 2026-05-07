import styles from "./Footer.module.css"


export default function Footer(){

    const actualYear = new Date().getFullYear();

    return(
        <footer className={styles.footer}>
            <span> Copyright © {actualYear} - Les Petits Plats </span>
        </footer>
    )
}