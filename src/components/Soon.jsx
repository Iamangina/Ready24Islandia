import styles from "../components/Soon.module.css"
import { Outlet, Link } from "react-router-dom";

export default function Soon(){
    return(
        <>
        <section className={styles.soonPage}>
            <div className={styles.soonBox}>
                <h1>TA PRZYGODA JEST W PRZYGOTOWANIU</h1>
                <h2>Ten wyjazd wciąż dopracowujemy w każdym szczególe, aby dostarczyć Ci niezapomnianych wrażeń i 100% bezpieczeństwa.</h2>
            </div>
        </section>
        <section className={styles.soonPageText}>
            <h2>Sprawdź gotowe wyjazdy</h2>
            <p>Nie czekaj! Sprawdź dostępne wyprawy po Islandii</p>
            <Link to="/wyjazdy"><p className={styles.linkSoonPage}>Zobacz dostępne wyjazdy</p></Link>
        </section>

        </>
    )
}