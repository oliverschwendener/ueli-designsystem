<template>
    <input class="input" type="number" v-model="localValue" @change="changed" />
</template>

<script lang="ts" setup>
import { ref, defineEmits, defineProps } from "vue";

const emit = defineEmits<{
    (e: "changed", payload: number): void;
}>();

const { value } = defineProps<{
    value: number;
}>();

const localValue = ref(value);
const changed = (): void => emit("changed", Number(localValue.value));
</script>

<style scoped>
.input {
    width: 100%;
    background-color: var(--ueli-black-800);
    border: 1px solid var(--ueli-black-700);
    padding: var(--ueli-spacing-1x);
    box-sizing: border-box;
    border-radius: var(--ueli-corners);
    color: var(--ueli-white);
    transition: var(--ueli-transition);
    font-family: var(--ueli-font-family);
}

.input:focus {
    border: 1px solid var(--ueli-black-400);
    outline: none;
}
</style>
