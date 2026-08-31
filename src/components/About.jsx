import styles from "./About.module.css"
import { Outlet, Link } from "react-router-dom";
import me from "../assets/images/phoMe.JPG"

import safety from "../assets/icons/safetyIcon.png"
import people from "../assets/icons/peopleIcon.png"
import mapIcon from "../assets/icons/mapIcon.png"
import smileIcon from "../assets/icons/smileIcon.png"

import me2 from "../assets/images/phoMe.jpg"
import me3 from "../assets/landscapes/land7.jpg"
import vid from "../assets/videos/vid1.mp4"

import { useTranslation } from "react-i18next";

export default function About(){
    
    const { t } = useTranslation();

    return(
    <>
    <section className={styles.aboutPage}>
        <div className={styles.aboutBox}>
            <p>{t("about.p")}</p>
            <h1>{t("about.h1")}</h1>
            <h2>{t("about.h2")}</h2>
        </div>
    </section> 

    <section className={styles.myStoryBox}>
        <img src={me} className={styles.imgMe}></img>
        <div className={styles.myStory}>
            <p>{t("about.myStory.p")}</p>
            <h2>{t("about.myStory.h2")}</h2>
            <p>
                <span>{t("about.myStory.p1")}
                </span>
                <span>{t("about.myStory.p2")}
                </span>
                <span>
                {t("about.myStory.p3")}
                </span>
                </p>
        </div>
    </section>

    <hr></hr>

    <section className={styles.valuesBox}>
        <h2>{t("about.values.h2")}</h2>
        <div className={styles.values}>
            <div className={styles.value}>
                <img src={safety}></img>
                <h3>{t("about.values.one.h3")}</h3>
                <p>{t("about.values.one.p")}</p>
            </div>
            <div className={styles.value}>
                <img src={people}></img>
                <h3>{t("about.values.two.h3")}</h3>
                <p>{t("about.values.two.p")}</p>
            </div>
            <div className={styles.value}>
                <img src={mapIcon}></img>
                <h3>{t("about.values.three.h3")}</h3>
                <p>{t("about.values.three.p")}</p>
            </div>
            <div className={styles.value}>
                <img src={smileIcon}></img>
                <h3>{t("about.values.four.h3")}</h3>
                <p>{t("about.values.four.p")}</p>
            </div>
        </div>
    </section>
 
    <hr></hr>

    <section className={styles.aboutMe}>
        <div className={styles.aboutMeText}>
            <h2>
                {t("about.more.h2")}
            </h2>
            <p>{t("about.more.p")}</p>
        </div>
        <div className={styles.aboutMePhotos}>
            <img src={me2}></img>
            <video autoPlay muted loop playsInline className={styles.video}>
                <source src={vid} type="video/mp4"/>
            </video>
            <img src={me3}></img>
        </div>
    </section>

        <hr></hr>

    <section className={styles.aboutMeQuestions}>
                    <h1>{t("about.questions.h1")}</h1>
                    <p>{t("about.questions.p")}</p>
                    <p>ready24@ready24.is</p>
    </section>
    </>
    )
}