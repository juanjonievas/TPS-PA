import getData from '../utils/getData.js';

const Home = async () => {
  const launches = await getData();
  console.log("Lanzamientos:", launches); // 👈 DEBUG

  if (!launches || launches.length === 0) {
    return `<div class="Error">No se encontraron lanzamientos</div>`;
  }

  const view = `
    <section class="Launches">
      ${launches.slice(0, 20).map(launch => `
        <div class="Launch-card">
          <a href="#/${launch.id}">
            <img src="${launch.links?.patch?.small || ''}" alt="${launch.name}" />
            <h2>${launch.name}</h2>
          </a>
        </div>
      `).join('')}
    </section>
  `;
  return view;
};

export default Home;


