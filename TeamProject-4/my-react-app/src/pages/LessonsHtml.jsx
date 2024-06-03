import React from 'react';
import BackgroundImage from '../components/BackgroundImage';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { CardLesson } from '../components/CardLesson';
import { CarouselLesson } from '../components/CarouselLesson';

const LessonsHtml = () => {
    const navigate = useNavigate();

    let cards = [
        {
            key: 1,
            content: (
                <CardLesson
                    video="https://www.youtube.com/embed/1C-ZbhVZ3sI?si=jchm-z999OeiMuED"
                    title="Introduzione a HTML"
                    text="Scopri le basi di HTML in questo video introduttivo. Imparerai a utilizzare i tag principali per costruire e strutturare una semplice pagina web. Ideale per principianti che vogliono iniziare nel mondo dello sviluppo web!"
                />
            ),
        },
        {
            key: 2,
            content: (
                <CardLesson
                    video="https://www.youtube.com/embed/YwyjQKpW2GM?si=poCNE0w52FqjUnDi"
                    title="Sintassi di base"
                    text="Esplora i fondamenti della sintassi HTML in questo video informativo. Imparerai a utilizzare i tag essenziali per creare e strutturare le tue prime pagine web, rendendo lo sviluppo web semplice e accessibile. Ideale per chi sta iniziando il proprio percorso nel mondo della programmazione web!"
                />
            ),
        },
        {
            key: 3,
            content: <CardLesson video="https://www.youtube.com/embed/y8EfGG-5s3I?si=Zf820udNWk-EBzqk"
            title='Il tag HEAD nel dettaglio: metadati, includere css, favicon'
            text='In questo video entrerai nello specifico del tag HEAD, in modo da capire bene come sfruttarlo al meglio inserendo la favicon, metadati per i motori di ricerca e inserendo file esterni css o js.' />,
        },
        {
            key: 4,
            content: (
                <CardLesson
                    video="https://www.youtube.com/embed/rwRBb5HBD0g?si=b2VFGuD2A9DeC8Nv"
                    title="Fondamenti di testo in HTML: intestazioni, paragrafi e formattazione"
                    text='In questo video scoprirari i fondamenti per scrivere e strutturare il testo in un documento HTML. Andremo a vedere come creare una struttura e una semantica che ci aiuti durante la scrittura del codice. Vedremo inoltre le liste puntate, le liste numerate e come utilizzarle insieme con sottoliste annidate.'
                />
            ),
        },
        {
            key: 5,
            content: (
                <CardLesson
                    video="https://www.youtube.com/embed/o7KPrUS31rg?si=v6NW805U8Bro3lY8"
                    title="Creiamo il nostro primo menu, Hyperlink, URL, percorsi"
                    text="Oggi impariamo a fare un menu basico per il nostro sito. Tuttavia prima andremo a vedere nel dettaglio cosa sono i link esterni, di pagina, gli url e i percorsi."
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

export default LessonsHtml;
