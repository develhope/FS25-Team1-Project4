import React from 'react';
import BackgroundImage from '../components/BackgroundImage';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { CardLesson } from '../components/CardLesson';
import { CarouselLesson } from '../components/CarouselLesson';

const LessonsCss = () => {
    const navigate = useNavigate();

    let cards = [
        {
            key: 1,
            content: <CardLesson video="https://www.youtube.com/embed/HwkD5lRe0jw?si=GXvFNIM_NpOZuYm4"
            title='Introduzione approfondita a CSS'
            text="Primo video con un'introduzione approfondita di CSS: cos'è, come funziona, il DOM, come inserirlo in html e altre nozioni fondamentali per cominciare al meglio a studiare CSS."/>,
        },
        {
            key: 2,
            content: <CardLesson video="https://www.youtube.com/embed/Y5D0BvzMwog?si=F0ymg6ZZhxQ3Fx7V"
            title='La sintassi fondamentale'
            text='In questo video andiamo ad imparare la sintassi base, che sarà da fondamento per tutto il resto del corso.' />,
        },
        {
            key: 3,
            content: <CardLesson video="https://www.youtube.com/embed/AFWpVde6rg8?si=t8q9KJ_WHUSa43Vm"
            title='Cascata e Ereditarietà'
            text="In questo video, esploreremo i concetti di cascade e inheritance in CSS. Imparerai come le proprietà CSS vengono ereditate dagli elementi e come la cascata determina l'ordine di applicazione degli stili. Perfetto per migliorare la tua comprensione delle regole CSS e creare stili più efficaci e coerenti."
             />,
        },
        {
            key: 4,
            content: <CardLesson video="https://www.youtube.com/embed/hKnzPZa-VVY?si=pLkztFKSnhC2Nkwk"
            title='Guida completa ai selettori in CSS'
            text='In questo video vediamo nel dettaglio tutti i tipi di selettori disponibili in CSS. A fine di questo video dovreste avere una conoscenza approfondita di come poter utilizzare i vari selettori.' />,
        },
        {
            key: 5,
            content: <CardLesson video="https://www.youtube.com/embed/5iNUuujm_ns?si=3VQzsS_myz3j4Ply"
            title='Il concetto di BOX MODEL'
            text='Scopri il Box Model di CSS in questo video informativo. Imparerai a conoscere i margini, i bordi, il padding e il contenuto, e come questi elementi interagiscono per determinare il layout delle tue pagine web. Perfetto per migliorare le tue abilità nel design CSS!' />,
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

export default LessonsCss;
