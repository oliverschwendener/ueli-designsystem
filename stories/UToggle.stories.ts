/* eslint-disable @typescript-eslint/no-explicit-any */
import { UToggle } from "../index";
import { ref } from "vue";

export default {
    title: "UToggle",
    component: UToggle,
};

const Template = (args: { toggled: boolean }) => ({
    components: { UToggle },
    setup() {
        const toggled = ref(args.toggled);

        const toggle = (): void => {
            toggled.value = !toggled.value;
        };

        return { toggled, toggle };
    },
    template: `<div><UToggle :toggled="toggled" @toggle="toggle" /></div>`,
});

export const DefaultToggle: any = Template.bind({});
DefaultToggle.args = { toggled: false };
