<template>
    <div class="icon-button" :class="computedSize">
        <UIcon class="icon" :class="computedSize" :icon="icon" />
    </div>
</template>

<script lang="ts" setup>
import { computed, defineProps } from "vue";
import UIcon from "./UIcon.vue";

const { size } = defineProps<{
    icon: string;
    size?: string;
}>();

const computedSize = computed<string>(() => size ?? "medium");
</script>

<style scoped>
.icon-button {
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    transition: var(--ueli-transition);
    cursor: pointer;
    opacity: 0.8;
    box-sizing: border-box;
    font-size: var(--ueli-font-size-13);
}

.icon-button:hover {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.2);
}

.icon-button:active {
    background-color: rgba(0, 0, 0, 0.3);
}

.icon-button.small {
    padding: var(--ueli-spacing-1x);
}

.icon-button.medium {
    padding: var(--ueli-spacing-2x);
}

.icon-button.large {
    padding: var(--ueli-spacing-3x);
}

.icon {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.icon.small {
    font-size: var(--ueli-font-size-11);
}

.icon.medium {
    font-size: var(--ueli-font-size-13);
}

.icon.large {
    font-size: var(--ueli-font-size-16);
}
</style>
