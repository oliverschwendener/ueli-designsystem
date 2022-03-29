<template>
    <div class="notification" :class="type">
        <div class="notification-body">
            <UIcon v-if="hasIcon" class="notification-icon" :icon="icon" />
            {{ message }}
        </div>
        <div class="notification-actions">
            <UIconButton v-if="computedCloseable" size="small" icon="x" @click="close" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, defineEmits, defineProps } from "vue";
import UIconButton from "./UIconButton.vue";
import UIcon from "./UIcon.vue";

const emit = defineEmits<{
    (e: "close"): void;
}>();

const { icon, closable } = defineProps<{
    message: string;
    type: string;
    icon?: string;
    closable?: boolean;
}>();

const hasIcon = computed((): boolean => icon !== undefined);
const close = () => emit("close");
const computedCloseable = computed(() => closable ?? true);
</script>

<style scoped>
.notification {
    font-size: var(--ueli-font-size-13);
    display: flex;
    flex-direction: revert;
    justify-content: flex-start;
    align-items: center;
    padding: var(--ueli-spacing-2x);
    box-sizing: border-box;
    border-radius: var(--ueli-corners);
    color: var(--ueli-white);
    font-family: var(--ueli-font-family);
}

.notification.default {
    background-color: var(--ueli-black-800);
}

.notification.success {
    background-color: var(--ueli-green-a400);
}

.notification.warning {
    background-color: var(--ueli-orange-500);
}

.notification.danger {
    background-color: var(--ueli-red-500);
}

.notification-body {
    padding: var(--ueli-spacing-1x) var(--ueli-spacing-2x);
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-grow: 1;
    font-weight: 600;
}

.notification-icon {
    margin-right: var(--ueli-spacing-2x);
}

.notification-actions {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
}
</style>
