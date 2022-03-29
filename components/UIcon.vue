<template>
    <i class="icon bi" :class="className"></i>
</template>

<script lang="ts" setup>
import { computed, defineProps } from "vue";
import "bootstrap-icons/font/bootstrap-icons.css";

const { icon } = defineProps<{ icon: string }>();
const className = computed(() => `bi-${icon}`);
</script>

<style scoped>
.icon {
    color: var(--ueli-white);
}
</style>
