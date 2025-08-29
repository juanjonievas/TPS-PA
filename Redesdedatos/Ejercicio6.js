//Calcular estadísticas de red

const traficoRed = {
    "08:00": 1250, // MB transferidos
    "09:00": 1870,
    "10:00": 2100,
    "11:00": 1950,
    "12:00": 1600,
    "13:00": 1300,
    "14:00": 1700,
    "15:00": 2200,
    "16:00": 1800,
    "17:00": 1500
    };
  
const totalTransferido = Object.values(traficoRed)
    .reduce((acum, valor) => acum + valor, 0);
  
  
const [horaPico, maximo] = Object.entries(traficoRed)
    .reduce((max, actual) => (actual[1] > max[1] ? actual : max));
  
console.log("Total transferido:", totalTransferido, "MB");
console.log("Hora con mayor tráfico:", horaPico, "con", maximo, "MB");