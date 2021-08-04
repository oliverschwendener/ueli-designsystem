<template>
    <i class="icon bi" :class="className"></i>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import "bootstrap-icons/font/bootstrap-icons.css";

export default defineComponent({
    props: {
        icon: {
            type: String,
            required: true,
        },
    },

    setup({ icon }) {
        return {
            className: computed(() => `bi-${icon}`),
        };
    },
});
</script>

<style scoped>
.icon {
    color: var(--ueli-white);
}
</style>
