import React from 'react';
import Accordion from '../components/Accordion';
import BackgroundImage from '../components/BackgroundImage';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import CopyButtonSolution from '../components/CopyButtonSolution';
import CopyButton from '../components/CopyButton';

function Exercise() {
    const navigate = useNavigate();

    const solutionHtml1 = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Simple HTML Structure</title>
    </head>
    <body>
        <h1>Welcome to My Webpage</h1>
        <p>This is a simple HTML structure example.</p>
        <img src="https://via.placeholder.com/150" alt="Sample Image">
    </body>
    </html>`;

    const solutionHtml2 = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Simple HTML with Links</title>
    </head>
    <body>
        <h1>Welcome to My Webpage</h1>
        <p>This is a simple HTML structure example.</p>
        <img src="https://via.placeholder.com/150" alt="Sample Image">
        
        <!-- Added hypertext links -->
        <p>Check out these links:</p>
        <ul>
            <li><a href="https://www.google.com" target="_blank">Google</a></li>
            <li><a href="https://www.wikipedia.org" target="_blank">Wikipedia</a></li>
            <li><a href="https://www.example.com" target="_blank">Example.com</a></li>
        </ul>
    </body>
    </html>`;

    const solutionHtml3 = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>HTML Lists</title>
    </head>
    <body>
        <h1>HTML Lists</h1>
        
        <h2>Ordered List (ol):</h2>
        <ol>
            <li>First item</li>
            <li>Second item</li>
            <li>Third item</li>
        </ol>
        
        <h2>Unordered List (ul):</h2>
        <ul>
            <li>Apple</li>
            <li>Banana</li>
            <li>Orange</li>
        </ul>
    </body>
    </html>`;

    const solutionHtml4 = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>HTML Table Example</title>
    </head>
    <body>
        <h1>HTML Table Example</h1>
        
        <h2>Schedule Table:</h2>
        <table border="1">
            <thead>
                <tr>
                    <th>Time</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>9:00 - 10:00</td>
                    <td>Math</td>
                    <td>Science</td>
                    <td>English</td>
                    <td>History</td>
                    <td>PE</td>
                </tr>
                <tr>
                    <td>10:00 - 11:00</td>
                    <td>English</td>
                    <td>Math</td>
                    <td>Science</td>
                    <td>PE</td>
                    <td>History</td>
                </tr>
                <tr>
                    <td>11:00 - 12:00</td>
                    <td>History</td>
                    <td>English</td>
                    <td>Math</td>
                    <td>Science</td>
                    <td>PE</td>
                </tr>
            </tbody>
        </table>
    </body>
    </html>`;

    const solutionHtml5 = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>HTML Form Example</title>
    </head>
    <body>
        <h1>HTML Form Example</h1>
        
        <form action="/submit-form" method="post">
            <label for="name">Name:</label><br>
            <input type="text" id="name" name="name"><br><br>
            
            <label for="email">Email:</label><br>
            <input type="email" id="email" name="email"><br><br>
            
            <label for="age">Age:</label><br>
            <input type="number" id="age" name="age"><br><br>
            
            <label for="country">Country:</label><br>
            <select id="country" name="country">
                <option value="usa">USA</option>
                <option value="canada">Canada</option>
                <option value="uk">UK</option>
                <option value="australia">Australia</option>
            </select><br><br>
            
            <label>Gender:</label><br>
            <input type="radio" id="male" name="gender" value="male">
            <label for="male">Male</label><br>
            <input type="radio" id="female" name="gender" value="female">
            <label for="female">Female</label><br><br>
            
            <label for="subscribe">Subscribe to newsletter:</label>
            <input type="checkbox" id="subscribe" name="subscribe" value="yes"><br><br>
            
            <input type="submit" value="Submit">
        </form>
    </body>
    </html>`;

    const topics = [
        {
            title: 'HTML',
            exercises: [
                <Accordion
                    key="nested1"
                    contentClassName="bg-transparent"
                    title="1) Creazione di una pagina HTML base: Crea una semplice pagina HTML con un titolo, un'intestazione, un paragrafo e
                un'immagine."
                    exercises={[
                        <div className="relative max-w-6xl mx-auto mt-0">
                            <div className="bg-gray-900 text-white p-4 rounded-md">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-gray-400">Solution:</span>
                                    <CopyButtonSolution textToCopy={solutionHtml1} />
                                </div>
                                <div className="overflow-x-auto">
                                    <pre id="code" className="text-gray-300">
                                        <code>{solutionHtml1}</code>
                                    </pre>
                                </div>
                            </div>
                        </div>,
                    ]}
                    defaultOpen={true}
                />,
                <Accordion
                    key="nested2"
                    contentClassName="bg-transparent"
                    title="2) Aggiunta di link ipertestuali: Estendi la pagina creata nell'esercizio 1 aggiungendo uno o più link ipertestuali che
                    portino ad altre pagine web."
                    exercises={[
                        <div className="relative max-w-6xl mx-auto mt-0">
                            <div className="bg-gray-900 text-white p-4 rounded-md">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-gray-400">Solution:</span>
                                    <CopyButtonSolution textToCopy={solutionHtml2} />
                                </div>
                                <div className="overflow-x-auto">
                                    <pre id="code" className="text-gray-300">
                                        <code>{solutionHtml2}</code>
                                    </pre>
                                </div>
                            </div>
                        </div>,
                    ]}
                />,
                <Accordion
                    key="nested3"
                    contentClassName="bg-transparent"
                    title="3) Utilizzo di liste: Crea una pagina HTML che contenga almeno una lista ordinata e una lista non ordinata, con diversi elementi."
                    exercises={[
                        <div class="relative max-w-6xl mx-auto mt-0">
                            <div class="bg-gray-900 text-white p-4 rounded-md">
                                <div class="flex justify-between items-center mb-2">
                                    <span class="text-gray-400">Solution:</span>
                                    <CopyButtonSolution textToCopy={solutionHtml3} />
                                </div>
                                <div class="overflow-x-auto">
                                    <pre id="code" class="text-gray-300">
                                        <code>{solutionHtml3}</code>
                                    </pre>
                                </div>
                            </div>
                        </div>,
                    ]}
                />,
                <Accordion
                    key="nested4"
                    contentClassName="bg-transparent"
                    title="4) Tabelle HTML: Crea una tabella HTML che mostri una serie di dati tabellari, come ad esempio una tabella di orario o una
                    tabella di punteggi."
                    exercises={[
                        <div class="relative max-w-6xl mx-auto mt-0">
                            <div class="bg-gray-900 text-white p-4 rounded-md">
                                <div class="flex justify-between items-center mb-2">
                                    <span class="text-gray-400">Solution:</span>
                                    <CopyButtonSolution textToCopy={solutionHtml4} />
                                </div>
                                <div class="overflow-x-auto">
                                    <pre id="code" class="text-gray-300">
                                        <code>{solutionHtml4}</code>
                                    </pre>
                                </div>
                            </div>
                        </div>,
                    ]}
                />,
                <Accordion
                    key="nested5"
                    contentClassName="bg-transparent"
                    title="5) Form HTML: Crea un modulo HTML che contenga diversi tipi di elementi di input, come caselle di testo, menu a discesa,
                    pulsanti di opzione e pulsanti di invio."
                    exercises={[
                        <div class="relative max-w-6xl mx-auto mt-0">
                            <div class="bg-gray-900 text-white p-4 rounded-md">
                                <div class="flex justify-between items-center mb-2">
                                    <span class="text-gray-400">Solution:</span>
                                    <CopyButtonSolution textToCopy={solutionHtml5} />
                                </div>
                                <div class="overflow-x-auto">
                                    <pre id="code" class="text-gray-300">
                                        <code>{solutionHtml5}</code>
                                    </pre>
                                </div>
                            </div>
                        </div>,
                    ]}
                />,
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
                    <code className="font-bold">
                        <CopyButton textToCopy="git config --global user.name Il tuo nome/git config --global user.email email@example.com"></CopyButton>
                    </code>
                </p>,
                <br />,
                <p>
                    <b>2. Creare un Repository: </b>
                    Per iniziare a tracciare un progetto con Git, devi inizializzare un repository.
                    <br />
                    <code className="font-bold">
                        <CopyButton textToCopy="git init"></CopyButton>
                    </code>
                </p>,
                <br />,
                <p>
                    <b>3. Staging e Commit: </b>
                    Per salvare le modifiche nel repository Git, devi prima aggiungerle all'area di staging e poi fare un commit.
                    <br />
                    <code className="font-bold">
                        <CopyButton textToCopy="git add . / git add nomefile"></CopyButton>
                    </code>
                </p>,
                <br />,
                <p>
                    <b>3. Staging e Commit: </b>
                    Per salvare le modifiche nel repository Git, devi prima aggiungerle all'area di staging e poi fare un commit.
                    <br />
                    <code className="font-bold">
                        <CopyButton textToCopy="git add . / git add nomefile"></CopyButton>
                    </code>
                    <br />
                    <code className="font-bold">
                        <CopyButton textToCopy="git commit / git commit -m Messaggio commit"></CopyButton>
                    </code>
                </p>,
                <br />,
                <p>
                    <b>4. Visualizzare lo Stato del Repository:</b>
                    Per vedere lo stato del tuo repository, usa il comando git status. Questo ti mostrerà quali file sono stati modificati, quali sono
                    in staging e quali non sono tracciati da Git.
                    <br />
                    <code className="font-bold">
                        <CopyButton textToCopy="git status"></CopyButton>
                    </code>
                </p>,
                <br />,
                <p>
                    <b>5. Visualizzare la Cronologia dei Commit :</b>
                    Per vedere la cronologia dei commit del repository, usa il comando git log. Questo ti mostrerà una lista dei commit, con hash,
                    messaggi di commit, autori e date.
                    <br />
                    <code className="font-bold">
                        <CopyButton textToCopy="git log | git log --oneline"></CopyButton>
                    </code>
                </p>,
                <br />,
                <p>
                    <b>6. Gestire Branch (Rami) :</b>
                    I branch ti permettono di lavorare su diverse versioni del progetto simultaneamente.
                    <br />
                    -Creare un nuovo branch:
                    <br />
                    <code className="font-bold">
                        <CopyButton textToCopy="git branch nome-branch"></CopyButton>
                    </code>
                    <br />
                    -Passare a un branch esistente:
                    <br />
                    <code className="font-bold">
                        <CopyButton textToCopy="git checkout nome-branch"></CopyButton>
                    </code>
                    <br />
                    Creare e passare a un nuovo branch in un solo comando:
                    <br />
                    <code className="font-bold">
                        <CopyButton textToCopy="git checkout -b nome-branch"></CopyButton>
                    </code>
                </p>,
            ],
        },
    ];

    return (
        <div>
            <BackgroundImage />
            <div className="relative max-w-7xl mx-auto mt-4">
                <button className="absolute top-0 left-0 flex items-center mt-4 ml-4 text-blue-500 hover:text-blue-700" onClick={() => navigate(-1)}>
                    <FaArrowLeft className="mr-2" />
                    Back
                </button>
                <div className="pt-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <h1 className=" text-center mb-6 mt-6 font-extralight leading-none tracking-tight text-white bg-cyan-400 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                            Esercizi semplici
                        </h1>
                        {topics.map((topic, index) => (
                            <Accordion
                                key={index}
                                title={topic.title}
                                exercises={topic.exercises}
                                contentClassName="bg-gray-100"
                                defaultOpen={index === 0}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Exercise;
