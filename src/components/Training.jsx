import styles from "./Training.module.css"

import quad from "../assets/icons/miniQuadIcon.png"
import safety from "../assets/icons/safetyIcon.png"
import star from "../assets/icons/star.png"

import { useTranslation } from "react-i18next";

export default function Training(){

        const { t } = useTranslation();
    return(
        <>
        <section className={styles.trainingPage}>
                <div className={styles.trainingBox}>
                    <p>{t("training.p")}</p>
                    <h1>{t("training.h1")}</h1>
                    <h2>{t("training.h2")}</h2>
                </div>
        </section>

        <section className={styles.trainingDescr}>
            <h2>{t("training.trainingDescr.h2")}</h2>
            <p>{t("training.trainingDescr.p")}</p>
            <div className={styles.trainingIcons}>
                <div className={styles.trainingIcon}>
                    <img src={quad}></img>
                    <h3>{t("training.trainingIcons.one.h3")}</h3>
                    <p>{t("training.trainingIcons.one.p")}</p>
                </div>
                <div className={styles.trainingIcon}>
                    <img src={safety}></img>
                    <h3>{t("training.trainingIcons.two.h3")}</h3>
                    <p>{t("training.trainingIcons.two.p")}</p>
                </div>
                <div className={styles.trainingIcon}>
                    <img src={star}></img>
                    <h3>{t("training.trainingIcons.three.h3")}</h3>
                    <p>{t("training.trainingIcons.three.p")}</p>
                </div>
            </div>
        </section>

        <hr></hr>

        <section className={styles.trainings}>
            <div className={styles.trainingText}>
                <h2>{t("training.trainingYoutube.h2")}</h2>
                <a href="https://www.youtube.com/@ready24islandia">{t("training.trainingYoutube.link")}</a>
            </div>
            <div className={styles.videos}>
                <div className={styles.video}>
                    <iframe
                        src="https://www.youtube.com/embed/6dVvDP1P2ug?start=782"
                        title="Trening na quadzie"
                        allowFullScreen
                    />
                    <p>{t("training.trainingYoutube.p1")}</p>
                 </div>
                 <div className={styles.video}>
                    <iframe
                        src="https://www.youtube.com/embed/4awPrCaNS9M"
                        title="Trening na quadzie"
                        allowFullScreen
                    />
                    <p>{t("training.trainingYoutube.p2")}</p>
                 </div>  
                 <div className={styles.video}>
                    <iframe
                        src="https://www.youtube.com/embed/NL6rNtuTzyA"
                        title="Trening na quadzie"
                        allowFullScreen
                    />
                    <p>{t("training.trainingYoutube.p3")}</p>
                 </div>    
            </div>
        </section>

        <hr></hr>

        <section className={styles.trainingQuestions}>
                <h1>{t("training.trainingQuestions.h1")}</h1>
                <p>{t("training.trainingQuestions.p")}</p>
                <p>ready24@ready24.is</p>
        </section>
        </>
    )
}



