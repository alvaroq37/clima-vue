import axios from "axios";

export default function useClima() {
  const consultarClima = async ({ ciudad, pais }) => {
    const key = import.meta.env.VITE_API_KEY;

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${key}`;
      const { data } = await axios(url);
      const { lat, lon} = data.coord;
      const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;
      const { data: dataClima } = await axios(urlClima);
      console.log(dataClima);
      return dataClima;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    consultarClima,
  };
}
