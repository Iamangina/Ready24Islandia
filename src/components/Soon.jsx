import styles from "../components/Soon.module.css"
import { Outlet, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Soon(){
    const { t } = useTranslation();
    return(
        <>
        <section className={styles.soonPage}>
            <div className={styles.soonBox}>
                <h1>{t("soon.h1")}</h1>
                <h2>{t("soon.h2")}</h2>
            </div>
        </section>
        <section className={styles.soonPageText}>
            <h2>{t("soon.h22")}</h2>
            <p>{t("soon.p")}</p>
            <Link to="/wyjazdy"><p className={styles.linkSoonPage}>{t("soon.btn")}</p></Link>
        </section>

        </>
    )
} 