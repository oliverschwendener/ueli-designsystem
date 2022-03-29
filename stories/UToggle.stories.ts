import { Meta, Story } from "@storybook/vue3";
import { UToggle } from "../index";
import { ref } from "vue";

export default <Meta<ToggleProps>>{
    title: "UToggle",
    component: UToggle,
};

interface ToggleProps {
    toggled: boolean;
}

const Template: Story<ToggleProps> = (args) => ({
    components: { UToggle },
    setup() {
        const toggled = ref(args.toggled);

        const toggle = (newValue: boolean): void => {
            toggled.value = newValue;
        };

        return { toggled, toggle };
    },
    template: `<div><UToggle :toggled="toggled" @toggle="toggle" /></div>`,
});

export const DefaultToggle = Template.bind({});
DefaultToggle.args = { toggled: false };
