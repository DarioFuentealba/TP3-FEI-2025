export const loginUser = async (username, password) => {
    const response = await fetch('http://127.0.0.1:8000/api/token/', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });

    if (!response.ok) throw new Error('Usuario o contraseña incorrecta');

    return response.json(); // devuelve { access, refresh }
    };

    // Función para obtener datos protegidos con token
    export const fetchProtected = async (token) => {
    const response = await fetch('http://127.0.0.1:8000/api/protected/', {
        headers: {
        'Authorization': `Bearer ${token}`,
        },
    });

    return response.json();
};
