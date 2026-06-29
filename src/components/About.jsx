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

export default function About(){
    return(
    <>
    <section className={styles.aboutPage}>
        <div className={styles.aboutBox}>
            <p>Strona Główna &gt; O mnie</p>
            <h1>O MNIE</h1>
            <h2>"V" mam na imię Artur i zawodowo jeżdzę na quadzie w Islandii. Tworzę wyjazdy, które łączą adrenaline, piękne widoki i bezpieczeństwo.</h2>
        </div>
    </section>

    <section className={styles.myStoryBox}>
        <img src={me}></img>
        <div className={styles.myStory}>
            <p>MOJA HISTORIA</p>
            <h2>Jak zaczęła się moja przygoda z quadami na Islandii?</h2>
            <p>
                <span>Moja przygoda z quadami rozpoczęła się 5 lat temu właśnie tutaj, na Islandii. Początkowo pracowałem w jednej z komercyjnych firm, prowadząc proste wycieczki dla turystów, ale z czasem pojawiła się potrzeba stworzenia czegoś bardziej autentycznego — pokazania Islandii i jazdy na quadach tak, jak sam ją odbieram.
                </span>
                <span>Islandia od początku zrobiła na mnie ogromne wrażenie swoją surową naturą, bezkresną przestrzenią i nieustanną zmiennością krajobrazów. To właśnie ta wyjątkowa sceneria stała się inspiracją do przekształcenia pasji w sposób na życie i tworzenia wyjazdów dla osób, które chcą odkrywać Islandię z zupełnie innej perspektywy — zza kierownicy quada.
                Równolegle prowadzę treningi, dzięki którym stale doskonalę technikę jazdy i lepiej poznaję sprzęt, tak aby żaden podjazd, trawers czy trudny odcinek nie zatrzymywał nas w miejscu.
                </span>
                <span>
                Na co dzień mieszkam na Islandii i nieustannie eksploruję nowe trasy, sprawdzam warunki i dbam o to, by każdy wyjazd był bezpieczny, dynamiczny i przede wszystkim niezapomniany.
                </span>
                </p>
        </div>
    </section>

    <hr></hr>

    <section className={styles.valuesBox}>
        <h2>Moje wartości</h2>
        <div className={styles.values}>
            <div className={styles.value}>
                <img src={safety}></img>
                <h3>Bezpieczeństwo przede wszystkim</h3>
                <p>Stawiam na najwyższe standardy bezpieczeństwa, profesjonalny sprzęt i dokładnie szkolenia.</p>
            </div>
            <div className={styles.value}>
                <img src={people}></img>
                <h3>Indywidualne podejście</h3>
                <p>Małe grupy max.2 osoby</p>
            </div>
            <div className={styles.value}>
                <img src={mapIcon}></img>
                <h3>Autentyczne doświadczenia</h3>
                <p>Sprawdzone trasy, z dala od tłumów - tam, gdzie Islandia pokazuje swój prawdziwy charakter.</p>
            </div>
            <div className={styles.value}>
                <img src={smileIcon}></img>
                <h3>Pasja i zaangażowanie</h3>
                <p>To, co robię, jest moją pasją. Dzielę się wiedzą i chętnie odpowiem na wszystkie pytania dotyczące quadów czy Islandii.</p>
            </div>
        </div>
    </section>

    <hr></hr>

    <section className={styles.aboutMe}>
        <div className={styles.aboutMeText}>
            <h2>
                Poza quadami
            </h2>
            <p>Poza quadami interesuję się szeroko pojętym sprzętem outdoorowym — testuję i sprawdzam jego praktyczność w realnych warunkach. 
                Pasjonują mnie scyzoryki i noże, 
                a także współprowadzę sklep internetowy z produktami Victorinox.
                Dodatkowo prowadzę kanał na YouTube, gdzie dzielę się swoimi doświadczeniami i wiedzą związaną z quadami.</p>
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
                    <h1>Masz pytania?</h1>
                    <p>Skontaktuj się ze mną, chętnie odpowiem na wszystkie pytania!</p>
                    <p>ready24@ready24.is</p>
    </section>
    </>
    )
}