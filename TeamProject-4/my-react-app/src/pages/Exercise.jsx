import React from 'react';
import Accordion from '../components/Accordion';
import BackgroundImage from '../components/BackgroundImage';

function Exercise() {
    const topics = [
        {
            title: 'HTML',
            exercises: [
                "1) Creazione di una pagina HTML base: Crea una semplice pagina HTML con un titolo, un'intestazione, un paragrafo e un'immagine.",
                "2) Aggiunta di link ipertestuali: Estendi la pagina creata nell'esercizio 1 aggiungendo uno o più link ipertestuali che portino ad altre pagine web.",
                '3) Utilizzo di liste: Crea una pagina HTML che contenga almeno una lista ordinata e una lista non ordinata, con diversi elementi.',
                '4) Tabelle HTML: Crea una tabella HTML che mostri una serie di dati tabellari, come ad esempio una tabella di orario o una tabella di punteggi.',
                '5) Form HTML: Crea un modulo HTML che contenga diversi tipi di elementi di input, come caselle di testo, menu a discesa, pulsanti di opzione e pulsanti di invio.',
            ],
        },
        {
            title: 'CSS',
            exercises: ['Exercise 1', 'Exercise 2', 'Exercise 3', 'Exercise 4', 'Exercise 5'],
        },
        {
            title: 'JAVASCRIPT',
            exercises: ['Exercise 1', 'Exercise 2', 'Exercise 3', 'Exercise 4', 'Exercise 5'],
        },
        {
            title: 'REACT',
            exercises: ['Exercise 1', 'Exercise 2', 'Exercise 3', 'Exercise 4', 'Exercise 5'],
        },
        {
            title: 'NOZIONI GIT',
            exercises: ['Exercise 1', 'Exercise 2', 'Exercise 3', 'Exercise 4', 'Exercise 5'],
        },
    ];

    return (
        <div>
            <BackgroundImage />
            <div className="absolute top-[15rem] left-[5rem] container mx-auto p-4">
                {topics.map((topic, index) => (
                    <Accordion key={index} title={topic.title} exercises={topic.exercises} />
                ))}
            </div>
        </div>
    );
}

export default Exercise;
