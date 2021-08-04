<template>
    <div class="toggle" :class="getToggledCssClasses(toggled)" @click="toggle">
        <div class="indicator" :class="getToggledCssClasses(toggled)"></div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        toggled: {
            required: true,
            type: Boolean,
        },
    },

    setup({}, { emit }) {
        const toggle = (): void => emit("toggle");
        const getToggledCssClasses = (t: boolean) => (t ? "toggled" : "");

        return {
            toggle,
            getToggledCssClasses,
        };
    },
});
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
