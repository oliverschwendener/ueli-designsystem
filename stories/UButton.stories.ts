import { Meta, Story } from "@storybook/vue3";
import { UButton } from "../index";

export default <Meta<ButtonProps>>{
    title: "UButton",
    component: UButton,
};

interface ButtonProps {
    label: string;
    type: string;
    size: string;
}

const Template: Story<ButtonProps> = (args: ButtonProps) => ({
    components: { UButton },
    setup() {
        return { args };
    },
    template: `<UButton v-bind="args" />`,
});

export const DefaultButton = Template.bind({});
DefaultButton.args = {
    label: "Click me!",
    type: "default",
    size: "medium",
};

export const SuccessButton = Template.bind({});
SuccessButton.args = {
    label: "Click me!",
    type: "success",
    size: "medium",
};

export const WarningButton = Template.bind({});
WarningButton.args = {
    label: "Click me!",
    type: "warning",
    size: "medium",
};

export const DangerButton = Template.bind({});
DangerButton.args = {
    label: "Click me!",
    type: "danger",
    size: "medium",
};

export const SmallButton = Template.bind({});
SmallButton.args = {
    label: "Click me!",
    type: "default",
    size: "small",
};
