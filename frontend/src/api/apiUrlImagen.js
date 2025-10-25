// src/config/api.js
export const API_BASE_URL = 'http://127.0.0.1:8000';

export const getImageUrl = (path) => {
    if (!path) return 'https://via.placeholder.com/400x300?text=Sin+Imagen';
    if (path.startsWith('http')) return path; // Si ya es URL completa
    return `${API_BASE_URL}${path}`; // Construir URL completa
};