import getData from '../utils/getData.js';

const Character = async () => {
  const id = location.hash.slice(2);
  console.log("ID buscado:", id);

  const launch = await getData(id);

  if (!launch || !launch.name) {
    return `<div class="Error">No se encontró el lanzamiento con id: ${id}</div>`;
  }

  const view = `
    <section class="Launch-detail">
      <img src="${launch.links?.patch?.large || ''}" alt="${launch.name}" />
      <div class="Launch-detail-info">
        <h2>${launch.name}</h2>
        <p><strong>Vuelo:</strong> ${launch.flight_number}</p>
        <p><strong>Fecha:</strong> ${new Date(launch.date_utc).toLocaleString()}</p>
        <p><strong>Detalles:</strong> ${launch.details || 'No hay detalles'}</p>
        <h3>Fallas:</h3>
        <ul>
          ${launch.failures && launch.failures.length > 0 
            ? launch.failures.map(f => `<li>${f.reason}</li>`).join('') 
            : '<li>Ninguna</li>'}
        </ul>
      </div>
    </section>
  `;
  return view;
};

export default Character;



