import React, { useState } from 'react';

function ContentForm() {
    const [formType, setFormType] = useState('Lezione');
    const [title, setTitle] = useState('');
    const [topic, setTopic] = useState('HTML');
    const [video, setVideo] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState(null);
    const [exerciseCommand, setExerciseCommand] = useState('');
    const [exerciseSolution, setExerciseSolution] = useState('');

    const handleFormTypeChange = (event) => {
        setFormType(event.target.value);
        resetFormFields();
    };

    const resetFormFields = () => {
        setVideo('');
        setDescription('');
        setFile(null);
        setExerciseCommand('');
        setExerciseSolution('');
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        createNewLesson();
        alert('Lezione creata con successo')
    };

    const createNewLesson = () => {
        // Make a POST request to the API
        fetch('http://localhost:3001/lessons', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, video, topic, description }),
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => {
                console.error(error);
                alert('Errore durante la creazione del contenuto');
            });
    };

    /* const updateExistingUser = () => {
        fetch(`http://localhost:3001/users/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, video, topic, description }),
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => {
                console.error(error);
                alert('Errore durante l\'aggiornamento del contenuto');
              });
    }; */

    return (
        <div className="min-h-screen flex items-center justify-center">
            <form onSubmit={handleSubmit} className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-8 text-gray-800">Aggiungi Contenuto</h2>
                <div className="mb-6">
                    <label className="block text-lg font-semibold text-gray-700">Titolo</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        maxLength="100"
                        required
                        className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-lg font-semibold text-gray-700">Argomento</label>
                    <select
                        value={topic}
                        required
                        onChange={(e) => setTopic(e.target.value)}
                        className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="HTML">HTML</option>
                        <option value="CSS">CSS</option>
                        <option value="JAVASCRIPT">JavaScript</option>
                        <option value="REACT">React</option>
                        <option value="GIT">Git</option>
                        <option value="ALTRO">Altro</option>
                    </select>
                </div>
                <div className="mb-6">
                    <label className="block text-lg font-semibold text-gray-700">Tipo</label>
                    <div className="flex mt-2">
                        <label className="mr-6">
                            <input type="radio" value="Lezione" checked={formType === 'Lezione'} onChange={handleFormTypeChange} className="mr-2" />
                            Lezione
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="Esercizio"
                                checked={formType === 'Esercizio'}
                                onChange={handleFormTypeChange}
                                className="mr-2"
                            />
                            Esercizio
                        </label>
                    </div>
                </div>
                {formType === 'Lezione' && (
                    <>
                        <div className="mb-6">
                            <label className="block text-lg font-semibold text-gray-700">URL del video YouTube</label>
                            <input
                                type="url"
                                value={video}
                                onChange={(e) => setVideo(e.target.value)}
                                className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-lg font-semibold text-gray-700">Descrizione</label>
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            ></textarea>
                        </div>
                        <div className="mb-6">
                            <label className="block text-lg font-semibold text-gray-700">Upload file (max 1MB)</label>
                            <input
                                type="file"
                                onChange={(e) => setFile(e.target.files[0])}
                                className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </>
                )}
                {formType === 'Esercizio' && (
                    <>
                        <div className="mb-6">
                            <label className="block text-lg font-semibold text-gray-700">Comanda dell'esercizio</label>
                            <textarea
                                value={exerciseCommand}
                                onChange={(e) => setExerciseCommand(e.target.value)}
                                className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            ></textarea>
                        </div>
                        <div className="mb-6">
                            <label className="block text-lg font-semibold text-gray-700">Soluzione dell'esercizio</label>
                            <textarea
                                value={exerciseSolution}
                                onChange={(e) => setExerciseSolution(e.target.value)}
                                className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            ></textarea>
                        </div>
                    </>
                )}
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Invia contenuto
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ContentForm;
