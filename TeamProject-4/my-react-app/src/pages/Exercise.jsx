import React from 'react';
import Accordion from '../components/Accordion';
import BackgroundImage from '../components/BackgroundImage';

function Exercise() {
    const topics = [
        {
            title: 'HTML',
            exercises: [
                <p>
                    <b>1) Creazione di una pagina HTML base: </b> Crea una semplice pagina HTML con un titolo, un'intestazione, un paragrafo e
                    un'immagine.
                </p>,
                <br />,
                <p>
                    <b>2) Aggiunta di link ipertestuali:</b> Estendi la pagina creata nell'esercizio 1 aggiungendo uno o più link ipertestuali che
                    portino ad altre pagine web.
                </p>,
                <br />,
                <p>
                    <b>3) Utilizzo di liste:</b> Crea una pagina HTML che contenga almeno una lista ordinata e una lista non ordinata, con diversi
                    elementi.
                </p>,
                <br />,
                <p>
                    <b>4) Tabelle HTML: </b>Crea una tabella HTML che mostri una serie di dati tabellari, come ad esempio una tabella di orario o una
                    tabella di punteggi.
                </p>,
                <br />,
                <p>
                    <b>5) Form HTML:</b> Crea un modulo HTML che contenga diversi tipi di elementi di input, come caselle di testo, menu a discesa,
                    pulsanti di opzione e pulsanti di invio.
                </p>,
            ],
        },
        {
            title: 'CSS',
            exercises: [
                <p>
                    <b>1) Styling di testo e colore di sfondo: </b>Crea una pagina HTML semplice e utilizza CSS per cambiare il colore del testo e del
                    colore di sfondo del corpo della pagina e di alcuni elementi come titoli e paragrafi.
                </p>,
                <br />,
                <p>
                    <b>2) Utilizzo di selettori di classe e ID: </b>Aggiungi classi e ID agli elementi HTML nella tua pagina e usa i selettori CSS per
                    stilizzare specificamente quegli elementi.
                </p>,
                <br />,
                <p>
                    <b>3) Posizionamento e layout: </b>Utilizza le proprietà CSS per il posizionamento degli elementi, come position, float e display,
                    per creare un layout più complesso, ad esempio una griglia o una struttura a colonne.
                </p>,
                <br />,
                <p>
                    <b>4) Utilizzo di transizioni e animazioni: </b>Aggiungi effetti di transizione e animazioni agli elementi della tua pagina
                    utilizzando le proprietà CSS come transition, transform e animation.
                </p>,
                <br />,
                <p>
                    <b>5) Responsive Design: </b>Rendi la tua pagina web responsive utilizzando i media query CSS per adattare il layout e lo stile in
                    base alle dimensioni dello schermo del dispositivo, assicurandoti che sia accessibile e utilizzabile su dispositivi di diverse
                    dimensioni.
                </p>,
            ],
        },
        {
            title: 'JAVASCRIPT',
            exercises: [
                <p>
                    <b>1) Manipolazione del DOM:</b> Crea una pagina HTML con un bottone e un elemento di testo. Utilizza JavaScript per aggiungere un
                    evento click al bottone in modo che quando viene cliccato, il testo nell'elemento di testo cambi.
                </p>,
                <br />,
                <p>
                    <b>2) Utilizzo delle funzioni: </b> Scrivi una funzione JavaScript che accetti due numeri come argomenti e restituisca la loro
                    somma. Chiamala con alcuni numeri differenti per verificare che funzioni correttamente.
                </p>,
                <br />,
                <p>
                    <b>3) Gestione degli array: </b>Crea un array di numeri. Scrivi una funzione JavaScript che itera attraverso l'array e restituisca
                    la somma di tutti gli elementi.
                </p>,
                <br />,
                <p>
                    <b>4) Manipolazione degli oggetti: </b>Crea un oggetto JavaScript che rappresenti un utente, con proprietà come nome, cognome e
                    età. Scrivi una funzione che accetti questo oggetto come argomento e stampi un messaggio di saluto personalizzato che includa le
                    informazioni dell'utente.
                </p>,
                <br />,
                <p>
                    <b>5) AJAX e richieste HTTP: </b>Utilizza JavaScript per fare una richiesta AJAX a un'API pubblica (come ad esempio un'API di
                    previsioni del tempo o una di notizie). Gestisci la risposta e visualizza alcune informazioni ricevute sulla pagina web.
                </p>,
            ],
        },
        {
            title: 'REACT',
            exercises: [
                <p>
                    <b>1) Componenti di base: </b>Crea un semplice componente React che visualizzi un messaggio di benvenuto. Renderizza questo
                    componente all'interno della tua applicazione principale. Stato e gestione degli eventi:
                </p>,
                <br />,
                <p>
                    <b>2) Stato e gestione degli eventi: </b>Crea un componente contatore con un pulsante. Ogni volta che il pulsante viene cliccato,
                    il contatore dovrebbe incrementare di 1. Usa lo stato (state) per tenere traccia del valore del contatore.
                </p>,
                <br />,
                <p>
                    <b>3) Passaggio di proprietà (props): </b>Crea un componente che accetta delle proprietà (props) e le visualizza. Ad esempio, un
                    componente User che visualizza il nome e l'età di un utente passato come props.
                </p>,
                <br />,
                <p>
                    <b>4) Liste e rendering dinamico: </b>Crea un componente che riceva un array di elementi (ad esempio, una lista di nomi) come
                    props e renderizzi una lista non ordinata (ul) con questi elementi. Ogni elemento della lista dovrebbe essere un componente
                    ListItem.
                </p>,
                <br />,
                <p>
                    <b>5) Chiamate API e gestione dell'effetto (useEffect): </b>Crea un componente che, quando montato, faccia una chiamata API (ad
                    esempio, usando fetch o una libreria come axios) per recuperare dati da un endpoint pubblico. Visualizza i dati recuperati
                    all'interno del componente. Usa l'hook useEffect per effettuare la chiamata API al montaggio del componente.
                </p>,
            ],
        },
        {
            title: 'NOZIONI GIT',
            exercises: [
                <p>
                    <b>1. Configurazione di Git: </b>Prima di iniziare a usare Git, è importante configurare il tuo nome utente e l'email. Questi
                    verranno associati ai tuoi commit.
                    <br />
                    <code className="font-bold p-[2px] rounded-[5px]">
                        git config --global user.name "Il tuo nome" / git config --global user.email "la.tua.email@example.com"
                    </code>
                </p>,
                <br />,
                <p>
                    <b>2. Creare un Repository: </b>
                    Per iniziare a tracciare un progetto con Git, devi inizializzare un repository.
                    <br />
                    <code className="font-bold p-[2px] rounded-[5px]">git init</code>
                </p>,
                <br />,
                <p>
                    <b>3. Staging e Commit: </b>
                    Per salvare le modifiche nel repository Git, devi prima aggiungerle all'area di staging e poi fare un commit.
                    <br />
                    <code className="font-bold p-[2px] rounded-[5px]">git add . / git add nomefile</code>
                </p>,
                <br />,
                <p>
                    <b>3. Staging e Commit: </b>
                    Per salvare le modifiche nel repository Git, devi prima aggiungerle all'area di staging e poi fare un commit.
                    <br />
                    <code className="font-bold p-[2px] rounded-[5px]">git add . / git add nomefile</code>
                    <br />
                    <code className="font-bold   p-[2px] rounded-[5px]">git commit / git commit -m "Messaggio descrittivo del commit"</code>
                </p>,
                <br />,
                <p>
                    <b>4. Visualizzare lo Stato del Repository:</b>
                    Per vedere lo stato del tuo repository, usa il comando git status. Questo ti mostrerà quali file sono stati modificati, quali sono
                    in staging e quali non sono tracciati da Git.
                    <br />
                    <code className="font-bold p-[2px] rounded-[5px]">git status</code>
                </p>,
                <br />,
                <p>
                    <b>5. Visualizzare la Cronologia dei Commit :</b>
                    Per vedere la cronologia dei commit del repository, usa il comando git log. Questo ti mostrerà una lista dei commit, con hash,
                    messaggi di commit, autori e date.
                    <br />
                    <code className="font-bold p-[2px] rounded-[5px]">git log | git log --oneline</code>
                </p>,
                <br />,
                <p>
                    <b>6. Gestire Branch (Rami) :</b>
                    I branch ti permettono di lavorare su diverse versioni del progetto simultaneamente.
                    <br />
                    -Creare un nuovo branch:
                    <br />
                    <code className="font-semibold p-[2px] rounded-[5px]">git branch nome-branch</code>
                    <br />
                    -Passare a un branch esistente:
                    <br />
                    <code className="font-bold p-[2px] rounded-[5px]">git checkout nome-branch</code>
                    <br />
                    Creare e passare a un nuovo branch in un solo comando:
                    <br />
                    <code className="font-bold p-[2px] rounded-[5px]">git checkout -b nome-branch</code>
                </p>,
            ],
        },
    ];

    return (
        <div>
            <BackgroundImage />
            <h1 className="absolute top-[4rem] font-semibold left-[37rem] text-6xl text-[#2ea5c7] drop-shadow-lg">Exercise</h1>
            <div className="absolute bg-gradient-to-r from-teal-300 to-blue-400 rounded-[20px] top-[15rem] left-[5rem] container mx-auto p-4">
                {topics.map((topic, index) => (
                    <Accordion key={index} title={topic.title} exercises={topic.exercises} />
                ))}
            </div>
        </div>
    );
}

export default Exercise;
