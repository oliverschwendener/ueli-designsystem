/* eslint-disable @typescript-eslint/no-explicit-any */
import { Setting, NumberInput } from "../index";

export default {
    title: "Setting",
    component: Setting,
};

const Template = () => ({
    components: { Setting, NumberInput },
    template: `<Setting>
        <template v-slot:label>
            Please enter a number:
        </template>
        <template v-slot:body>
            <NumberInput :value="100" />
        </template>
    </Setting>`,
});

export const WithNumberInput: any = Template.bind({});
