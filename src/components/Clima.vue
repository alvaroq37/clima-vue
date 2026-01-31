<script setup>
import useClima from '../composables/useClima';

const{formatearTemperatura} = useClima();

defineProps({
    clima: {
        type: Object,
        required: true
    }
});

</script>
<template>
    <div class="resultado">
        <h2>Clima de: {{ clima.name }}</h2>
        <p class="actual">&deg;C {{formatearTemperatura(clima.main.temp) }}</p>
        <div class="temperaturas">
            <p>Min: <span>&deg;C</span>{{ formatearTemperatura(clima.main.temp_min) }}</p>
            <p>Max: <span>&deg;C</span>{{ formatearTemperatura(clima.main.temp_max) }}</p>
        </div>
    </div>
</template>