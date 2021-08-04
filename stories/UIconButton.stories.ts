import { Meta, Story } from "@storybook/vue3";
import { UIconButton } from "../index";

export default <Meta<ButtonProps>>{
    title: "UIconButton",
    component: UIconButton,
};

interface ButtonProps {
    icon: string;
    size: string;
}

const Template: Story<ButtonProps> = (args) => ({
    components: { UIconButton },
    setup() {
        return { args };
    },
    template: `<UIconButton v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = { icon: "x" };

export const SizeSmall = Template.bind({});
SizeSmall.args = { icon: "x", size: "small" };

export const SizeMedium = Template.bind({});
SizeMedium.args = { icon: "x", size: "medium" };

export const SizeLarge = Template.bind({});
SizeLarge.args = { icon: "x", size: "large" };
