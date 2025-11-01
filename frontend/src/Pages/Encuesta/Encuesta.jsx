import React, { useState } from "react";

const Encuesta = () => {
  const [uso, setUso] = useState("");
  const [tipo, setTipo] = useState("");
  const [almacenamiento, setAlmacenamiento] = useState("");
  const [monitor, setMonitor] = useState("");
  const [pantalla, setPantalla] = useState("");
  const [memoria, setMemoria] = useState("");
  const [usoIntensivo, setUsoIntensivo] = useState("");
  const clasePregunta = "text-2xl font-semibold mb-4 text-[#ffffff] dark:text-[#00FF84]";
  const claseRespuesta = "text-lg block mb-2 cursor-pointer hover:text-[#00FF84] transition";
  const claseRespuestaFinal = "text-lg block mb-2 transition";
  const [resultado, setResultado] = useState(null);

  //Función para finalizar la encuesta
  const finalizarEncuesta = () => {
    let id = null;

    if (tipo === "escritorio" && uso === "oficina") {
      if (almacenamiento === "mucha") {
        if (monitor === "si") id = 10;
        if (monitor === "no") id = 8;
      } else if (almacenamiento === "media") {
        if (monitor === "si") id = 10;
        if (monitor === "no") id = 8;
      } else if (almacenamiento === "poca") {
        id = 9;
      }
    }

    //(Aca iría el resto de la lógica de selección de id según tipo y uso)
    setResultado(id);
  };

  // ===========================
  // CÁLCULO FINAL DEL ID DE PC
  // ===========================
  const calcularPC = () => {
    if (tipo === "escritorio" && uso === "diseño") {
      if (almacenamiento === "mucha") return 2;
      if (almacenamiento === "media") return 1;
      if (almacenamiento === "poca") return 3;
    }

    if (tipo === "escritorio" && uso === "gamer") {
      if (usoIntensivo === "bajo") return 4;
      if (usoIntensivo === "normal") return 5;
      if (usoIntensivo === "intensivo") return 6;
    }

    if (tipo === "escritorio" && uso === "oficina") {
      if (almacenamiento === "mucha") return 7;
      if (almacenamiento === "poca") return 9;

      if (almacenamiento === "media") {
        if (monitor === "si") return 10;
        if (monitor === "no") return 8;
      }
    }

    if (tipo === "notebook" && uso === "diseño") {
      if (pantalla === "chica" && usoIntensivo === "bajo") return 1;
      if (pantalla === "chica" && usoIntensivo === "normal") return 2;
      if (pantalla === "chica" && usoIntensivo === "intensivo") return 3;
      if (pantalla === "grande" && usoIntensivo === "bajo") return 1;
      if (pantalla === "grande" && usoIntensivo === "normal") return 2;
      if (pantalla === "grande" && usoIntensivo === "intensivo") return 3;
    }

    if (tipo === "notebook" && uso === "gamer") {
      if (almacenamiento === "mucha" && memoria === "mucha") return 4;
      if (almacenamiento === "mucha" && memoria === "poca") return 5;
      if (almacenamiento === "poca") return 6;
    }

    if (tipo === "notebook" && uso === "oficina") {
      if (almacenamiento === "mucha") {
        if (pantalla === "chica") return 8;
        if (pantalla === "grande") return 10;
      }
      if (almacenamiento === "media") return 7;
      if (almacenamiento === "poca") return 9;
    }
  };

  // ===========================
  // FINALIZAR ENCUESTA
  // ===========================
  const handleFinalizar = () => {
    const idPC = calcularPC();
    if (idPC && tipo) {
      const tipoRuta = tipo === "escritorio" ? "PC Escritorio" : "Notebook";
      window.location.href = `/info/${encodeURIComponent(tipoRuta)}/${idPC}`;
    }
  };

    //Función para reiniciar toda la encuesta
  const reiniciarEncuesta = () => {
    setTipo("");
    setUso("");
    setAlmacenamiento("");
    setMonitor("");
    setPantalla("");
    setMemoria("");
    setUsoIntensivo("");
    setResultado(null);
  };

  //Funcion que guarda las respuestas para mostrarlas al final
  const idFinal = calcularPC();

  // ===========================
  // INTERFAZ
  // ===========================
  return (
    <div>
      <h2
        className="text-4xl font-bold text-center border-b-2 pt-4 pb-4
        text-[#000000] border-[#000000]
        dark:text-[#00FF84] dark:border-[#00FF84]"
      >
        Encuesta para elegir tu computadora ideal
      </h2>

      <div 
        className="rounded-3xl p-8 shadow border-2 max-w-[700px] mx-auto mt-10 space-y-8
        bg-[#1F2937] text-white border-[#1F2937] hover:shadow-[0_0_20px_#1F2937]
        dark:bg-black dark:text-white dark:border-[#00FF84] dark:hover:shadow-[0_0_20px_#00FF84]"
      >
        {/* 1️⃣ USO */}
        {!uso && (
          <>
            <p className={clasePregunta}>¿Para qué vas a usar la computadora?</p>
            <label className={claseRespuesta}>
              <input type="radio" name="uso" value="diseño" onChange={(e) => setUso(e.target.value)} />
              Diseño gráfico / Multimedia
            </label>
            <label className={claseRespuesta}>
              <input
                type="radio"
                name="uso"
                value="gamer"
                onChange={(e) => setUso(e.target.value)}
              />{" "}
              Gamer
            </label>
            <label className={claseRespuesta}>
              <input
                type="radio"
                name="uso"
                value="oficina"
                onChange={(e) => setUso(e.target.value)}
              />{" "}
              Oficina / Hogar
            </label>
          </>
        )}

        {/* 2️⃣ TIPO */}
        {uso && !tipo && (
          <>
            <p  className={clasePregunta}>¿Qué tipo de computadora preferís?</p>
            <label className={claseRespuesta}>
              <input
                type="radio"
                name="tipo"
                value="escritorio"
                onChange={(e) => setTipo(e.target.value)}
              />{" "}
              PC de escritorio
            </label>
            <label className={claseRespuesta}>
              <input
                type="radio"
                name="tipo"
                value="notebook"
                onChange={(e) => setTipo(e.target.value)}
              />{" "}
              Notebook
            </label>
          </>
        )}

        {/* ======================
            CAMINO A: Diseño + Escritorio
          ====================== */}
        {uso === "diseño" && tipo === "escritorio" && !almacenamiento && (
          <>
            <p  className={clasePregunta}>¿Qué nivel de almacenamiento necesitás?</p>
            <label className={claseRespuesta}><input type="radio" value="mucha" name="almacenamiento" onChange={e => setAlmacenamiento(e.target.value)} /> Mucha</label>
            <label className={claseRespuesta}><input type="radio" value="media" name="almacenamiento" onChange={e => setAlmacenamiento(e.target.value)} /> Media</label>
            <label className={claseRespuesta}><input type="radio" value="poca" name="almacenamiento" onChange={e => setAlmacenamiento(e.target.value)} /> Poca</label>
          </>
        )}

        {/* ======================
            CAMINO B: Gamer + Escritorio
          ====================== */}
        {uso === "gamer" && tipo === "escritorio" && !usoIntensivo && (
          <>
            <p  className={clasePregunta}>¿Qué nivel de uso tendrá la PC?</p>
            <label className={claseRespuesta}><input type="radio" value="bajo" name="usoIntensivo" onChange={e => setUsoIntensivo(e.target.value)} /> Bajo</label>
            <label className={claseRespuesta}><input type="radio" value="normal" name="usoIntensivo" onChange={e => setUsoIntensivo(e.target.value)} /> Normal</label>
            <label className={claseRespuesta}><input type="radio" value="intensivo" name="usoIntensivo" onChange={e => setUsoIntensivo(e.target.value)} /> Intensivo</label>
          </>
        )}

        {/* ======================
            CAMINO C: Oficina + Escritorio
          ====================== */}
        {uso === "oficina" && tipo === "escritorio" && !almacenamiento && (
          <>
            <p  className={clasePregunta}>Importancia del almacenamiento:</p>
            <label className={claseRespuesta}><input type="radio" value="mucha" name="almacenamiento" onChange={e => setAlmacenamiento(e.target.value)} /> Mucha</label>
            <label className={claseRespuesta}><input type="radio" value="media" name="almacenamiento" onChange={e => setAlmacenamiento(e.target.value)} /> Media</label>
            <label className={claseRespuesta}><input type="radio" value="poca" name="almacenamiento" onChange={e => setAlmacenamiento(e.target.value)} /> Poca</label>
          </>
        )}

        {uso === "oficina" && tipo === "escritorio" && almacenamiento === "media" && !monitor && (
          <>
            <p  className={clasePregunta}>¿Querés incluir monitor?</p>
            <label className={claseRespuesta}><input type="radio" value="si" name="monitor" onChange={e => setMonitor(e.target.value)} /> Sí</label>
            <label className={claseRespuesta}><input type="radio" value="no" name="monitor" onChange={e => setMonitor(e.target.value)} /> No</label>
          </>
        )}

        {/* ======================
            CAMINO D: Diseño + Notebook
          ====================== */}
        {uso === "diseño" && tipo === "notebook" && !pantalla && (
          <>
            <p  className={clasePregunta}>Tamaño de pantalla:</p>
            <label className={claseRespuesta}><input type="radio" value="chica" name="pantalla" onChange={e => setPantalla(e.target.value)} /> Chica</label>
            <label className={claseRespuesta}><input type="radio" value="grande" name="pantalla" onChange={e => setPantalla(e.target.value)} /> Grande</label>
          </>
        )}

        {uso === "diseño" && tipo === "notebook" && pantalla && !usoIntensivo && (
          <>
            <p  className={clasePregunta}>Uso esperado:</p>
            <label className={claseRespuesta}><input type="radio" value="bajo" name="usoIntensivo" onChange={e => setUsoIntensivo(e.target.value)} /> Bajo</label>
            <label className={claseRespuesta}><input type="radio" value="normal" name="usoIntensivo" onChange={e => setUsoIntensivo(e.target.value)} /> Normal</label>
            <label className={claseRespuesta}><input type="radio" value="intensivo" name="usoIntensivo" onChange={e => setUsoIntensivo(e.target.value)} /> Intensivo</label>
          </>
        )}

        {/* ======================
            CAMINO E: Gamer + Notebook
          ====================== */}
        {uso === "gamer" && tipo === "notebook" && !almacenamiento && (
          <>
            <p  className={clasePregunta}>Importancia del almacenamiento:</p>
            <label className={claseRespuesta}><input type="radio" value="mucha" name="almacenamiento" onChange={e => setAlmacenamiento(e.target.value)} /> Mucha</label>
            <label className={claseRespuesta}><input type="radio" value="poca" name="almacenamiento" onChange={e => setAlmacenamiento(e.target.value)} /> Poca</label>
          </>
        )}

        {uso === "gamer" && tipo === "notebook" && almacenamiento === "mucha" && !memoria && (
          <>
            <p  className={clasePregunta}>Cantidad de memoria RAM:</p>
            <label className={claseRespuesta}><input type="radio" value="mucha" name="memoria" onChange={e => setMemoria(e.target.value)} /> Mucha</label>
            <label className={claseRespuesta}><input type="radio" value="poca" name="memoria" onChange={e => setMemoria(e.target.value)} /> Poca</label>
          </>
        )}

        {/* ======================
            CAMINO F: Oficina + Notebook
          ====================== */}
        {uso === "oficina" && tipo === "notebook" && !almacenamiento && (
          <>
            <p className={clasePregunta}>Importancia del almacenamiento:</p>
            <label className={claseRespuesta}><input type="radio" value="mucha" name="almacenamiento" onChange={e => setAlmacenamiento(e.target.value)} /> Mucha</label>
            <label className={claseRespuesta}><input type="radio" value="media" name="almacenamiento" onChange={e => setAlmacenamiento(e.target.value)} /> Media</label>
            <label className={claseRespuesta}><input type="radio" value="poca" name="almacenamiento" onChange={e => setAlmacenamiento(e.target.value)} /> Poca</label>
          </>
        )}

        {uso === "oficina" && tipo === "notebook" && almacenamiento === "mucha" && !pantalla && (
          <>
            <p className={clasePregunta}>Tamaño de pantalla:</p>
            <label className={claseRespuesta}><input type="radio" value="grande" name="pantalla" onChange={e => setPantalla(e.target.value)} /> Grande</label>
            <label className={claseRespuesta}><input type="radio" value="chica" name="pantalla" onChange={e => setPantalla(e.target.value)} /> Chica</label>
          </>
        )}

                {/* === RESUMEN FINAL === */}
        {idFinal && (
          <div className="text-center">
            <p className={clasePregunta}>Resumen de tus elecciones</p>
            <p className={claseRespuestaFinal}><strong>Uso: </strong> {uso}</p>
            <p className={claseRespuestaFinal}><strong>Tipo: </strong> {tipo}</p>
            {almacenamiento && <p className={claseRespuestaFinal}><strong>Almacenamiento: </strong> {almacenamiento}</p>}
            {monitor && <p className={claseRespuestaFinal}><strong>Monitor: </strong> {monitor}</p>}
            {pantalla && <p className={claseRespuestaFinal}><strong>Pantalla: </strong> {pantalla}</p>}
            {memoria && <p className={claseRespuestaFinal}><strong>Memoria: </strong> {memoria}</p>}
            {usoIntensivo && <p className={claseRespuestaFinal}><strong>Nivel de uso: </strong> {usoIntensivo}</p>}
          </div>
        )}
      </div>

      {/* ✅ BOTÓN FINALIZAR */}
      {(() => {
        const id = calcularPC();
        if (id) {
          return  <div>
                    {idFinal && (
                      <div className="text-center mt-10">
                        {/* Botone reiniciar encuesta */}
                        {(tipo || resultado) && (
                          <div className="flex justify-center gap-48 mt-6">
                            <button
                              className="bg-[#ffffff] text-[#000000] font-bold px-8 py-3 rounded-full border-2
                              border-[#000000] hover:bg-[#1F2937] hover:text-[#ffffff] hover:border-[#1F2937]
                              dark:bg-[#000000] dark:text-[#00FF84] dark:border-[#00FF84]
                              dark:hover:bg-[#00FF84] dark:hover:text-black dark:hover:shadow-[0_0_15px_#00FF84]
                              transition transform hover:scale-105"
                              onClick={reiniciarEncuesta}
                            >
                              Reiniciar encuesta
                            </button>
                            {/* Boton finalizar encuesta */}
                            <button 
                              className="bg-[#ffffff] text-[#000000] font-bold px-8 py-3 rounded-full border-2
                              border-[#000000] hover:bg-[#1F2937] hover:text-[#ffffff] hover:border-[#1F2937]
                              dark:bg-[#000000] dark:text-[#00FF84] dark:border-[#00FF84]
                              dark:hover:bg-[#00FF84] dark:hover:text-black dark:hover:shadow-[0_0_15px_#00FF84]
                              transition transform hover:scale-105"
                              onClick={handleFinalizar}
                            >
                              Finalizar encuesta
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
        }
      })()}
    </div>
  );
};

export default Encuesta;






// import React, { useState } from "react";
// import StepWizard from "react-step-wizard";
// import { Row, Col, Button, FormGroup, Label, Input } from "reactstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';

// //Botones de navegación
// const ActionButtons = ({ currentStep, totalSteps, previousStep, nextStep, lastStep, preguntaId }) => (
//     <Row className="mt-3">
//         {currentStep > 1 && <Col><Button color="secondary" onClick={previousStep}>Back</Button></Col>}
//         <Col>
//         {preguntaId !== 14 && <Button color="primary" onClick={nextStep}>Next</Button>}
//         {preguntaId === 14 && <Button color="success" onClick={lastStep}>Finish</Button>}
//         </Col>
//     </Row>
// );

// //Array de preguntas dinámico
// const preguntas = [
//     { id: 1, texto: "¿Qué tipo de computadora buscás?", opciones: ["Notebook", "Escritorio", "Cualquiera"] },
//     { id: 2, texto: "¿Querés que sea PC gamer?", opciones: ["Sí", "No", "No sé"] },
//     { id: 3, texto: "¿Querés extras como teclado mecánico o RGB?", opciones: ["Sí", "No"] },
//     { id: 4, texto: "¿La vas a usar para Juegos / Oficina / Diseño?", opciones: ["Juegos", "Oficina", "Diseño", "Todo"] },
//     { id: 5, texto: "¿Cuánto almacenamiento necesitás?", opciones: ["256GB", "512GB", "1TB", "Más de 1TB"] },
//     { id: 6, texto: "¿Qué marca preferís?", opciones: ["Acer", "Apple", "Asus", "Dell", "HP", "Lenovo", "Samsung", "Cualquiera"] },
//     { id: 7, texto: "¿Qué tamaño de pantalla preferís?", opciones: ["13\"", "15\"", "17\"", "No me importa"] },
//     { id: 8, texto: "¿Querés pantalla táctil?", opciones: ["Sí", "No"] },
//     { id: 9, texto: "¿Querés pantalla led?", opciones: ["Sí", "No"] },
//     { id: 10, texto: "¿Cuánta memoria RAM querés?", opciones: ["8GB", "16GB", "32GB", "Más de 32GB"] },
//     { id: 11, texto: "¿Querés GPU dedicada?", opciones: ["Sí", "No"] },
//     { id: 12, texto: "¿Qué procesador preferís?", opciones: ["Intel", "AMD", "No me importa"] },
//     { id: 13, texto: "¿Cuál es tu presupuesto máximo?", opciones: ["<300k", "300k-600k", ">600k"] },
// ];

// //Componente de pregunta genérica
// const Pregunta = ({ pregunta, respuestas, setRespuestas, nextStep, previousStep, lastStep, currentStep, totalSteps, userCallback }) => {
//     const [error, setError] = useState("");

//     const onChange = e => {
//         setRespuestas(prev => ({
//         ...prev,
//         [pregunta.id]: e.target.value
//         }));
//     };

//     const validate = () => {
//         if(!respuestas[pregunta.id]) setError("Por favor, seleccione una opción");
//         else{
//         setError("");
//         nextStep();
//         userCallback({ [pregunta.id]: respuestas[pregunta.id] });
//         }
//     };

//     return(
//         <div>
//             <span style={{ color: "red" }}>{error}</span>
//             <h3>{pregunta.texto}</h3>
//             <FormGroup>
//                 {pregunta.opciones.map(op => (
//                 <Label key={op} style={{ display: "block" }}>
//                     <Input
//                     type="radio"
//                     name={pregunta.id}
//                     value={op}
//                     checked={respuestas[pregunta.id] === op}
//                     onChange={onChange}
//                     />{' '}
//                     {op}
//                 </Label>
//                 ))}
//             </FormGroup>
//             <ActionButtons
//                 nextStep={validate}
//                 previousStep={previousStep}
//                 lastStep={lastStep}
//                 currentStep={currentStep}
//                 totalSteps={totalSteps}
//                 preguntaId={pregunta.id}
//             />
//         </div>
//     );
// };

// //Wizard principal
// const Encuesta = () => {
//     const [respuestas, setRespuestas] = useState({});
//     const [stepWizard, setStepWizard] = useState(null);

//     const handleComplete = () => {
//         alert("Encuesta finalizada! Respuestas: " + JSON.stringify(respuestas, null, 2));
//         console.log("Respuestas completas:", respuestas);
//     };

//     return(
//         <div className="container mt-4">
//         <StepWizard instance={setStepWizard}>
//             {preguntas.map(p => (
//                 <Pregunta
//                 key={p.id}
//                 pregunta={p}
//                 respuestas={respuestas}
//                 setRespuestas={setRespuestas}
//                 userCallback={(newRespuesta) => setRespuestas(prev => ({ ...prev, ...newRespuesta }))}
//                 nextStep={(cb) => stepWizard?.nextStep(cb)}
//                 previousStep={stepWizard?.previousStep}
//                 currentStep={stepWizard?.currentStep}
//                 totalSteps={preguntas.length}
//                 lastStep={handleComplete}
//                 />
//             ))}
//             <div>
//             <h2>Resultados finales:</h2>
//             <pre>{JSON.stringify(respuestas, null, 2)}</pre>
//             <Button color="success" onClick={handleComplete}>Finalizar</Button>
//             </div>
//         </StepWizard>
//         </div>
//     );
// };

// export default Encuesta;
