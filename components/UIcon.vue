<template>
    <i class="icon bi" :class="className"></i>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "bootstrap-icons/font/bootstrap-icons.css";

export default defineComponent({
    props: {
        icon: {
            type: String,
            required: true,
        },
    },

    computed: {
        className(): string {
            return `bi-${this.icon}`;
        },
    },
});
</script>

<style scoped>
.icon {
    color: var(--ueli-white);
}
</style>
