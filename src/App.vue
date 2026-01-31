<script setup>
import Formulario from './components/Formulario.vue';
import useClima from './composables/useClima.js';
import Clima from './components/Clima.vue';
import Spinner from './components/Spinner.vue';
import Alerta from './components/Alerta.vue';
const {consultarClima,clima, mostrarClima, cargando, error} = useClima();

</script>

<template>
  <h1 class="titulo">Buscador de Clima</h1>
  <div class="contenedor buscador-clima">
    <Formulario @obtener-clima="consultarClima" />
    <Spinner v-if="cargando" />
    <Alerta v-if="error">{{ error }}</Alerta>
    <Clima v-if="mostrarClima" :clima="clima" />
  </div>
</template>
