// src/data/pcData.js
export const pcs = {
  escritorio: {
    diseño: [
      { id: 1, almacenamiento: "media" },
      { id: 2, almacenamiento: "mucha" },
      { id: 3, almacenamiento: "poca" }
    ],
    gamer: [
      { id: 4, uso: "bajo" },
      { id: 5, uso: "normal" },
      { id: 6, uso: "intensivo" }
    ],
    oficina: [
      { id: 7, almacenamiento: "mucha" },
      { id: 8, almacenamiento: "media", monitor: "no" },
      { id: 9, almacenamiento: "poca" },
      { id: 10, almacenamiento: "media", monitor: "si" }
    ]
  },
  notebook: {
    diseño: [
      { id: 1, pantalla: "chica", uso: "bajo" },
      { id: 2, pantalla: "grande", uso: "normal" },
      { id: 3, pantalla: "grande", uso: "intensivo" }
    ],
    gamer: [
      { id: 4, almacenamiento: "mucha", memoria: "mucha" },
      { id: 5, almacenamiento: "mucha", memoria: "poca" },
      { id: 6, almacenamiento: "poca" }
    ],
    oficina: [
      { id: 7, almacenamiento: "media" },
      { id: 8, almacenamiento: "mucha", pantalla: "chica" },
      { id: 9, almacenamiento: "poca" },
      { id: 10, almacenamiento: "mucha", pantalla: "grande" }
    ]
  }
};
