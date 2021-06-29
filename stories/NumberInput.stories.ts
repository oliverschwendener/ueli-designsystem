/* eslint-disable @typescript-eslint/no-explicit-any */
import { NumberInput } from "../index";

export default {
    title: "NumberInput",
    component: NumberInput,
};

const Template = (args: any) => ({
    components: { NumberInput },
    setup: () => {
        return { args };
    },
    template: '<NumberInput v-bind="args" />',
});

export const Default: any = Template.bind({});

Default.args = {
    value: 1138,
};
