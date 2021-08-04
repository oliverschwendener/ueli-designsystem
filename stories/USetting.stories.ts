import { Meta, Story } from "@storybook/vue3";
import { USetting, UNumberInput } from "../index";

export default <Meta>{
    title: "USetting",
    component: USetting,
};

const Template: Story = () => ({
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

export const WithNumberInput = Template.bind({});
