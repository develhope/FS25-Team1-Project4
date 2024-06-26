import React, { useState, useEffect } from 'react';

function UserTable() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    async function fetchUsers() {
        try {
            const response = await fetch('http://localhost:3001/users');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data);

            setUsers(data);
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleRoleChange = (userId, newRole) => {
        if (window.confirm('Sei sicuro di voler cambiare il ruolo?')) {
            const updatedUsers = users.map((user) => {
                if (user.id === userId) {
                    user.role = newRole;
                }
                return user;
            });
            setUsers(updatedUsers);
        } else {
            // Nessuna azione se l'utente annulla la conferma
            return;
        }
    };

    const handleDeleteUser = (userId) => {
        if (window.confirm('Sei sicuro di voler eliminare questo utente?')) {
            fetch(`http://localhost:3001/users/${userId}`, {
                method: 'DELETE',
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Errore durante l'eliminazione dell'utente");
                    }
                    return response.json();
                })
                .then((data) => {
                    setUsers(users.filter((user) => user.id !== userId));
                })
                .catch((error) => {
                    console.error('Errore:', error);
                });
        } else {
            // Nessuna azione se l'utente annulla la conferma
            return;
        }
    };

    return (
        <>
            <table className="relative overflow-x-auto bg-white rounded-md shadow-md w-full px-4 py-2 top-10 border-b border-gray-400">
                <thead>
                    <tr className="bg-teal-200">
                        <th className="border-b border-gray-400 bg-blue-gray-50 p-4">Nome e cognome</th>
                        <th className="border-b border-gray-400 bg-blue-gray-50 p-4">Email</th>
                        <th className="border-b border-gray-400 bg-blue-gray-50 p-4">Ruolo</th>
                        <th className="border-b border-gray-400 bg-blue-gray-50 p-4">Vote</th>
                        <th className="border-b border-gray-400 bg-blue-gray-50 p-4">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {loading ? (
                        <tr>
                            <td colSpan={5}>Loading...</td>
                        </tr>
                    ) : (
                        users.map((user) => (
                            <tr key={user.id} className="bg-opacity-70 even:bg-teal-100 odd:bg-white">
                                <td className="p-4">{user.name}</td>
                                <td className="p-4">{user.email}</td>
                                <td className="p-4">{user.role}</td>
                                <td className="p-4">{user.vote}</td>
                                <td className="p-4 ">
                                    <span className="mr-2">
                                        <button
                                            className="bg-[#55A5E8] hover:bg-[#186cb1] text-white py-2 px-4 rounded"
                                            onClick={() => handleRoleChange(user.id, user.role === 'admin' ? 'student' : 'admin')}
                                        >
                                            {user.role === 'admin' ? 'Demote to Student' : 'Promote to Admin'}
                                        </button>
                                    </span>
                                    <span className="ml-2">
                                        <button
                                            className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
                                            onClick={() => handleDeleteUser(user.id)}
                                        >
                                            Delete
                                        </button>
                                    </span>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
            <button>Crea nuovo utente</button>
        </>
    );
}

export default UserTable;
