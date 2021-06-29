<template>
    <div class="notification" :class="type">
        <div class="notification-body">
            <Icon v-if="hasIcon" class="notification-icon" :icon="icon" />
            {{ message }}
        </div>
        <div class="notification-actions">
            <IconButton v-if="closable" size="small" icon="x" @click="close" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import IconButton from "./IconButton.vue";
import Icon from "./Icon.vue";

export default defineComponent({
    props: {
        message: {
            type: String,
            required: true,
        },

        type: {
            type: String,
            required: true,
        },

        icon: {
            type: String,
            required: false,
        },

        closable: {
            type: Boolean,
            required: false,
            default: true,
        },
    },

    components: {
        Icon,
        IconButton,
    },

    computed: {
        hasIcon(): boolean {
            return this.icon !== undefined;
        },
    },

    methods: {
        close() {
            this.$emit("close");
        },
    },
});
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
    background-color: var(--ueli-green);
}

.notification.warning {
    background-color: var(--ueli-orange);
}

.notification.danger {
    background-color: var(--ueli-red);
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
