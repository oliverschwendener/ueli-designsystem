/* eslint-disable @typescript-eslint/no-explicit-any */
import { USetting, UNumberInput } from "../index";

export default {
    title: "USetting",
    component: USetting,
};

const Template = () => ({
    components: { USetting, UNumberInput },
    template: `<USetting>
        <template v-slot:label>
            Please enter a number:
        </template>
        <template v-slot:body>
            <UNumberInput :value="100" />
        </template>
    </USetting>`,
});

export const WithNumberInput: any = Template.bind({});
