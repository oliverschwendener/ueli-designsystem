/* eslint-disable @typescript-eslint/no-explicit-any */
import { SettingList, Setting, NumberInput } from "../index";

export default {
    title: "SettingList",
    component: SettingList,
};

const Template = (args: any) => ({
    components: { SettingList, Setting, NumberInput },
    setup() {
        return { args };
    },
    template: `<SettingList v-bind="args">
        <template v-slot:settings>
            <Setting>
                <template v-slot:label>Please enter a number:</template>
                <template v-slot:body><NumberInput :value="1" /></template>
            </Setting>
        </template>
    </SettingList>`,
});

export const WithTitle: any = Template.bind({});
export const WithoutTitle: any = Template.bind({});

WithTitle.args = {
    title: "This is a title",
};

WithoutTitle.args = {};
