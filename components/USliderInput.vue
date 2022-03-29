<template>
    <div class="container">
        <div v-if="computedDisplayValue" class="value-container">
            <span class="value">{{ localValue }}</span>
        </div>
        <div class="slider-container">
            <input
                class="range-slider"
                type="range"
                :min="min"
                :max="max"
                :step="step"
                v-model="localValue"
                @change="changed"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, defineEmits, defineProps, computed } from "vue";

const emit = defineEmits<{
    (e: "valueChanged", payload: number): void;
}>();

const { value, displayValue } = defineProps<{
    min: number;
    max: number;
    step: number;
    value: number;
    displayValue?: boolean;
}>();

const localValue = ref(value);
const changed = (): void => emit("valueChanged", Number(localValue.value));
const computedDisplayValue = computed(() => displayValue ?? false);
</script>

<style scoped>
.container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}

.value-container {
    width: 100%;
    padding: var(--ueli-spacing-2x) 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.slider-container {
    width: 100%;
}

.range-slider {
    width: 100%;
}

.value {
    color: var(--ueli-white);
    font-family: var(--ueli-font-family);
}
</style>
