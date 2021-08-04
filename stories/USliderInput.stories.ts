import { Meta, Story } from "@storybook/vue3";
import { USliderInput } from "../index";

export default <Meta<SliderInputProps>>{
    title: "USliderInput",
    component: USliderInput,
};

interface SliderInputProps {
    min: number;
    max: number;
    step: number;
    value: number;
    displayValue: boolean;
}

const Template: Story<SliderInputProps> = (args) => ({
    components: { USliderInput },
    setup: () => {
        return { args };
    },
    template: '<USliderInput v-bind="args" />',
});

export const Default = Template.bind({});

Default.args = {
    min: 0,
    max: 100,
    step: 1,
    value: 50,
    displayValue: true,
};
