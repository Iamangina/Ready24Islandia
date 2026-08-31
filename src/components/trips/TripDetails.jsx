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

import { useTranslation } from "react-i18next";

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

    const { t } = useTranslation();

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
      throw new Error("Error");
    }

    setStep(3);
  } catch (err) {
    setError(t("trip1Details.about.data.error"));
  } finally {
    setLoading(false);
  }
};

  if (id === "wyjazd_1dzien") {
    return(
        <>
            <section className={styles.tripOneDayPage}>
                <div className={styles.todpBox}>
                    <p>{t("trip1Details.p")}</p>
                    <h1>{t("trip1Details.h1")}</h1>
                    <h2>{t("trip1Details.descr")}</h2>
                    <p>{t("trip1Details.time")}</p>
                </div>
            </section>

            <section className={styles.trip1DayMain}>
                <main className={styles.trip1Main}>
                    <h1>{t("trip1Details.about.h1")}</h1>
                    <p>{t("trip1Details.about.p")}
                    </p>
                    <div className={styles.trip1Icons}>
                        <div className={styles.trip1Icon}><img src={star}></img><p>{t("trip1Details.about.icons.one")}</p></div>
                        <div className={styles.trip1Icon}><img src={star}></img><p>{t("trip1Details.about.icons.two")}</p></div>
                        <div className={styles.trip1Icon}><img src={star}></img><p>{t("trip1Details.about.icons.three")}</p></div>
                    </div>
                </main>
                <section className={styles.tripPlan}>
                    <h2>{t("trip1Details.about.program.h2")}</h2>
                    <div className={styles.tripStep}>
                        <p>○</p>
                        <p>10:00</p>
                        <div>
                            <h3>{t("trip1Details.about.program.step1.h3")}</h3>
                            <p>{t("trip1Details.about.program.step1.p")}</p>
                        </div>
                    </div>
                    <div className={styles.tripStep}>
                        <p>○</p>
                        <p>11:00</p>
                        <div>
                            <h3>{t("trip1Details.about.program.step2.h3")}</h3>
                            <p>{t("trip1Details.about.program.step2.p")}</p>
                        </div>
                    </div>
                    <div className={styles.tripStep}>
                        <p>○</p>
                        <p>13:00</p>
                        <div>
                            <h3>{t("trip1Details.about.program.step3.h3")}</h3>
                            <p>{t("trip1Details.about.program.step3.p")}</p>
                        </div>
                    </div>
                    <div className={styles.tripStep}>
                        <p>○</p>
                        <p>14:00</p>
                        <div>
                            <h3>{t("trip1Details.about.program.step4.h3")}</h3>
                        </div>
                    </div>
                </section>
                 
                <section className={styles.equipment}>
                    <h3>{t("trip1Details.about.equipment.h3")}</h3>
                    <div className={styles.allEquip}>
                        <div className={styles.wtt}>
                            <img src={jacket}></img>
                            <p>{t("trip1Details.about.equipment.one")}</p>
                        </div>
                        <div className={styles.wtt}>
                            <img src={boots}></img>
                            <p>{t("trip1Details.about.equipment.two")}</p>
                        </div>
                        <div className={styles.wtt}>
                            <img src={glove}></img>
                            <p>{t("trip1Details.about.equipment.three")}</p>
                        </div>
                        <div className={styles.wtt}>
                            <img src={smile}></img>
                            <p>{t("trip1Details.about.equipment.four")}</p>
                        </div>
                    </div>
                </section>
                <section className={styles.tripSide}>
                    <aside className={styles.bookingCard}>

                {step === 1 ? (
                    <>
                        <h2>{t("trip1Details.about.form.h2")}</h2>

                        <div className={styles.bookingSection}>
                            <h4>{t("trip1Details.about.form.h4")}</h4>

                            <div className={styles.optionGrid}>

                                <button
                                    className={`${styles.optionCard} ${
                                        option === "training" ? styles.active : ""
                                    }`}
                                    onClick={() => setOption("training")}
                                >
                                    <div className={styles.radio} />

                                    <h5>{t("trip1Details.about.form.option1.h5")}</h5>

                                    <p>{t("trip1Details.about.form.option1.p")}</p>
                                </button>

                                <button
                                    className={`${styles.optionCard} ${
                                        option === "offroad" ? styles.active : ""
                                    }`}
                                    onClick={() => setOption("offroad")}
                                >
                                    <div className={styles.radio} />

                                    <h5>{t("trip1Details.about.form.option2.h5")}</h5>

                                    <p>{t("trip1Details.about.form.option2.p")}</p>
                                </button>

                            </div>
                        </div>

                        <div className={styles.bookingSection}>
                            <h4>{t("trip1Details.about.time")}</h4>

                            <select
                                className={styles.select}
                                value={hours}
                                onChange={(e) => setHours(Number(e.target.value))}
                            >
                                <option value={2}>{t("trip1Details.about.twoh")}</option>
                                <option value={4}>{t("trip1Details.about.fourh")}</option>
                                <option value={6}>{t("trip1Details.about.sixh")}</option>
                            </select>
                        </div>

                        <div className={styles.levelSection}>
                            <h4>{t("trip1Details.about.level")}</h4>

                            <select className={styles.level} value="level">
                                <option value="explorer">Explorer</option>
                                <option value="adventurer">Adventurer</option>
                                <option value="extremeRider">Extreme Rider</option>
                            </select>
                        </div>

                        <div className={styles.bookingSection}>
                            <h4>{t("trip1Details.about.date")}</h4>

                            <input
                                className={styles.input}
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </div>

                        <div className={styles.bookingSection}>
                            <h4>{t("trip1Details.about.particip")}</h4>

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
                                <h3>{t("trip1Details.about.price")}</h3>
                            </div>

                            <div className={styles.price}>
                                {totalPrice.toLocaleString("is-IS")} kr
                            </div>

                            <span className={styles.priceInfo}>
                                {hours} hours • {participants}{" "}
                                {participants === 1 ? "person" : "people"}
                            </span>

                        </div>

                        <button
                            className={styles.primaryButton}
                            onClick={() => {
                                if (!date || !hours || !option) return;
                                setStep(2);
                            }}
                        >
                            {t("trip1Details.about.book")}
                        </button>
                    </>
                ) : step === 2 ? (
                    <>
                        <h2>{t("trip1Details.about.data.h2")}</h2>

                        <div className={styles.bookingSection}>
                            <h4>{t("trip1Details.about.data.email")}</h4>
                            <input
                                className={styles.input}
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder={t("trip1Details.about.data.email")}
                            />
                        </div>

                        <div className={styles.bookingSection}>
                            <h4>{t("trip1Details.about.data.phone")}</h4>
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
                                <h4>{t("trip1Details.about.data.names")} {index + 1}</h4>

                                <input
                                    className={styles.input}
                                    type="text"
                                    value={participantsData[index]?.fullName || ""}
                                    onChange={(e) => {
                                        const updated = [...participantsData];
                                        updated[index].fullName = e.target.value;
                                        setParticipantsData(updated);
                                    }}
                                    placeholder={t("trip1Details.about.data.names")}
                                />
                            </div>
                        ))}

                        <div className={styles.priceBox}>

                            <div className={styles.priceLabel}>
                                <h3>{t("trip1Details.about.data.price")}</h3>
                            </div>

                            <div className={styles.price}>
                                {totalPrice.toLocaleString("is-IS")} kr
                            </div>

                            <span className={styles.priceInfo}>
                                {hours} hours • {participants}{" "}
                                {participants === 1 ? "person" : "people"}
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
                            {loading ? t("trip1Details.about.data.sending") : t("trip1Details.about.data.btnSubmit")}
                        </button>

                        <button
                            className={styles.counterButton}
                            style={{ marginTop: "12px", width: "100%" }}
                            onClick={() => setStep(1)}
                        >
                            {t("trip1Details.about.data.btnReturn")}
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
                            <h2>{t("trip1Details.about.thankyou")}</h2>

                            <p
                                style={{
                                    marginTop: "20px",
                                    lineHeight: "1.7",
                                }}
                            >
                               {t("trip1Details.about.form.confirm1")}
                                <br />
                                {t("trip1Details.about.form.confirm2")}
                            </p>

                            <button
                                className={styles.primaryButton}
                                style={{ marginTop: "30px" }}
                                onClick={() => setStep(1)}
                            >
                                {t("trip1Details.about.new")}
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
                    <h3>{t("trip1Details.about.gallery")}</h3>
                    <div className={styles.photos}>
                        <img src={photo1}></img>
                        <img src={photo2}></img>
                        <img src={photo3}></img>
                    </div>
                </div>
                <div className={styles.questions}>
                    <h3>{t("trip1Details.about.questions.h3")}</h3>
                    <p>{t("trip1Details.about.questions.p")}</p>
                    <p>ready24@ready24.is</p>
                </div>
            </section>
        </>
    )
  }

}