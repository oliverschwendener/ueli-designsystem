import { Meta, Story } from "@storybook/vue3";
import { USettingList, USetting, UNumberInput } from "../index";

export default <Meta<SettingListProps>>{
    title: "USettingList",
    component: USettingList,
};

interface SettingListProps {
    title?: string;
}

const Template: Story<SettingListProps> = (args) => ({
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

export const WithTitle = Template.bind({});
export const WithoutTitle = Template.bind({});

WithTitle.args = { title: "This is a title" };
WithoutTitle.args = {};
