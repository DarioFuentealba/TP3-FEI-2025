import { useEffect, useState } from "react";
import {
    getMarcas, getProcesadoresByMarca, getMotherboardsByMicro, getCoolersByMother
} from "../lib/api";

export default function ArmadorPC(){
    const [marcas, setMarcas] = useState([]);
    const [procesadores, setProcesadores] = useState([]);
    const [mothers, setMothers] = useState([]);
    const [coolers, setCoolers] = useState([]);

    const [marcaId, setMarcaId] = useState("");
    const [microId, setMicroId] = useState("");
    const [motherId, setMotherId] = useState("");

    useEffect(() => { getMarcas().then(setMarcas); }, []);
    useEffect(() => { if (marcaId) getProcesadoresByMarca(marcaId).then(setProcesadores); }, [marcaId]);
    useEffect(() => { if (microId) getMotherboardsByMicro(microId).then(setMothers); }, [microId]);
    useEffect(() => { if (motherId) getCoolersByMother(motherId).then(setCoolers); }, [motherId]);

    return(
        <div style={{ padding: 16 }}>
        <h1>Armador de PC</h1>

        <h2>1) Marca</h2>
        <select value={marcaId} onChange={e => { setMarcaId(e.target.value); setMicroId(""); setMotherId(""); }}>
            <option value="">-- Elegir --</option>
            {marcas.map(m => <option key={m.id} value={m.id}>{m.nombre}</option>)}
        </select>

        {procesadores.length > 0 && (
            <>
            <h2>2) Micro (de la marca)</h2>
            <select value={microId} onChange={e => { setMicroId(e.target.value); setMotherId(""); }}>
                <option value="">-- Elegir --</option>
                {procesadores.map(p => <option key={p.id} value={p.id}>{p.nombre}</option>)}
            </select>
            </>
        )}

        {mothers.length > 0 && (
            <>
            <h2>3) Mother (compatible con el micro)</h2>
            <select value={motherId} onChange={e => setMotherId(e.target.value)}>
                <option value="">-- Elegir --</option>
                {mothers.map(m => <option key={m.id} value={m.id}>{m.nombre}</option>)}
            </select>
            </>
        )}

        {coolers.length > 0 && (
            <>
            <h2>4) Coolers (compatibles con la mother)</h2>
            <select>
                <option value="">-- Elegir --</option>
                {coolers.map(c => <option key={c.id} value={c.id}>{c.nombre}</option>)}
            </select>
            </>
        )}
        </div>
    );
}
