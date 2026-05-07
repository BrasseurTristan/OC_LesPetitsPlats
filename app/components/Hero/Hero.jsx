import Image from "next/image"
import Link from 'next/link'
import styles from "./Hero.module.css"
import SearchBar from "../SearchBar/SearchBar"

export default function Hero({searchBar, notFound}) {
    
    return(
        <section className={styles.heroBanner}>
            <Link href="/">
                <Image src="/les-petits-plats.png" alt="Les petits plats" width={160} height={24}/>
            </Link>
            {searchBar && (
                <div className={styles.searchBarContainer}>
                    <div className={styles.titleContainer}>
                        <h1>Découvrez nos recettes <br></br> du quotidien, simples et délicieuses</h1>
                    </div>
                    <SearchBar/>
                </div>
            )}
            {notFound && (
                <div className={styles.notFoundContainer}>
                    <span className={styles.notFound}>404 :(</span>
                    <span>La page que vous demandez est introuvable.</span>
                </div>
            )}
        </section>
    )
};
