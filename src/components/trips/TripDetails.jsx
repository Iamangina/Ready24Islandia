import { useParams } from "react-router-dom";
import { useMemo, useState } from "react";

import photo1 from "../../assets/landscapes/land11.jpg"
import photo2 from "../../assets/landscapes/land10.jpg"
import photo3 from "../../assets/images/pho1.jpg"

import { useEffect, useRef } from "react";
import styles from "./TripDetails.module.css"

import star from "../../assets/icons/star.png"

import jacket from "../../assets/icons/jacket.png"
import boots from "../../assets/icons/boots.png"
import glove from "../../assets/icons/glove.png"
import smile from "../../assets/icons/smileIcon.png"

const prices = {
  training: {
    2: 30000,
    4: 50000,
    6: 60000,
  },
  offroad: {
    2: 25000,
    4: 40000,
    6: 50000,
  },
};

export default function TripDetails(){
const { id } = useParams();

const [option, setOption] = useState("training");
  const [hours, setHours] = useState(6);
  const [participants, setParticipants] = useState(1);
  const [date, setDate] = useState("");

  const totalPrice = useMemo(() => {
    return prices[option][hours] * participants;
  }, [option, hours, participants]);

  if (id === "wyjazd_1dzien") {
    return(
        <>
            <section className={styles.tripOneDayPage}>
                <div className={styles.todpBox}>
                    <p>Strona Główna &gt; Wyjazdy &gt; Wyjazd 1-dniowy</p>
                    <h1>WYJAZD 1-dniowy ze szkoleniem</h1>
                    <h2>Idealny wybór na rozpoczęcie przygody z quadami. Bezpieczna trasa, trening na torze i jazda w terenie
                        - wszsytko w jeden dzień.</h2>
                    <p>min. 2h</p>
                </div>
            </section>

            <section className={styles.trip1DayMain}>
                <main className={styles.trip1Main}>
                    <h1>O wyjeździe</h1>
                    <p>Ten wyjazd to idealne połączenie nauki i przygody. Zaczynamy od szkolenia na torze, gdzie poznasz quada, podstawy jazdy i techniki bezpieczeństwa.
                        Następnie ruszamy w teren, aby odkrywać krajobrazy Islandii. Program dostosowujemy do Twoich preferencji -
                        możesz wybrać więcej jazdy na torze lub terenie.
                    </p>
                    <div className={styles.trip1Icons}>
                        <div className={styles.trip1Icon}><img src={star}></img><p>Trening na torze</p></div>
                        <div className={styles.trip1Icon}><img src={star}></img><p>Jazda w terenie</p></div>
                        <div className={styles.trip1Icon}><img src={star}></img><p>Sprzęt i paliwo w cenie</p></div>
                    </div>
                </main>
                <section className={styles.tripPlan}>
                    <h2>Program wyjazdu</h2>
                    <div className={styles.tripStep}>
                        <p>○</p>
                        <p>10:00</p>
                        <div>
                            <h3>Spotkanie i szkolenie</h3>
                            <p>Przyjazd, powitanie, omówienie zasad bezpieczeństwa i dojazd na tor.</p>
                        </div>
                    </div>
                    <div className={styles.tripStep}>
                        <p>○</p>
                        <p>11:00</p>
                        <div>
                            <h3>Trening na torze</h3>
                            <p>Szkolenie na torze, nauka poprawnej pozycji na quadzie oraz technik jazdy quadem w terenie.</p>
                        </div>
                    </div>
                    <div className={styles.tripStep}>
                        <p>○</p>
                        <p>13:00</p>
                        <div>
                            <h3>Jazda w terenie</h3>
                            <p>Wyruszamy w trasę terenową - malownicze widoki, górskie szlaki i dzika Islandia.</p>
                        </div>
                    </div>
                    <div className={styles.tripStep}>
                        <p>○</p>
                        <p>14:00</p>
                        <div>
                            <h3>Powrót</h3>
                        </div>
                    </div>
                </section>
                
                <section className={styles.equipment}>
                    <h3>Co zabrać?</h3>
                    <div className={styles.allEquip}>
                        <div className={styles.wtt}>
                            <img src={jacket}></img>
                            <p>Wygodne ubranie odporne na brud</p>
                        </div>
                        <div className={styles.wtt}>
                            <img src={boots}></img>
                            <p>Buty motocyklowe, trekkingowe lub sportowe</p>
                        </div>
                        <div className={styles.wtt}>
                            <img src={glove}></img>
                            <p>Rękawice (jeśli masz)</p>
                        </div>
                        <div className={styles.wtt}>
                            <img src={smile}></img>
                            <p>Dobry humor i energię!</p>
                        </div>
                    </div>
                </section>

                <section className={styles.tripSide}>
                    <aside className={styles.bookingCard}>

                        <h2>Zarezerwuj swój wyjazd</h2>

                        <div className={styles.bookingSection}>
                            <h4>Wybierz preferencję</h4>

                            <div className={styles.optionGrid}>

                                <button
                                    className={`${styles.optionCard} ${
                                        option === "training" ? styles.active : ""
                                    }`}
                                    onClick={() => setOption("training")}
                                >
                                    <div className={styles.radio} />

                                    <h5>Trening na torze + jazda w terenie</h5>

                                    <p>Pełne doświadczenie</p>
                                </button>

                                <button
                                    className={`${styles.optionCard} ${
                                        option === "offroad" ? styles.active : ""
                                    }`}
                                    onClick={() => setOption("offroad")}
                                >
                                    <div className={styles.radio} />

                                    <h5>Więcej jazdy w terenie</h5>

                                    <p>Dłuższa trasa off-road</p>
                                </button>

                            </div>
                        </div>

                        <div className={styles.bookingSection}>
                            <h4>Czas trwania</h4>

                            <select
                                className={styles.select}
                                value={hours}
                                onChange={(e) => setHours(Number(e.target.value))}
                            >
                                <option value={2}>2 godziny</option>
                                <option value={4}>4 godziny</option>
                                <option value={6}>6 godzin</option>
                            </select>
                        </div>

                        <div className={styles.bookingSection}>
                            <h4>Data</h4>

                            <input
                                className={styles.input}
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </div>

                        <div className={styles.bookingSection}>
                            <h4>Liczba uczestników</h4>

                            <div className={styles.counter}>

                                <button
                                    className={styles.counterButton}
                                    onClick={() =>
                                        setParticipants((prev) => Math.max(1, prev - 1))
                                    }
                                >
                                    −
                                </button>

                                <span className={styles.counterValue}>
                                    {participants}
                                </span>

                                <button
                                    className={styles.counterButton}
                                    onClick={() =>
                                        setParticipants((prev) => Math.min(2, prev + 1))
                                    }
                                >
                                    +
                                </button>

                            </div>
                        </div>

                        <div className={styles.priceBox}>

                            <div className={styles.priceLabel}>
                                <h3>Cena</h3>
                            </div>

                            <div className={styles.price}>
                                {totalPrice.toLocaleString("is-IS")} kr
                            </div>

                            <span className={styles.priceInfo}>
                                {hours} godzin • {participants}{" "}
                                {participants === 1 ? "osoba" : "osoby"}
                            </span>

                        </div>

                        <button className={styles.primaryButton}>
                            Zarezerwuj teraz
                        </button>

                        <button className={styles.secondaryButton}>
                            Zapytaj o dostępność
                        </button>

                    </aside>
                </section>
            </section>
            <section className={styles.lastSection}>
                <div className={styles.photosBox}>
                    <h3>Galeria</h3>
                    <div className={styles.photos}>
                        <img src={photo1}></img>
                        <img src={photo2}></img>
                        <img src={photo3}></img>
                    </div>
                </div>
                <div className={styles.questions}>
                    <h3>Masz pytania?</h3>
                    <p>Skontaktuj się z nami - chętnie odpowiemy na wszystkie pytania!</p>
                    <p>ready24@ready24.is</p>
                </div>
            </section>
        </>
    )
  }

}


  ///<Link to="/wyjazdy/1dzien">