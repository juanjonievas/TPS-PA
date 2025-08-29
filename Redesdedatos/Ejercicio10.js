//Analizar y optimizar topología de red

const topologiaRed = {
    nodos: [
        { id: "A", tipo: "Router", ubicacion: "Planta 1" },
        { id: "B", tipo: "Switch", ubicacion: "Planta 1" },
        { id: "C", tipo: "Switch", ubicacion: "Planta 2" },
        { id: "D", tipo: "Switch", ubicacion: "Planta 3" },
        { id: "E", tipo: "Router", ubicacion: "Planta 3" }
    ],
    conexiones: [
        { origen: "A", destino: "B", ancho_banda: 1000 },
        { origen: "A", destino: "C", ancho_banda: 1000 },
        { origen: "B", destino: "C", ancho_banda: 100 },
        { origen: "B", destino: "D", ancho_banda: 100 },
        { origen: "C", destino: "D", ancho_banda: 100 },
        { origen: "C", destino: "E", ancho_banda: 1000 },
        { origen: "D", destino: "E", ancho_banda: 1000 }
    ]
};

// Inicializar contador de conexiones
const conexionesPorNodo = {};
topologiaRed.nodos.forEach(nodo => {
    conexionesPorNodo[nodo.id] = 0;
});

// Contar conexiones de cada nodo (considerando origen y destino)
topologiaRed.conexiones.forEach(conexion => {
    conexionesPorNodo[conexion.origen]++;
    conexionesPorNodo[conexion.destino]++;
});

// Ordenar nodos por número de conexiones (de mayor a menor)
const nodosOrdenados = Object.entries(conexionesPorNodo)
    .sort((a, b) => b[1] - a[1]); 

// Generar sugerencias de optimización
const sugerencias = [];
for (const [nodo, totalConexiones] of Object.entries(conexionesPorNodo)) {
    if (totalConexiones > 2) {
        sugerencias.push(`Nodo ${nodo} tiene ${totalConexiones} conexiones: considerar aumentar ancho de banda o balancear tráfico`);
    }
}

// Mostrar resultados
console.log("Conexiones por nodo:", conexionesPorNodo);
console.log("Nodos ordenados por número de conexiones:", nodosOrdenados);
console.log("Sugerencias de optimización:", sugerencias);
