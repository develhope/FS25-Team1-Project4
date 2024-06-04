import React from 'react';
import BackgroundImage from '../components/BackgroundImage';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { CardLesson } from '../components/CardLesson';
import { CarouselLesson } from '../components/CarouselLesson';

const LessonsReact = () => {
    const navigate = useNavigate();

    let cards = [
        {
            key: 1,
            content: (
                <CardLesson
                    video="https://www.youtube.com/embed/TCYnHcngPLc?si=NmJGuT-HirzzfXtM"
                    title="Introduzione a React"
                    text="Introduzione a React. Inizia il tuo percorso di apprendimento su React, esplorando i concetti fondamentali e la filosofia di questo framework JavaScript ampiamente utilizzato per lo sviluppo web"
                />
            ),
        },
        {
            key: 2,
            content: <CardLesson video="https://www.youtube.com/embed/OD2d2sDz5Mg?si=jKd5K_OdIwuKv66p"
            title='Come installare React'
            text="Impara come installare e configurare l'ambiente di sviluppo per React, assicurandoti di essere pronto per creare applicazioni web di alta qualità." />,
        },
        {
            key: 3,
            content: <CardLesson video="https://www.youtube.com/embed/fV1nDbzKano?si=QGwMtsOYR3y6GMwi"
            title='Struttura del progetto'
            text='Struttura del progetto. Scopri la struttura di base di un progetto React e impara a organizzare i tuoi file e componenti in modo efficiente.' />,
        },
        {
            key: 4,
            content: <CardLesson video="https://www.youtube.com/embed/YdL_zBx4Blg?si=HlwySssBAWlwxo-J"
            title='Sintassi del primo programma'
            text='Sintassi del primo programma. Approfondisci la sintassi di React creando il tuo primo programma, pronto a esplorare le funzionalità avanzate che il framework ha da offrire.' />,
        },
        {
            key: 5,
            content: <CardLesson video="https://www.youtube.com/embed/BR1uPIRiGnE?si=EVknAHKjxe97u_Fa"
            title='Cosa sono i componenti'
            text='Componenti. Entra nel mondo dei componenti React e scopri come suddividere la tua applicazione in unità modulari e riutilizzabili.' />,
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

export default LessonsReact;
