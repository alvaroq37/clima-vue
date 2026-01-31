import { computed, ref } from 'vue';
import axios from 'axios';

export default function useClima() {
  const clima = ref({});
  const cargando = ref(false);
  const error = ref(null);
  const consultarClima = async ({ ciudad, pais }) => {
    const key = import.meta.env.VITE_API_KEY;
    clima.value = {};
    error.value = null;
    try {
      cargando.value = true;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${key}`;
      const { data } = await axios(url);
      const { lat, lon} = data.coord;
      const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;
      const { data: dataClima } = await axios(urlClima);
      clima.value = dataClima;
    } catch {
      error.value = 'No se pudo obtener el clima para la ciudad y país proporcionados.';
    }finally {
      cargando.value = false;
    }
  };
  const mostrarClima = computed(() => {
    return Object.values(clima.value).length > 0;
  });

  const formatearTemperatura = temperatura => parseInt(temperatura - 273.15);

  return {
    consultarClima,
    clima,
    mostrarClima,
    formatearTemperatura,
    cargando,
    error
  };
}
