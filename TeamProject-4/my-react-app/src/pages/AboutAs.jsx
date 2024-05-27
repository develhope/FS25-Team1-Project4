import React from 'react';
import BackgroundImage from '../components/BackgroundImage';
import { NavbarDefault } from '../components/NavbarDefault';
import Logo from '../assets/LogoDefinitivo-removebg-preview.png';

export default function AboutAs() {
    return (
        <div>
            <BackgroundImage />
            <NavbarDefault />
            <div className="absolute top-[2rem] m-[130px] text-lg bg-gradient-to-r from-green-400 to-cyan-300 p-[30px] rounded-[20px]">
                <h1 className="text-3xl flex">
                    Benvenuti in CodeVerse <img src={Logo} alt="logo" className="w-12 h-12" />
                </h1>
                <br />
                <p>
                    <b>La nostra storia: </b>
                    CodeVerse è nata dalla passione per l'apprendimento e la tecnologia. Fondata nel 2024, siamo diventati rapidamente una risorsa
                    leader per gli studenti che desiderano imparare il coding in modo divertente e coinvolgente.
                </p>
                <br />
                <p>
                    <b>La nostra missione e visione: </b> La nostra missione è rendere l'apprendimento del coding accessibile a tutti gli studenti,
                    ovunque nel mondo. Vogliamo ispirare la prossima generazione di programmatori e creatori digitali, fornendo strumenti innovativi e
                    risorse di alta qualità.
                </p>
                <br />
                <p>
                    <b>I nostri valori: </b> Su CodeVerse, ci impegniamo per l'accessibilità, l'innovazione e l'empowerment degli studenti. Vogliamo
                    creare un ambiente inclusivo in cui ogni studente possa avere successo nel mondo della programmazione.
                </p>
                <br />
                <p>
                    <b>Il nostro team: </b>CodeVerse è composto da un team di esperti nel campo dell'istruzione e della tecnologia. Dai nostri
                    sviluppatori agli insegnanti, ogni membro del nostro team porta con sé una profonda passione per l'apprendimento e l'innovazione.
                </p>
                <br />
                {/* <p>
                    <b>I nostri successi e riconoscimenti: </b>Siamo orgogliosi di aver aiutato migliaia di studenti in tutta Italia a imparare il
                    coding e a realizzare i loro progetti. Le nostre soluzioni educative hanno dimostrando l'impatto positivo che stiamo avendo nel
                    settore dell'istruzione tecnologica.
                </p> */}
                {/* <br />
                <p>
                    <b>Il nostro impegno verso gli studenti e la comunità: </b>
                    Siamo impegnati nel supportare gli studenti e le comunità in cui operiamo. Offriamo borse di studio, workshop gratuiti e altre
                    iniziative per promuovere l'accessibilità e l'equità nell'istruzione tecnologica.
                </p>
                <br />
                <p>
                    <b>Testimonianze degli studenti:</b> Ecco cosa dicono gli studenti che hanno utilizzato CodeVerse: - "Grazie a CodeVerse, ho
                    imparato il coding in modo divertente e intuitivo. Consiglio vivamente questa piattaforma a tutti gli studenti appassionati di
                    tecnologia!" - "La varietà di corsi e le risorse disponibili su CodeVerse mi hanno aiutato a sviluppare le mie competenze nel
                    coding in modo rapido e efficace."
                </p>
                <br />
                <p>
                    <b>Contattaci: </b>Se desideri saperne di più su CodeVerse o hai domande sul nostro servizio, non esitare a contattarci. Siamo qui
                    per aiutarti a raggiungere i tuoi obiettivi nel coding e nell'informatica. Grazie per aver scelto CodeVerse. Siamo entusiasti di
                    aiutarti nel tuo viaggio di apprendimento e di vedere cosa riuscirai a creare!
                </p> */}
            </div>
        </div>
    );
}
