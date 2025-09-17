
const API = 'https://api.spacexdata.com/v5/launches';

const getData = async (id) => {
    const apiURL = id ? `${API}/${id}` : API;

    try {
        const response = await fetch(apiURL);
        if (!response.ok) {
            throw new Error(`Error en la respuesta: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch Error:', error);
        return null;
    }
};

export default getData;
