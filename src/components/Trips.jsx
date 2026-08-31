import styles from "./Trips.module.css"
import { Outlet, Link } from "react-router-dom";
import { useState } from "react"

import safety from "../assets/icons/safetyIcon.png"
import mapIcon from "../assets/icons/mapIcon.png"
import poepleIcon from "../assets/icons/peopleIcon.png"
import miniQuad from "../assets/icons/miniQuadIcon.png"

import quadIcon from "../assets/icons/quadIcon.png"
import calendarIcon from "../assets/icons/calendarIcon.png"
import bookingIcon from "../assets/icons/bookingIcon.png"
import paymentIcon from "../assets/icons/paymentIcon.png"

import { useTranslation } from "react-i18next";


export default function Trips(){

    const { t } = useTranslation();
    const [show, setShow] = useState(false);
    return (
        <>
            <section className={styles.tripsPage}>
                <div className={styles.tripsPageInfoBox}>
                    <p>{t("trips.p")}</p>
                    <h1>{t("trips.h1")}</h1>
                    <h2>{t("trips.h2")}</h2>
                </div>
            </section>

                {/* <section className={styles.tripsPageSearch}>
                    <form method="GET" action="/wyjazdy">

                        <div>
                            <label for="trip">Długość wyjazdu</label>
                            <select name="trip" id="trip" className={styles.select}>
                                <option value="" disabled selected>Wybierz</option>
                                <option value="1day">1 dzień</option>
                            </select>
                        </div>
                        <div>
                            <label for="level">Poziom trudności</label>
                            <select name="level" id="level" className={styles.select}> 
                                <option value="" disabled selected>Wybierz</option>
                                <option value="explorer">Explorer</option>
                                <option value="adventurer">Adventurer</option>
                                <option value="extreme">Extreme Rider</option>
                            </select>
                        </div>
                        <div>
                            <label for="people">Liczba osób</label>
                            <select name="people" id="people" className={styles.select}>
                                <option value="" disabled selected>Wybierz</option>
                                <option value="1">1 osoba</option>
                                <option value="2">2 osoby</option>
                            </select>
                        </div>
                        <Link to="/wyjazdy/wyjazd_1dzien"><button type="">Szukaj wyjazdu</button></Link>

                    </form>
                </section> */}

                <hr></hr>

                <section className={styles.tripsPageTrips}>
                    <h1>{t("trips.tripsChoose.title")}</h1>
                    <div className={styles.tripsPageAllTrips}>
                        <div className={styles.tripsPageTrip} id={styles.oneday}>
                            <h2>{t("trips.tripsChoose.one.h2")}</h2>
                            <p>{t("trips.tripsChoose.one.time")}</p>
                            <h3>{t("trips.tripsChoose.one.h3")}</h3>
                            <Link to="/wyjazdy/wyjazd_1dzien"><button> {t("trips.tripsChoose.btn")} &gt;</button></Link>
                        </div>
                        <div className={styles.tripsPageTrip} id={styles.threedays}>
                            <h2>{t("trips.tripsChoose.three.h2")}</h2>
                            <p>{t("trips.tripsChoose.three.time")}</p>
                            <h3>{t("trips.tripsChoose.three.h3")}</h3>
                            <Link to="/wkrotce"><button> {t("trips.tripsChoose.btn")} &gt;</button></Link>
                        </div>
                        <div className={styles.tripsPageTrip} id={styles.fivedays}>
                            <h2>{t("trips.tripsChoose.five.h2")}</h2>
                            <p>{t("trips.tripsChoose.five.time")}</p>
                            <h3>{t("trips.tripsChoose.five.h3")}</h3>
                            <Link to="/wkrotce"><button> {t("trips.tripsChoose.btn")} &gt;</button></Link>
                        </div>
                    </div>
                </section>

                <hr></hr>

                <section className={styles.tripsPageSectionInfo}>
                    <h1>{t("trips.tripsInfo.h1")}</h1>
                    <div>
                        <div className={styles.tripsPageSect}>
                            <img src={safety}></img>
                            <div>
                                <h2>{t("trips.tripsInfo.tripsReasons.one.h2")}</h2>
                                <p>{t("trips.tripsInfo.tripsReasons.one.p")}</p>
                            </div>
                        </div>
                        <div className={styles.tripsPageSect}>
                            <img src={poepleIcon}></img>
                            <div>
                                <h2>{t("trips.tripsInfo.tripsReasons.two.h2")}</h2>
                                <p>{t("trips.tripsInfo.tripsReasons.two.p")}</p>
                            </div>
                        </div>
                        <div className={styles.tripsPageSect}>
                            <img src={mapIcon}></img>
                            <div>
                                <h2>{t("trips.tripsInfo.tripsReasons.three.h2")}</h2>
                                <p>{t("trips.tripsInfo.tripsReasons.three.p")}</p>
                            </div>
                        </div>
                        <div className={styles.tripsPageSect}>
                            <img src={miniQuad}></img>
                            <div>
                                <h2>{t("trips.tripsInfo.tripsReasons.four.h2")}</h2>
                                <p>{t("trips.tripsInfo.tripsReasons.four.p")}</p>
                            </div>
                        </div>
        
                    </div>
                </section>

                <hr></hr>

                <section className={styles.tripsPageBooking}>
                    <h1>{t("trips.tripsBooking.h1")}</h1>
                    <div>
                        <div className={styles.tripPageStep}>
                            <img src={calendarIcon}></img>
                            <div>
                                <h2>{t("trips.tripsBooking.steps.one.h2")}</h2>
                                <p>{t("trips.tripsBooking.steps.one.p")}</p>
                            </div>
                        </div>
                        <div className={styles.tripPageStep}>
                            <img src={bookingIcon}></img>
                            <div>
                                <h2>{t("trips.tripsBooking.steps.two.h2")}</h2>
                                <p>{t("trips.tripsBooking.steps.two.p")}</p>
                            </div>
                        </div>
                        <div className={styles.tripPageStep}>
                            <img src={paymentIcon}></img>
                            <div>
                                <h2>{t("trips.tripsBooking.steps.three.h2")}</h2>
                                <p>{t("trips.tripsBooking.steps.three.p")}</p>
                            </div>
                        </div>
                        <div className={styles.tripPageStep}>
                            <img src={quadIcon}></img>
                            <div>
                                <h2>{t("trips.tripsBooking.steps.four.h2")}</h2>
                                <p>{t("trips.tripsBooking.steps.four.p")}</p>
                            </div>
                        </div>
                    </div>
                </section>
 
                <hr></hr>

                <section className={styles.tripsPageQuestions}>
                    <h1>{t("trips.tripsQuestions.h1")}</h1>
                    <p>{t("trips.tripsQuestions.p")}</p>
                    <button onClick={() => setShow(true)}>{t("trips.tripsQuestions.btn")}</button>
                        {show && <p>📧 {t("trips.tripsQuestions.email")}</p>}
                </section>
            
        </>
    );
}