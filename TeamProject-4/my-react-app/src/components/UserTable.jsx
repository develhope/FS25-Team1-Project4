import React, { useState, useEffect } from 'react';

function UserTable() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    async function fetchUsers() {
        try {
            const response = await fetch('http://localhost:3000/users');
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
        const updatedUsers = users.map((user) => {
            if (user.id === userId) {
                user.role = newRole;
            }
            return user;
        });
        setUsers(updatedUsers);
    };

    /* const handleDeleteUser = (userId) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
            method: 'DELETE',
        })
            .then((response) => response.json())
            .then((data) => {
                setUsers(users.filter((user) => user.id !== userId));
            })
            .catch((error) => {
                console.error(error);
            });
    }; */

    return (
        <>
            <table className="relative overflow-x-auto bg-white rounded-md shadow-md w-full px-4 py-2 top-10 border-b border-gray-400">
                <thead>
                    <tr className="bg-teal-200">
                        <th className="border-b border-gray-400 bg-blue-gray-50 p-4">Name</th>
                        <th className="border-b border-gray-400 bg-blue-gray-50 p-4">Email</th>
                        <th className="border-b border-gray-400 bg-blue-gray-50 p-4">Role</th>
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
                                <td className="p-4">{user.username}</td>
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
        </>
    );
}

export default UserTable;
