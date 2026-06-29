import styles from "./Training.module.css"

import quad from "../assets/icons/miniQuadIcon.png"
import safety from "../assets/icons/safetyIcon.png"
import star from "../assets/icons/star.png"

export default function Training(){
    return(
        <>
        <section className={styles.trainingPage}>
                <div className={styles.trainingBox}>
                    <p>Strona Główna &gt; Szkolenia</p>
                    <h1>TRENING NA TORZE</h1>
                    <h2>Treining na torze to idealna okazja, by rozwinąć swoje umiejętności, poznać możliwoś
                        quada i poczuć prawdziwą kontrolę w każdych warukach.
                    </h2>
                </div>
        </section>

        <section className={styles.trainingDescr}>
            <h2>Co to jest trening na torze?</h2>
            <p>To praktyczne zajęcia prowadzone przez doświadczonego instruktora, które pomogą Ci lepiej
                panować nad quadem w bezpiecznym, kontrolowanym środowisku. Niezależnie od poziomu zaawansowania - 
                znajdziesz coś dla siebie!
            </p>
            <div className={styles.trainingIcons}>
                <div className={styles.trainingIcon}>
                    <img src={quad}></img>
                    <h3>Kontrola i technika</h3>
                    <p>Naucz się precyzyjnego prowadzenia, pokonywania zakrętów i odpowiedniej pozycji.</p>
                </div>
                <div className={styles.trainingIcon}>
                    <img src={safety}></img>
                    <h3>Bezpieczne środowisko</h3>
                    <p>Ćwicz w kontrolowanych warunkach z doświadczonym instruktorem.</p>
                </div>
                <div className={styles.trainingIcon}>
                    <img src={star}></img>
                    <h3>Dla każdego poziomu</h3>
                    <p>Zarówno dla początkujących, jak i zaawansowanych pasjonatów quadów.</p>
                </div>
            </div>
        </section>

        <hr></hr>

        <section className={styles.trainings}>
            <div className={styles.trainingText}>
                <h2>Zobacz trening w akcji</h2>
                <a href="https://www.youtube.com/@ready24islandia">Zobacz więcej na Youtube</a>
            </div>
            <div className={styles.videos}>
                <div className={styles.video}>
                    <iframe
                        src="https://www.youtube.com/embed/6dVvDP1P2ug?start=782"
                        title="Trening na quadzie"
                        allowFullScreen
                    />
                    <p>Ćwiczenie „ósemka” na utrzymanie biegłości i poprawę techniki jazdy quadem.</p>
                 </div>
                 <div className={styles.video}>
                    <iframe
                        src="https://www.youtube.com/embed/4awPrCaNS9M"
                        title="Trening na quadzie"
                        allowFullScreen
                    />
                    <p>Jeden ze sposobów na pokonanie mitycznej kłody/beczki.</p>
                 </div>  
                 <div className={styles.video}>
                    <iframe
                        src="https://www.youtube.com/embed/NL6rNtuTzyA"
                        title="Trening na quadzie"
                        allowFullScreen
                    />
                    <p>Wykorzystanie pachołków do praktycznych ćwiczeń jazdy: trawers i przejazd przez bramkę.</p>
                 </div>    
            </div>
        </section>

        <hr></hr>

        <section className={styles.trainingQuestions}>
                <h1>Masz pytania?</h1>
                <p>Skontaktuj się ze mną, chętnie odpowiem na wszystkie pytania!</p>
                <p>ready24@ready24.is</p>
        </section>
        </>
    )
}



