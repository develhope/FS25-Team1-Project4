import React from 'react';
import BackgroundImage from '../components/BackgroundImage';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { CardLesson } from '../components/CardLesson';
import { CarouselLesson } from '../components/CarouselLesson';

const LessonsGitHub = () => {
    const navigate = useNavigate();

    let cards = [
        {
            key: 1,
            content: (
                <CardLesson
                    video="https://www.youtube.com/embed/NVpwCzeFPD8?si=k487ePBg9fDj5wtn"
                    title="Introduzione to bash, init, add, commit e status"
                    text="Inizia il tuo viaggio nel mondo dello sviluppo con una guida pratica a Bash e ai comandi fondamentali di Git! In questo video, ti mostreremo come utilizzare Bash per navigare nel terminale e spiegheremo i comandi Git init, add, commit e status per gestire il tuo codice. "
                />
            ),
        },
        {
            key: 2,
            content: (
                <CardLesson
                    video="https://www.youtube.com/embed/V5d49WePfqo?si=gaqVHdZXNJaboVNE"
                    title="Git reset [soft, mixed e hard]"
                    text="Scopri come utilizzare git reset per annullare i cambiamenti nel tuo repository Git. In questo video, esploreremo le varie opzioni di git reset, come --soft, --mixed, e --hard, con esempi pratici per capire quando e come usarle. Ideale per chi vuole padroneggiare il controllo delle versioni con Git!"
                />
            ),
        },
        {
            key: 3,
            content: (
                <CardLesson
                    video="https://www.youtube.com/embed/BVfAOwISn3w?si=HrQh8LyjCqq1ky6D"
                    title="Escludere file con .gitignore"
                    text="Impara a gestire i file e le cartelle che non vuoi tracciare con Git! In questo video, scopriamo come utilizzare il file .gitignore per escludere file e cartelle specifiche dal repository Git. Vedremo come creare e configurare il file .gitignore per ignorare file di configurazione, file di sistema e altri file che non sono rilevanti per il tuo progetto."
                />
            ),
        },
        {
            key: 4,
            content: (
                <CardLesson
                    video="https://www.youtube.com/embed/IXSNTvJmyp8?si=hP1U8MfN7KGB8djD"
                    title="Git branch, checkout, merge"
                    text="In questo video, scopriamo come utilizzare i comandi checkout e merge in Git Bash per gestire le modifiche nel tuo repository. Vedremo come creare e gestire le branch, come tornare indietro nel tempo con checkout e come unire le modifiche con merge"
                />
            ),
        },
        {
            key: 5,
            content: (
                <CardLesson
                    video="https://www.youtube.com/embed/LF3-dgRxS_w?si=bxA9hv05UJiYY2j0"
                    title="Come funziona GitHub"
                    text="Esploreremo come funziona GitHub, dalla creazione di un repository alla gestione delle modifiche e alla collaborazione con gli altri. Vedremo come funzionano le repository, le branch, i commit, i pull request e molto altro. Imparerai come utilizzare GitHub per gestire i tuoi progetti di sviluppo software e come collaborare con gli altri sviluppatori in tutto il mondo"
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

export default LessonsGitHub;
