/* eslint-disable @typescript-eslint/no-explicit-any */
import { SliderInput } from "../index";

export default {
    title: "SliderInput",
    component: SliderInput,
};

const Template = (args: any) => ({
    components: { SliderInput },
    setup: () => {
        return { args };
    },
    template: '<SliderInput v-bind="args" />',
});

export const Default: any = Template.bind({});

Default.args = {
    min: 0,
    max: 100,
    step: 1,
    value: 50,
    displayValue: true,
};
