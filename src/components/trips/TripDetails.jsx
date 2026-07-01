import { useParams } from "react-router-dom";
import { useMemo, useState } from "react";

import photo1 from "../../assets/landscapes/land11.jpg"
import photo2 from "../../assets/landscapes/land10.jpg"
import photo3 from "../../assets/images/pho1.jpg"
import photo4 from "../../assets/landscapes/land8.jpg"
import photo5 from "../../assets/landscapes/land9.jpg"
import photo6 from "../../assets/images/pho2.jpg"

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

const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");

const [participantsData, setParticipantsData] = useState([
  {
    fullName: "",
  },
]);

const [loading, setLoading] = useState(false);
const [error, setError] = useState("");

const { id } = useParams();

const [option, setOption] = useState("training");
  const [hours, setHours] = useState(6);
  const [participants, setParticipants] = useState(1);
  const [date, setDate] = useState("");
  const [step, setStep] = useState(1);

  const totalPrice = useMemo(() => {
    return prices[option][hours] * participants;
  }, [option, hours, participants]);

  const handleBooking = async () => {
  setError("");
  setLoading(true);

  const booking = {
    trip: id,
    option,
    hours,
    date,
    participants,

    email,
    phone,

    participantsData,

    totalPrice,
  };

  try {

    const response = await fetch("http://localhost:5000/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(booking),
    });

    if (!response.ok) {
      throw new Error("Błąd serwera");
    }

    setStep(3);
  } catch (err) {
    setError("Nie udało się wysłać formularza.");
  } finally {
    setLoading(false);
  }
};

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

                {step === 1 ? (
                    <>
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

                        <div className={styles.levelSection}>
                            <h4>Poziom trudności</h4>

                            <select className={styles.level} value="level">
                                <option value="explorer">Explorer</option>
                                <option value="adventurer">Adventurer</option>
                                <option value="extremeRider">Extreme Rider</option>
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

                        <button
                            className={styles.primaryButton}
                            onClick={() => {
                                if (!date || !hours || !option) return;
                                setStep(2);
                            }}
                        >
                            Zarezerwuj teraz
                        </button>
                    </>
                ) : step === 2 ? (
                    <>
                        <h2>Dane rezerwacji</h2>

                        <div className={styles.bookingSection}>
                            <h4>Adres e-mail</h4>
                            <input
                                className={styles.input}
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Twój adres e-mail"
                            />
                        </div>

                        <div className={styles.bookingSection}>
                            <h4>Numer telefonu</h4>
                            <input
                                className={styles.input}
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="+354..."
                            />
                        </div>

                        {Array.from({ length: participants }).map((_, index) => (
                            <div
                                className={styles.bookingSection}
                                key={index}
                            >
                                <h4>Imię i nazwisko uczestnika x {index + 1}</h4>

                                <input
                                    className={styles.input}
                                    type="text"
                                    value={participantsData[index]?.fullName || ""}
                                    onChange={(e) => {
                                        const updated = [...participantsData];
                                        updated[index].fullName = e.target.value;
                                        setParticipantsData(updated);
                                    }}
                                    placeholder="Imię i nazwisko uczestnika"
                                />
                            </div>
                        ))}

                        <div className={styles.priceBox}>

                            <div className={styles.priceLabel}>
                                <h3>Do zapłaty</h3>
                            </div>

                            <div className={styles.price}>
                                {totalPrice.toLocaleString("is-IS")} kr
                            </div>

                            <span className={styles.priceInfo}>
                                {hours} godzin • {participants}{" "}
                                {participants === 1 ? "osoba" : "osoby"}
                            </span>

                        </div>
                        {error && (
                            <p style={{ color: "red", marginBottom: 15 }}>
                                {error}
                            </p>
                        )}
                        <button
                            className={styles.primaryButton}
                            onClick={handleBooking}
                            disabled={loading}
                        >
                            {loading ? "Wysyłanie..." : "Potwierdź rezerwację"}
                        </button>

                        <button
                            className={styles.counterButton}
                            style={{ marginTop: "12px", width: "100%" }}
                            onClick={() => setStep(1)}
                        >
                            Wróć
                        </button>
                    </>
                ) : (
                    <>
                        <div
                            style={{
                                textAlign: "center",
                                padding: "30px 10px",
                            }}
                        >
                            <h2>Dziękujemy!</h2>

                            <p
                                style={{
                                    marginTop: "20px",
                                    lineHeight: "1.7",
                                }}
                            >
                                Dziękujemy za wysłanie formularza.
                                <br />
                                Skontaktujemy się z Tobą najszybciej, jak to
                                możliwe, aby potwierdzić rezerwację oraz
                                przekazać wszystkie szczegóły wyjazdu.
                            </p>

                            <button
                                className={styles.primaryButton}
                                style={{ marginTop: "30px" }}
                                onClick={() => setStep(1)}
                            >
                                Nowa rezerwacja
                            </button>
                            <div className={styles.photosForm}>
                                <img className={styles.photoForm} src={photo4}></img>
                                <img className={styles.photoForm} src={photo5}></img>
                                <img className={styles.photoForm} src={photo6}></img>
                            </div>
                        </div>
                    </>
                )}

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