<template>
    <div class="container">
        <div v-if="hasTitle" class="title">{{ title }}</div>
        <div class="settings">
            <slot name="settings"></slot>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, defineProps } from "vue";
const { title } = defineProps<{ title?: string }>();
const hasTitle = computed((): boolean => title !== "");
</script>

<style scoped>
.container {
    padding: var(--ueli-spacing-4x);
    box-sizing: border-box;
}

.title {
    font-size: var(--ueli-font-size-24);
    font-family: var(--ueli-font-family);
    color: var(--ueli-white);
}

.settings {
    display: flex;
    flex-direction: column;
    width: 100%;
}
</style>
