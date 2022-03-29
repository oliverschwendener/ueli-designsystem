<template>
    <div class="toggle" :class="cssClass" @click="toggle">
        <div class="indicator" :class="cssClass"></div>
    </div>
</template>

<script lang="ts" setup>
import { computed, defineEmits, defineProps } from "vue";

const emit = defineEmits<{
    (e: "toggle", value: boolean): void;
}>();

const props = defineProps<{ toggled: boolean }>();
const toggle = (): void => emit("toggle", !props.toggled);
const cssClass = computed<string>(() => (props.toggled ? "toggled" : ""));
</script>

<style scoped>
.toggle {
    background-color: var(--ueli-black-800);
    width: 36px;
    height: 24px;
    border-radius: 20px;
    display: inline-flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 0 4px;
    cursor: pointer;
    transition: var(--ueli-transition);
}

.toggle:hover {
    background-color: var(--ueli-black-700);
}

.toggle:active {
    background-color: var(--ueli-black-600);
}

.toggle.toggled {
    background-color: var(--ueli-green-a700);
    justify-content: flex-end;
}

.toggle.toggled:hover {
    background-color: var(--ueli-green-a400);
}

.toggle.toggled:active {
    background-color: var(--ueli-green-a200);
}

.indicator {
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background-color: var(--ueli-black-300);
}

.indicator.toggled {
    background-color: var(--ueli-white);
}
</style>
