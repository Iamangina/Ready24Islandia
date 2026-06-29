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

export default function Homepage() {
    
  return (
    <>
                                        {/* Pierwsza sekcja, filmik */}
    <video autoPlay muted loop playsInline className={styles.main_video}>
                <source src={mainVideo} type="video/mp4"/>
    </video>
    <div className={styles.mainBox}>
        <main>
            <div className={styles.mainText}>
                <h1 className={styles.mainTitle}>
                    <span>WYJAZDY</span> 
                    <span>NA QUADACH</span> 
                    <span className={styles.mainTitleSmall}>W ISLANDII</span> 
                </h1>
                <p>Wyjazdy quadami po dzikiej Islandii. Trening, adrenalina, przygoda - w małych grupach, z pasją.</p>
                <button className={styles.btnMain}>
                    <Link className={styles.btnLinkMain} to="/wyjazdy">ZOBACZ WIĘCEJ</Link>
                </button>
            </div> 
        </main>
    </div>

    <hr></hr>

                                            {/* Sekcja informacyjna */}

    <section className={styles.sectionInfo}>
        <div className={styles.sectionText}>
            <h1>Jeżdżę na quadach na co dzień. Prowadzę wyjazdy i pokazuję prawdziwą Islandię.</h1>
            <p>To nie są typowe przejażdżki po wyznaczonych ścieżkach. Wyprawy skierowane są przede wszystkim do osób, które czują się pewnie za kierownicą quada i szukają prawdziwej terenowej przygody. 
                Trasy prowadzą przez różnorodne islandzkie krajobrazy, a ich przebieg dostosowywany jest do warunków i możliwości grupy, zapewniając maksymalnie satysfakcjonujące doświadczenie.</p>
        </div>

        <div className={styles.sectionIcons}>
            <div className={styles.miniIconBox}>
                <img src={miniQuadIcon} className={styles.miniIcon}></img>
                <p>Niezapomniane wrażenia, przygoda i wyzwanie</p>
            </div>
            <div className={styles.miniIconBox}>
                <img src={peopleIcon} className={styles.miniIcon}></img>
                <p>Maksymalnie 2 osobowa grupa, indywidualne podejście</p>
            </div>
            <div className={styles.miniIconBox}>
                <img src={star} className={styles.miniIcon}></img>
                <p>100% pasji i bezpieczeństwa</p>
            </div>
        </div>
        <div className={styles.sideSection}>
            <Link className={styles.btnLinkMain} to="/wyjazdy/wyjazd_1dzien">
                <div className={styles.sideIconBox}>
                    <img src={quadIcon} className={styles.sideIcon}></img>
                    <div className={styles.textSideSection}>
                        <h1 className={styles.titleSideSection}>
                            1-dniowy wyjazd ze szkoleniem
                        </h1>
                        <p className={styles.infoSideSection}>
                            Jazda łącząca teorię i praktykę na torze oraz w terenie. Idealny na start.
                        </p>
                    </div>
                </div>
            </Link>
            <Link className={styles.btnLinkMain} to="/wkrotce">
            <div className={styles.sideIconBox}>
                <img src={offRoad} className={styles.sideIcon}></img>
                <div className={styles.textSideSection}>
                    <h1 className={styles.titleSideSection}>
                        3-dniowa wyprawa
                    </h1>
                    <p className={styles.sectionSoon}>Wkrótce</p>
                    <p className={styles.infoSideSection}>
                        Trzy dni jazdy, przygód i islandzkich krajobrazów. Szczegóły już wkrótce.
                    </p>
                </div>
            </div>
            </Link>
            <Link className={styles.btnLinkMain} to="/wkrotce">
            <div className={styles.sideIconBox}>
                <img src={offRoad} className={styles.sideIcon}></img>
                <div className={styles.textSideSection}>
                    <h1 className={styles.titleSideSection}>
                        5-dniowa wyprawa
                    </h1>
                    <p className={styles.sectionSoon}>Wkrótce</p>
                    <p className={styles.infoSideSection}>
                        Jeszcze więcej tereniu, wyzwań i niezapomnianych miejsc. Bądź na bieżąco!
                    </p>
                </div>
            </div>
            </Link>
        </div>
    </section>

    <hr></hr>

                                    {/* Sekcja tłumacząca rezerwacje */}

    <section className={styles.booking}>
        <h1>Rezerwacja w 3 prostych krokach</h1>
        <div className={styles.steps}>
            <div className={styles.step}>
                <img src={tripIcon}></img>
                <div className={styles.stepText}>
                    <h1>Wybierz wyjazd</h1>
                    <p>Zdecyduj, która przygoda jest dla Ciebie</p>
                </div>
            </div>
            <div className={styles.step}>
                <img src={calendarIcon}></img>
                <div className={styles.stepText}>
                    <h1>Dopasuj termin</h1>
                    <p>WYbierz dogodny termin i liczbę uczestników</p>
                </div>
            </div>
            <div className={styles.step}>
                <img src={bookingIcon}></img>
                <div className={styles.stepText}>
                    <h1>Zarezerwuj i jedź</h1>
                    <p>Potwierdź rezerwacje i ruszaj na przygode</p>
                </div>
            </div>
        </div>
    </section>

    <hr></hr>

                                                    {/* Wyjazdy */}

    <section className={styles.trips}>
        <div className={styles.tripsInfo}>
            <h1>Wyjazdy na quadach</h1>
            <p>Od szkolenia po wielodniowe wyprawy po dzikiej islandii.</p>
            <button ><Link className={styles.btnLinkMain} to="/wyjazdy">ZOBACZ WIĘCEJ</Link></button>
        </div>
        <div className={styles.trip}>
            <img src={trip1}></img>
            <div className={styles.textTrip}>
                <h2>Wyjazd 1-dniowy ze szkoleniem</h2>
                <p>Szkolenie teoretyczne i praktyczne na torze, jazda w terenie.</p>
            </div>
        </div>
        <div className={styles.trip}>
            <img src={trip3}></img>
            <div className={styles.textTrip}>
                <h2>3-dniowa wyprawa</h2>
                    <p>Wkrótce</p>
                    <p>Więcej przygód, więcej miejsc. Szczegóły już wkrótce.</p>
            </div>
        </div>
        <div className={styles.trip}>
            <img src={trip5}></img>
            <div className={styles.textTrip}>
                <h2>5-dniowa wyprawa</h2>
                    <p>Wkrótce</p>
                    <p>Najlpesze trasy, prawdziwa, dzika Islandia. </p>
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
            Dostępne quady
        </h1>
        <div className={styles.quads}>
            <div className={styles.quad}>
                <img src={renegade}></img>
                <div>
                    <h2>2 x Renegade 650</h2>
                    <p>Mocny, zwinny i stworzony do jazdy w trudnym terenie.</p>
                    <p>1 osoba</p>
                </div>
            </div>
            <div className={styles.quad}>
                <img src={outlander}></img>
                <div>
                    <h2>1 x Outlander 650</h2>
                    <p>Stabilny, komfortowy i niezawodny w każdych warunkach.</p>
                    <p>2 osoby</p>
                </div>
            </div>
        </div>
    </section>

    <hr></hr>

                                             {/* Youtube */}

   <section className={styles.youtube}>
        <h1 className={styles.sectionYoutubeTitle}>
            Kanał na YouTubie
        </h1>
        <p>
            Zobacz techniki jazdy, porady, sprzęt którego używam i wiele więcej.
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