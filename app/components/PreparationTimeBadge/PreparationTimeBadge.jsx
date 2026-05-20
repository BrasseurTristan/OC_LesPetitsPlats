import styles from "./PreparationTimeBadge.module.css"

export default function PreparationTimeBadge({timer,className}) {
    return (
        <div className={`${styles.badge} ${className ?? ""}`}>
            {timer}min
        </div>
    )
};
