<template>
    <button @click="onClick" class="button" :class="[type, size]">
        {{ label }}
    </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    emits: {
        click: (): boolean => true,
    },

    props: {
        label: {
            type: String,
            required: true,
        },

        type: {
            type: String,
            required: true,
        },

        size: {
            type: String,
            required: true,
        },
    },

    setup({}, { emit }) {
        return {
            onClick: () => emit("click"),
        };
    },
});
</script>

<style scoped>
.button {
    border-radius: var(--ueli-corners);
    border: 2px solid transparent;
    cursor: pointer;
    transition: var(--ueli-transition);
    font-family: var(--ueli-font-family);
    font-weight: var(--ueli-font-weight-600);
}

.button.small {
    padding: var(--ueli-spacing-1x) var(--ueli-spacing-2x);
    font-size: var(--ueli-font-size-11);
}

.button.medium {
    padding: var(--ueli-spacing-2x) var(--ueli-spacing-3x);
    font-size: var(--ueli-font-size-13);
}

.button.default {
    background-color: var(--ueli-black-700);
    border-color: var(--ueli-black-700);
    color: var(--ueli-black-50);
}

.button.default:hover {
    background-color: var(--ueli-black-800);
    border-color: var(--ueli-black-800);
}

.button.default:active {
    border-color: var(--ueli-black-600);
}

.button.success {
    background-color: var(--ueli-green-a400);
    border-color: var(--ueli-green-a400);
    color: var(--ueli-white);
}

.button.success:hover {
    background-color: var(--ueli-green-a700);
    border-color: var(--ueli-green-a700);
}

.button.success:active {
    border-color: var(--ueli-green-a200);
}

.button.warning {
    background-color: var(--ueli-orange-500);
    border-color: var(--ueli-orange-500);
    color: var(--ueli-white);
}

.button.warning:hover {
    background-color: var(--ueli-orange-700);
    border-color: var(--ueli-orange-700);
}

.button.warning:active {
    border-color: var(--ueli-orange-300);
}

.button.danger {
    background-color: var(--ueli-red-500);
    border-color: var(--ueli-red-500);
    color: var(--ueli-white);
}

.button.danger:hover {
    background-color: var(--ueli-red-700);
    border-color: var(--ueli-red-700);
}

.button.danger:active {
    border-color: var(--ueli-red-300);
}
</style>
