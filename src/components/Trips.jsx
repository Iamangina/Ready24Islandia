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


export default function Trips(){
    const [show, setShow] = useState(false);
    return (
        <>
            <section className={styles.tripsPage}>
                <div className={styles.tripsPageInfoBox}>
                    <p>Strona Główna &gt; Wyjazdy</p>
                    <h1>WYJAZDY NA QUADACH W ISLANDII</h1>
                    <h2>Odkryj Islandię z innej perspektywy. 
                        Wyjazdy quadowe skierowane głównie do osób posiadających już doświadczenie w jeździe. 
                        Każda trasa to niezapomniane widoki, emocje i bezpieczeństwo.</h2>
                </div>
            </section>

                <section className={styles.tripsPageSearch}>
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
                </section>

                <hr></hr>

                <section className={styles.tripsPageTrips}>
                    <h1>Wybierz swoją przygodę</h1>
                    <div className={styles.tripsPageAllTrips}>
                        <div className={styles.tripsPageTrip} id={styles.oneday}>
                            <h2>Wyjazd 1-dniowy ze szkoleniem</h2>
                            <p>min. 2h</p>
                            <h3>Idealny wybór jeżeli chcesz przetestować swoje umiejętności na torze, nauczyć się czegoś nowego a przy okazji dobrze się bawić.</h3>
                            <Link to="/wyjazdy/wyjazd_1dzien"><button> Zobacz szczegóły &gt;</button></Link>
                        </div>
                        <div className={styles.tripsPageTrip} id={styles.threedays}>
                            <h2>3-dniowa wyprawa</h2>
                            <p>3dni - Wkrótce </p>
                            <h3>Więcej przygód, więcej miejsc do odkrycia. Idealna dla osób z doświadczeniem.</h3>
                            <Link to="/wkrotce"><button> Zobacz szczegóły &gt;</button></Link>
                        </div>
                        <div className={styles.tripsPageTrip} id={styles.fivedays}>
                            <h2>5-dniowa wyprawa</h2>
                            <p>5dni - Wkrótce </p>
                            <h3>Najlepsze trasy, prawdziwa Islandia. Adrenalina i walka z samym sobą. Dla doświadczonych quadowców.</h3>
                            <Link to="/wkrotce"><button> Zobacz szczegóły &gt;</button></Link>
                        </div>
                    </div>
                </section>

                <hr></hr>

                <section className={styles.tripsPageSectionInfo}>
                    <h1>Dlaczego warto wybrać moje wyjazdy?</h1>
                    <div>
                        <div className={styles.tripsPageSect}>
                            <img src={safety}></img>
                            <h2>100% bezpieczeństwo</h2>
                            <p>Profesjonalne szkolenie, najlepszy sprzęt.</p>
                        </div>
                        <div className={styles.tripsPageSect}>
                            <img src={poepleIcon}></img>
                            <h2>Małe grupy</h2>
                            <p>Maksymalnie 2 osoby w grupie - indywidualne podejście</p>
                        </div>
                        <div className={styles.tripsPageSect}>
                            <img src={mapIcon}></img>
                            <h2>Sprawdzone Trasy</h2>
                            <p>Trasy, które znam doskonale i regularnie sprawdzam</p>
                        </div>
                        <div className={styles.tripsPageSect}>
                            <img src={miniQuad}></img>
                            <h2>Niezapomniane widoki</h2>
                            <p>Miejsca niedostępne dla zwykłych turystów. Gwarantowane emocje</p>
                        </div>
        
                    </div>
                </section>

                <hr></hr>

                <section className={styles.tripsPageBooking}>
                    <h1>Jak zarezerwować wyjazd?</h1>
                    <div>
                        <div className={styles.tripPageStep}>
                            <img src={calendarIcon}></img>
                            <h2>Wybierz Wyjazd</h2>
                            <p>Zobacz dostępne wyjazdy i wybierz idealny dla siebie.</p>
                        </div>
                        <div className={styles.tripPageStep}>
                            <img src={bookingIcon}></img>
                            <h2>Sprawdź termin</h2>
                            <p>Wybierz dogodny termin i liczbę uczestników</p>
                        </div>
                        <div className={styles.tripPageStep}>
                            <img src={paymentIcon}></img>
                            <h2>Zarezerwuj i zapłać</h2>
                            <p>Potwierdź rezerwacje i dokonaj płatności online</p>
                        </div>
                        <div className={styles.tripPageStep}>
                            <img src={quadIcon}></img>
                            <h2>Jedź i ciesz się!</h2>
                            <p>Przyjedź gotowy na przygodę. My zajmiemy się resztą.</p>
                        </div>
                    </div>
                </section>
 
                <hr></hr>

                <section className={styles.tripsPageQuestions}>
                    <h1>Masz pytania?</h1>
                    <p>Nie wiesz, który wyjazd wybrać? Skontaktuj się ze mną, pomogę Ci znaleźć idealną przygodę!</p>
                    <button onClick={() => setShow(true)}>Skontaktuj się</button>
                        {show && <p>📧 ready24@ready24.is.com</p>}
                </section>
            
        </>
    );
}