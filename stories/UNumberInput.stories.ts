import { Meta, Story } from "@storybook/vue3";
import { UNumberInput } from "../index";

export default <Meta<NumberInputProps>>{
    title: "UNumberInput",
    component: UNumberInput,
};

interface NumberInputProps {
    value: number;
}

const Template: Story<NumberInputProps> = (args) => ({
    components: { UNumberInput },
    setup: () => {
        return { args };
    },
    template: '<UNumberInput v-bind="args" />',
});

export const Default = Template.bind({});

Default.args = { value: 1138 };
