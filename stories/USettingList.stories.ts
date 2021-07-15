/* eslint-disable @typescript-eslint/no-explicit-any */
import { USettingList, USetting, UNumberInput } from "../index";

export default {
    title: "USettingList",
    component: USettingList,
};

const Template = (args: any) => ({
    components: { USettingList, USetting, UNumberInput },
    setup() {
        return { args };
    },
    template: `<USettingList v-bind="args">
        <template v-slot:settings>
            <USetting>
                <template v-slot:label>Please enter a number:</template>
                <template v-slot:body><UNumberInput :value="1" /></template>
            </USetting>
        </template>
    </USettingList>`,
});

export const WithTitle: any = Template.bind({});
export const WithoutTitle: any = Template.bind({});

WithTitle.args = {
    title: "This is a title",
};

WithoutTitle.args = {};
