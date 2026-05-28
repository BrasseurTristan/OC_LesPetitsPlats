"use client"
import { useState } from "react"
import styles from "./FilterInput.module.css"

export default function FilterInput({ label, options = [], onSelect }) {
    const [isOpen, setIsOpen] = useState(false)
    const [search, setSearch] = useState("")
    const [selected, setSelected] = useState([])

    const filtered = options.filter((o) => !selected.includes(o)).filter((o) => o.toLowerCase().includes(search.toLowerCase()))

    function handleSelect(option) {
        const updated = [option, ...selected]
        setSelected(updated)
        setIsOpen(false)
        setSearch("")
        onSelect(updated)
    }

    function deleteSelectedItem(item) {
        const newArray = selected.filter((i) => i !== item);
        setSelected(newArray)
        onSelect(newArray)
    }

    function handleClose() {
        setIsOpen(false)
        setSearch("")
    }

    return (
        <div className={styles.filterContainer}>
        <div className={styles.container}>
            <button
                type="button"
                className={`${styles.trigger} ${isOpen ? styles.triggerOpen : ""}`}
                onClick={() => setIsOpen((prev) => !prev)}
            >
                <span className={styles.placeholder}>
                    {label}
                </span>
                <svg
                    className={`${styles.chevron} ${isOpen ? styles.chevronUp : ""}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <polyline points="6 9 12 15 18 9" />
                </svg>

            </button>

            {isOpen && (
                <div className={styles.overlay} onClick={handleClose} />
            )}

            {isOpen && (
                <div className={styles.dropdown}>
                    <div className={styles.searchWrapper}>
                        <input
                            className={styles.searchInput}
                            type="text"
                            placeholder="Rechercher..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            autoFocus
                        />
                        {search && (
                            <span className={styles.deleteSearchBtn} onClick={() => setSearch('')}> x </span>
                        )}
                        <svg
                            className={styles.searchIcon}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                    </div>
                    <ul className={styles.selectedList}>
                        {
                            selected.length > 0 ? (
                                selected.map((s) => (
                                    <li key={s} className={styles.selectedItem}>
                                    {s}
                                    <span className={styles.deleteBtn} onClick={() => deleteSelectedItem(s)}> x </span>
                                </li>
                                ))
                            ):(
                                <></>
                            )
                        }
                    </ul>
                    <ul className={styles.list}>
                        {filtered.length > 0 ? (
                            filtered.map((f) => (
                                <li key={f} className={styles.item} onClick={() => handleSelect(f)}>
                                    {f}
                                </li>
                            ))
                            ) : (
                                <li className={styles.empty}>Aucun résultat</li>
                            )
                        }
                    </ul>
                </div>
            )}
            
        </div>

            <div className={styles.badgeContainer}>
                {
                    selected.length > 0 ? (
                        selected.map((e)=>(
                                    <div className={styles.badge}>
                                        {e}
                                    <span className={styles.deleteFilterBtn} onClick={() => deleteSelectedItem(e)}> x </span>
                                </div>
                        ))
                    
                    ) :(
                        <></>
                    )
                }
            
            </div>
        </div>
    )
}
