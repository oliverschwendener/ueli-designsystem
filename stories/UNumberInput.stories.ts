/* eslint-disable @typescript-eslint/no-explicit-any */
import { UNumberInput } from "../index";

export default {
    title: "UNumberInput",
    component: UNumberInput,
};

const Template = (args: any) => ({
    components: { UNumberInput },
    setup: () => {
        return { args };
    },
    template: '<UNumberInput v-bind="args" />',
});

export const Default: any = Template.bind({});

Default.args = {
    value: 1138,
};
