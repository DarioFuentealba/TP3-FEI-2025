import React, { useState } from 'react';
import { loginUser } from '../../api';

export default function Login({ setToken }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const data = await loginUser(username, password);
        setToken(data.access);
        localStorage.setItem('access_token', data.access); // guardamos token
        setError('');
        } catch (err) {
        setError(err.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Iniciar sesión</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
    );
}
