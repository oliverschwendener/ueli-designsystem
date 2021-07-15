/* eslint-disable @typescript-eslint/no-explicit-any */
import { USliderInput } from "../index";

export default {
    title: "USliderInput",
    component: USliderInput,
};

const Template = (args: any) => ({
    components: { USliderInput },
    setup: () => {
        return { args };
    },
    template: '<USliderInput v-bind="args" />',
});

export const Default: any = Template.bind({});

Default.args = {
    min: 0,
    max: 100,
    step: 1,
    value: 50,
    displayValue: true,
};
