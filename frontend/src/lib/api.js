const BASE = "http://localhost:8000/api";

export const getMarcas = async () => fetch(`${BASE}/marcas/`).then(r => r.json());
export const getProcesadoresByMarca = async (marcaId) =>
    fetch(`${BASE}/procesadores/?marca=${marcaId}`).then(r => r.json());
export const getMotherboardsByMicro = async (microId) =>
    fetch(`${BASE}/motherboards/?micro=${microId}`).then(r => r.json());
export const getCoolersByMother = async (motherId) =>
    fetch(`${BASE}/coolers/?mother=${motherId}`).then(r => r.json());
