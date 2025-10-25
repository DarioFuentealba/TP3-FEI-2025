import React, { useState } from "react";
import StepWizard from "react-step-wizard";
import { Row, Col, Button, FormGroup, Label, Input } from "reactstrap";

const ActionButtons = props => {
    const handleBack = () => {
        props.previousStep();
    }

    const handleNext = () => {
        props.nextStep();
    }

    const handleFinish = () => {
        props.lastStep();
    }

    return(
        <div>
            <row>
                {props.currentStep > 1 && (
                    <Col>
                    <Button onClick={handleBack}>Back</Button>
                    </Col>
                )}
                <Col>
                    {props.currentStep < props.totalSteps && (
                        <Button onClick={handleNext}>Next</Button>
                    )}
                    {props.currentStep === props.totalSteps && (
                        <Button onClick={handleFinish}>Finish</Button>
                    )}
                </Col>
            </row>
        </div>
    );
};

//TODO: Pregunta 1 - Tipo de equipo
const One = props => {
    const [respuesta1, setRespuesta1] = useState("");
    const [error, setError] = useState("");

    const onInputChanged = event => {
        setRespuesta1(event.target.value);
    };

    const validate1 = () => {
        if(!respuesta1) setError("Por favor, seleccione una opción");
        else{
            setError("");
            props.nextStep();
            props.userCallback({ tipo: respuesta1 }); // enviamos la respuesta
        }
    };

    return(
        <div>
            <span style={{ color: "red" }}>{error}</span>
            <h1>¿Qué tipo de computadora buscás?</h1>

            <FormGroup>
                <Label>
                    <Input
                        type="radio"
                        name="tipo"
                        value="Notebook"
                        checked={respuesta1 === "Notebook"}
                        onChange={onInputChanged}
                    />{' '}
                    Notebook
                </Label>
                <Label>
                    <Input
                        type="radio"
                        name="tipo"
                        value="Escritorio"
                        checked={respuesta1 === "Escritorio"}
                        onChange={onInputChanged}
                    />{' '}
                    Escritorio
                </Label>
                <Label>
                    <Input
                        type="radio"
                        name="tipo"
                        value="Cualquiera"
                        checked={respuesta1 === "Cualquiera"}
                        onChange={onInputChanged}
                    />{' '}
                    Cualquiera
                </Label>
            </FormGroup>

            <ActionButtons {...props} nextStep={validate1} />
        </div>
    );
};

const Two = props => {
    const [respuesta2, setRespuesta2] = useState({});
    const [error, setError] = useState("");

    const onInputChanged = event => {
        const targetName = event.target.name;
        const targetValue = event.target.value;

        setRespuesta2(respuesta2 => ({
            ...respuesta2,
            [targetName]: targetValue
        }));
    };

    const validate2 = () => {
        if(!respuesta2.age) setError("Por favor, ingrese una respuesta 2");
        else{
            setError("");
            props.nextStep();
            props.userCallback(respuesta2);
        }
    };

    return(
        <div>
            <span style={{ color: "red" }}>{error}</span>
            <h1>This is step 2 content</h1>
            <FormGroup>
                <Label>
                    Welcome <b>{props.user.name || ""}</b>
                </Label>
            </FormGroup>
            <FormGroup>
                <Label>Age:</Label>
                <Input
                    type="text"
                    name="age"
                    placeholder="Enter your age"
                    onChange={onInputChanged}
                />
            </FormGroup>
            {/*usar un espacio aca*/}
            <ActionButtons {...props} nextStep={validate2} />
        </div>
    );
};

const Three = props => {
    console.log("Step 3 revibed user object");
    console.log(props.user);

    const handleLastStep = () => {
        props.lastStep();
        props.completeCallback();
    };

    return(
        <div>
            <h2>Sumary user detail</h2>
            <p>Name: {props.user.name}</p>
            <p>Age: {props.user.age}</p>
            {/*ACA UN ESPACIO*/}
            <ActionButtons {...props} lastStep={handleLastStep} />
        </div>
    );
};

const Sample = () => {
    const [stepWizard, setStepWizard] = useState(null);
    const [user, setUser] = useState({});
    const [activeStep, setActiveStep] = useState(0);

    const assignStepWizard = instance => {
        setStepWizard(instance);
    };

    const assignUser = val => {
        console.log("Parent received user callbak");
        console.log(val);
        setUser(user => ({
            ...user,
            ...val
        }));
    };

    const handleStepChange = e => {
        console.log("step changed");
        console.log(e);
        setActiveStep(e.activeStep - 1);
    };

    const handleComplete = () => {
        alert("You r done TQ");
    };

    return(
        <div>
            <StepWizard instance={assignStepWizard} onStepChange={handleStepChange }>
                <One userCallback={assignUser}/>
                <Two user={user} userCallback={assignUser}/>
                <Three user={user} completeCallback={handleComplete}/>
            </StepWizard>
        </div>
    );
};

export default Sample //Linea 187
/*
2. Presupuesto

¿Cuál es tu presupuesto máximo?

Menos de $300.000

Entre $300.000 y $600.000

Más de $600.000

No estoy seguro

3. Uso principal

¿La vas a usar principalmente para…?

Oficina / estudio / navegar

Juegos

Diseño / edición de video / 3D

Un poco de todo

4. Gaming

(mostrar solo si eligió “Juegos” en la anterior o respondió “Sí” a gamer)

¿Querés que sea una PC gamer?

Sí

No

No sé

5. Portabilidad

(solo si es notebook o eligió “me da igual”)

¿Necesitás que sea portátil y liviana?

Sí

No

Me da igual

6. Tamaño de pantalla

(solo notebooks)

¿Qué tamaño de pantalla preferís?

Menos de 14"

Entre 14" y 16"

Más de 16"

No importa

7. Rendimiento gráfico

¿Qué importancia le das al rendimiento gráfico?

Alta (gaming / diseño)

Media (uso general + multimedia)

Baja (oficina / navegar / estudio)

8. Almacenamiento

¿Cuánto espacio de almacenamiento necesitás?

Poco (hasta 256 GB)

Medio (512 GB)

Mucho (1 TB o más)

No sé

9. SSD

¿Querés que tenga SSD (arranque rápido)?

Sí

Me da lo mismo

10. Sistema operativo

¿Preferís que ya venga con sistema operativo?

Sí, con Windows

Sí, con Linux

No importa / sin sistema

11. Batería

(solo notebooks)

¿Qué tan importante es la duración de la batería?

Muy importante (muchas horas)

Media (3-5 horas)

No importa

12. Conexiones

¿Necesitás conectarla a muchos periféricos (monitores, impresoras, etc.)?

Sí

No

13. Marca

¿Te importa la marca de la computadora?

Sí, quiero una reconocida (Dell, HP, Lenovo, Asus…)

No me importa

14. Durabilidad

¿Preferís algo económico o invertir en algo que dure más años?

Económico

Balanceado

Alta gama
*/