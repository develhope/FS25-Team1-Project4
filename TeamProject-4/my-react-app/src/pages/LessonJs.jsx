import React from 'react';
import BackgroundImage from '../components/BackgroundImage';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { CardLesson } from '../components/CardLesson';
import { CarouselLesson } from '../components/CarouselLesson';

const LessonsJs = () => {
    const navigate = useNavigate();

    let cards = [
        {
            key: 1,
            content: (
                <CardLesson
                    video="https://www.youtube.com/embed/84TYC44ezIU?si=TbxcG-WwLP1rOsES"
                    title=" Introduzione a JS"
                    text="Ecco un introduzione a Javascript nel dettaglio per capire alcuni concetti importanti come client-side, server-side, codice compilato, interpretato, statico e dinamico. "
                />
            ),
        },
        {
            key: 2,
            content: (
                <CardLesson
                    video="https://www.youtube.com/embed/JyHtBUU2w5g?si=j012-cNQ-OMgm0va"
                    title="Le variabili"
                    text="Scopri come dichiarare, inizializzare e utilizzare variabili per rendere il tuo codice più dinamico ed efficiente. Impareremo la differenza tra var, let e const, e vedremo esempi pratici di come e quando utilizzarli."
                />
            ),
        },
        {
            key: 3,
            content: (
                <CardLesson
                    video="https://www.youtube.com/embed/Ld4aYNClh3g?si=9MIbYX0U-KAxQKC6"
                    title="Numeri e Operarori matematici"
                    text="Impara a lavorare con i numeri e gli operatori matematici in JavaScript! In questo video, esploreremo le basi dei calcoli aritmetici e delle operazioni matematiche comuni, con esempi pratici per migliorare il tuo codice."
                />
            ),
        },
        {
            key: 4,
            content: (
                <CardLesson
                    video="https://www.youtube.com/embed/iGU1zgQ9oLw?si=LheIH0PB4pMKQfPC"
                    title="Le stringhe di testo"
                    text=" In questo video, esploreremo le principali operazioni e metodi per manipolare le stringhe, come concatenazione, suddivisione e ricerca. Perfetto per chi vuole padroneggiare la manipolazione del testo nel proprio codice!"
                />
            ),
        },
        {
            key: 5,
            content: (
                <CardLesson
                    video="https://www.youtube.com/embed/AnKY6wVOjQo?si=UHEsPY3qdBELgOom"
                    title="I metodi delle stringhe"
                    text="n questo video, esploreremo le funzioni più utili per manipolare e gestire le stringhe, come length, toUpperCase(), slice(), replace(), e molte altre. Perfetto per migliorare le tue abilità di programmazione e rendere il tuo codice più efficace!"
                />
            ),
        },
    ];

    return (
        <div>
            <BackgroundImage />
            <button className="absolute top-0 left-0 flex items-center mt-4 ml-4 text-blue-500 hover:text-blue-700" onClick={() => navigate(-1)}>
                <FaArrowLeft className="mr-2" />
                Back
            </button>
            <CarouselLesson cards={cards} height="600px" width="100%" margin="0 auto" offset={200} showArrows={true} />
        </div>
    );
};

export default LessonsJs;
