import React, { useState } from "react";
import StepWizard from "react-step-wizard";
import { Row, Col, Button, FormGroup, Label, Input } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

//Botones de navegación
const ActionButtons = ({ currentStep, totalSteps, previousStep, nextStep, lastStep, preguntaId }) => (
    <Row className="mt-3">
        {currentStep > 1 && <Col><Button color="secondary" onClick={previousStep}>Back</Button></Col>}
        <Col>
        {preguntaId !== 14 && <Button color="primary" onClick={nextStep}>Next</Button>}
        {preguntaId === 14 && <Button color="success" onClick={lastStep}>Finish</Button>}
        </Col>
    </Row>
);

//Array de preguntas dinámico
const preguntas = [
    { id: 1, texto: "¿Qué tipo de computadora buscás?", opciones: ["Notebook", "Escritorio", "Cualquiera"] },
    { id: 2, texto: "¿Querés que sea PC gamer?", opciones: ["Sí", "No", "No sé"] },
    { id: 3, texto: "¿Querés extras como teclado mecánico o RGB?", opciones: ["Sí", "No"] },
    { id: 4, texto: "¿La vas a usar para Juegos / Oficina / Diseño?", opciones: ["Juegos", "Oficina", "Diseño", "Todo"] },
    { id: 5, texto: "¿Cuánto almacenamiento necesitás?", opciones: ["256GB", "512GB", "1TB", "Más de 1TB"] },
    { id: 6, texto: "¿Qué marca preferís?", opciones: ["Acer", "Apple", "Asus", "Dell", "HP", "Lenovo", "Samsung", "Cualquiera"] },
    { id: 7, texto: "¿Qué tamaño de pantalla preferís?", opciones: ["13\"", "15\"", "17\"", "No me importa"] },
    { id: 8, texto: "¿Querés pantalla táctil?", opciones: ["Sí", "No"] },
    { id: 9, texto: "¿Querés pantalla led?", opciones: ["Sí", "No"] },
    { id: 10, texto: "¿Cuánta memoria RAM querés?", opciones: ["8GB", "16GB", "32GB", "Más de 32GB"] },
    { id: 11, texto: "¿Querés GPU dedicada?", opciones: ["Sí", "No"] },
    { id: 12, texto: "¿Qué procesador preferís?", opciones: ["Intel", "AMD", "No me importa"] },
    { id: 13, texto: "¿Cuál es tu presupuesto máximo?", opciones: ["<300k", "300k-600k", ">600k"] },
];

//Componente de pregunta genérica
const Pregunta = ({ pregunta, respuestas, setRespuestas, nextStep, previousStep, lastStep, currentStep, totalSteps, userCallback }) => {
    const [error, setError] = useState("");

    const onChange = e => {
        setRespuestas(prev => ({
        ...prev,
        [pregunta.id]: e.target.value
        }));
    };

    const validate = () => {
        if(!respuestas[pregunta.id]) setError("Por favor, seleccione una opción");
        else{
        setError("");
        nextStep();
        userCallback({ [pregunta.id]: respuestas[pregunta.id] });
        }
    };

    return(
        <div>
            <span style={{ color: "red" }}>{error}</span>
            <h3>{pregunta.texto}</h3>
            <FormGroup>
                {pregunta.opciones.map(op => (
                <Label key={op} style={{ display: "block" }}>
                    <Input
                    type="radio"
                    name={pregunta.id}
                    value={op}
                    checked={respuestas[pregunta.id] === op}
                    onChange={onChange}
                    />{' '}
                    {op}
                </Label>
                ))}
            </FormGroup>
            <ActionButtons
                nextStep={validate}
                previousStep={previousStep}
                lastStep={lastStep}
                currentStep={currentStep}
                totalSteps={totalSteps}
                preguntaId={pregunta.id}
            />
        </div>
    );
};

//Wizard principal
const Encuesta = () => {
    const [respuestas, setRespuestas] = useState({});
    const [stepWizard, setStepWizard] = useState(null);

    const handleComplete = () => {
        alert("Encuesta finalizada! Respuestas: " + JSON.stringify(respuestas, null, 2));
        console.log("Respuestas completas:", respuestas);
    };

    return(
        <div className="container mt-4">
        <StepWizard instance={setStepWizard}>
            {preguntas.map(p => (
                <Pregunta
                key={p.id}
                pregunta={p}
                respuestas={respuestas}
                setRespuestas={setRespuestas}
                userCallback={(newRespuesta) => setRespuestas(prev => ({ ...prev, ...newRespuesta }))}
                nextStep={(cb) => stepWizard?.nextStep(cb)}
                previousStep={stepWizard?.previousStep}
                currentStep={stepWizard?.currentStep}
                totalSteps={preguntas.length}
                lastStep={handleComplete}
                />
            ))}
            <div>
            <h2>Resultados finales:</h2>
            <pre>{JSON.stringify(respuestas, null, 2)}</pre>
            <Button color="success" onClick={handleComplete}>Finalizar</Button>
            </div>
        </StepWizard>
        </div>
    );
};

export default Encuesta;
