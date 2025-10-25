import React, { useState, useEffect } from 'react';
import Login from '../Login/Login';
import { fetchProtected } from '../../api';

export default function Home() {
    const [token, setToken] = useState(localStorage.getItem('access_token'));
    const [data, setData] = useState(null);

    const handleLogout = () => {
        setToken(null);
        localStorage.removeItem('access_token');
    };

    useEffect(() => {
        if (token) {
        fetchProtected(token)
            .then(setData)
            .catch(() => {
            setToken(null); 
            localStorage.removeItem('access_token');
            });
        }
    }, [token]);

    if (!token) return <Login setToken={setToken} />;

    return (
        <div>
        <h1>Bienvenido!</h1>
        <button onClick={handleLogout}>Logout</button>

        {data && (
            <div>
            <h2>Datos protegidos desde la API:</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
        )}
        </div>
    );
}
