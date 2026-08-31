import styles from "./Homepage.module.css";
import mainVideo from "../assets/videos/mainVideo.mp4"
import { Outlet, Link } from "react-router-dom";

import miniQuadIcon from "../assets/icons/miniQuadIcon.png"
import calendarIcon from "../assets/icons/calendarIcon.png"
import bookingIcon from "../assets/icons/bookingIcon.png"
import offRoad from "../assets/icons/offRoad.png"
import peopleIcon from "../assets/icons/peopleIcon.png"
import quadIcon from "../assets/icons/quadIcon.png"
import star from "../assets/icons/star.png"
import tripIcon from "../assets/icons/tripIcon.png"

import trip1 from "../assets/images/pho1.jpg"
import trip3 from "../assets/images/pho4.jpg"
import trip5 from "../assets/images/pho5.jpg"

import renegade from "../assets/quads/renegade.avif"
import outlander from "../assets/quads/outlander.jpg"

import land1 from "../assets/landscapes/land1.jpg"
import land2 from "../assets/landscapes/land2.jpg"
import land3 from "../assets/landscapes/land3.jpg"
import land4 from "../assets/landscapes/land4.jpg"
import land5 from "../assets/landscapes/land5.jpg"
import land6 from "../assets/landscapes/land6.jpg"
import land7 from "../assets/landscapes/land7.jpg"
import land8 from "../assets/landscapes/land8.jpg"
import land9 from "../assets/landscapes/land9.jpg"
import land10 from "../assets/landscapes/land10.jpg"
import land11 from "../assets/landscapes/land11.jpg"

import { useTranslation } from "react-i18next";

export default function Homepage() {

    const { t } = useTranslation();
    
  return (
    <>
                                        {/* Pierwsza sekcja, filmik */}
    <div className={styles.mainBox}>
        <video autoPlay muted loop playsInline className={styles.main_video}>
                <source src={mainVideo} type="video/mp4"/>
        </video>
        <main>
            <div className={styles.mainText}>
                <h1 className={styles.mainTitle}>
                    <span>{t("home.mainTitle.one")}</span> 
                    <span>{t("home.mainTitle.two")}</span> 
                    <span>{t("home.mainTitle.three")}</span> 
                </h1>
                <p>{t("home.descriptP")}</p>
                <button className={styles.btnMain}>
                    <Link className={styles.btnLinkMain} to="/wyjazdy">{t("home.buttonMain")}</Link>
                </button>
            </div> 
        </main>
    </div>

    <hr></hr>

                                            {/* Sekcja informacyjna */}

    <section className={styles.sectionInfo}>
        <div className={styles.sectionText}>
            <h1>{t("home.sectionText.h1")}</h1>
            <p>{t("home.sectionText.p")}</p>
        </div>

        <div className={styles.sectionIcons}>
            <div className={styles.miniIconBox}>
                <img src={miniQuadIcon} className={styles.miniIcon}></img>
                <p>{t("home.sectionIcons.one")}</p>
            </div>
            <div className={styles.miniIconBox}>
                <img src={peopleIcon} className={styles.miniIcon}></img>
                <p>{t("home.sectionIcons.two")}</p>
            </div>
            <div className={styles.miniIconBox}>
                <img src={star} className={styles.miniIcon}></img>
                <p>{t("home.sectionIcons.three")}</p>
            </div>
        </div>
        <div className={styles.sideSection}>
            <Link className={styles.btnLinkMain} to="/wyjazdy/wyjazd_1dzien">
                <div className={styles.sideIconBox}>
                    <img src={quadIcon} className={styles.sideIcon}></img>
                    <div className={styles.textSideSection}>
                        <h1 className={styles.titleSideSection}>
                            {t("home.sideSection.oneday.title")}
                        </h1>
                        <p className={styles.infoSideSection}>
                            {t("home.sideSection.oneday.description")}
                        </p>
                    </div>
                </div>
            </Link>
            <Link className={styles.btnLinkMain} to="/wkrotce">
            <div className={styles.sideIconBox}>
                <img src={offRoad} className={styles.sideIcon}></img>
                <div className={styles.textSideSection}>
                    <h1 className={styles.titleSideSection}>
                        {t("home.sideSection.threedays.title")}
                    </h1>
                    <p className={styles.sectionSoon}>{t("home.sideSection.threedays.soon")}</p>
                    <p className={styles.infoSideSection}>
                        {t("home.sideSection.threedays.description")}
                    </p>
                </div>
            </div>
            </Link>
            <Link className={styles.btnLinkMain} to="/wkrotce">
            <div className={styles.sideIconBox}>
                <img src={offRoad} className={styles.sideIcon}></img>
                <div className={styles.textSideSection}>
                    <h1 className={styles.titleSideSection}>
                        {t("home.sideSection.fivedays.title")}
                    </h1>
                    <p className={styles.sectionSoon}>{t("home.sideSection.fivedays.soon")}</p>
                    <p className={styles.infoSideSection}>
                        {t("home.sideSection.fivedays.description")}
                    </p>
                </div>
            </div>
            </Link>
        </div>
    </section>

    <hr></hr>

                                    {/* Sekcja tłumacząca rezerwacje */}

    <section className={styles.booking}>
        <h1>{t("home.bookingSteps.title")}</h1>
        <div className={styles.steps}>
            <div className={styles.step}>
                <img src={tripIcon}></img>
                <div className={styles.stepText}>
                    <h1>{t("home.bookingSteps.first.h1")}</h1>
                    <p>{t("home.bookingSteps.first.p")}</p>
                </div>
            </div>
            <div className={styles.step}>
                <img src={calendarIcon}></img>
                <div className={styles.stepText}>
                    <h1>{t("home.bookingSteps.second.h1")}</h1>
                    <p>{t("home.bookingSteps.second.p")}</p>
                </div>
            </div>
            <div className={styles.step}>
                <img src={bookingIcon}></img>
                <div className={styles.stepText}>
                    <h1>{t("home.bookingSteps.third.h1")}</h1>
                    <p>{t("home.bookingSteps.third.p")}</p>
                </div>
            </div>
        </div>
    </section>

    <hr></hr>

                                                    {/* Wyjazdy */}

    <section className={styles.trips}>
        <div className={styles.tripsInfo}>
            <h1>{t("home.tripsInfo.h1")}</h1>
            <p>{t("home.tripsInfo.p")}</p>
            <button ><Link className={styles.btnLinkMain} to="/wyjazdy">{t("home.tripsInfo.btn")}</Link></button>
        </div>
        <div className={styles.trip}>
            <img src={trip1}></img>
            <div className={styles.textTrip}>
                <h2>{t("home.tripsInfo.trips.oneday.h2")}</h2>
                <p>{t("home.tripsInfo.trips.oneday.p")}</p>
            </div>
        </div>
        <div className={styles.trip}>
            <img src={trip3}></img>
            <div className={styles.textTrip}>
                <h2>{t("home.tripsInfo.trips.threedays.h2")}</h2>
                    <p>{t("home.tripsInfo.trips.soon")}</p>
                    <p>{t("home.tripsInfo.trips.threedays.p")}</p>
            </div>
        </div>
        <div className={styles.trip}>
            <img src={trip5}></img>
            <div className={styles.textTrip}>
                <h2>{t("home.tripsInfo.trips.fivedays.h2")}</h2>
                    <p>{t("home.tripsInfo.trips.soon")}</p>
                    <p>{t("home.tripsInfo.trips.fivedays.p")}</p>
            </div>
        </div>
    </section>

    <hr></hr>

                                            {/* Karuzela zdjęciowa */}

    <div className={styles.slider}>
        <div className={styles.photos}>
            <img src={land1}></img>
            <img src={land2}></img>
            <img src={land3}></img>
            <img src={land4}></img>
            <img src={land5}></img>
            <img src={land6}></img>
            <img src={land7}></img>
            <img src={land8}></img>
            <img src={land9}></img>
            <img src={land10}></img>
            <img src={land11}></img>
            <img src={land1}></img>
            <img src={land2}></img>
            <img src={land3}></img>
            <img src={land4}></img>
            <img src={land5}></img>
            <img src={land6}></img>
            <img src={land7}></img>
            <img src={land8}></img>
            <img src={land9}></img>
            <img src={land10}></img>
            <img src={land11}></img>
        </div>
    </div>

    <hr></hr>

                                             {/* Dostępne quady */}

    <section className={styles.sectionQuads}>
        <h1 className={styles.sectionQuadsTitle}>
            {t("home.quads.title")}
        </h1>
        <div className={styles.quads}>
            <div className={styles.quad}>
                <img src={renegade}></img>
                <div>
                    <h2>2 x Renegade 650</h2>
                    <p>{t("home.quads.renegade")}</p>
                    <p>{t("home.quads.one")}</p>
                </div>
            </div>
            <div className={styles.quad}>
                <img src={outlander}></img>
                <div>
                    <h2>1 x Outlander 650</h2>
                    <p>{t("home.quads.outlander")}</p>
                    <p>{t("home.quads.two")}</p>
                </div>
            </div>
        </div>
    </section>

    <hr></hr>

                                             {/* Youtube */}

   <section className={styles.youtube}>
        <h1 className={styles.sectionYoutubeTitle}>
            {t("home.youtube.title")}
        </h1>
        <p>
            {t("home.youtube.p")}
        </p>
        <div className={styles.movies}>
            <div className={styles.videoContainer}>
                <iframe
                    src="https://www.youtube.com/embed/6dVvDP1P2ug?start=782"
                    title="Trening na quadzie"
                    allowFullScreen
                />
            </div>
            <div className={styles.videoContainer}>
                <iframe
                    src="https://www.youtube.com/embed/4awPrCaNS9M?start=29"
                    title="Porady na quadzie"
                    allowFullScreen
                />
            </div>
            <div className={styles.videoContainer}>
                <iframe
                    src="https://www.youtube.com/embed/E8h9pqrele4?start=36"
                    title="Sprzęt"
                    allowFullScreen
                />
            </div>
        </div>
    </section>

<hr></hr>
    </>
  );
}