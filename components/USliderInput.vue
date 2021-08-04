<template>
    <div class="container">
        <div v-if="displayValue" class="value-container">
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

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
    emits: {
        valueChanged: (payload: number): boolean => payload !== undefined,
    },

    props: {
        min: {
            type: Number,
            required: true,
        },

        max: {
            type: Number,
            required: true,
        },

        step: {
            type: Number,
            required: true,
        },

        value: {
            type: Number,
            required: true,
        },

        displayValue: {
            required: false,
            default: false,
            type: Boolean,
        },
    },

    setup({ value }, { emit }) {
        const localValue = ref(value);
        const changed = (): void => emit("valueChanged", Number(localValue.value));

        return {
            localValue,
            changed,
        };
    },
});
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
