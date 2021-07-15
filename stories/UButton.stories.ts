/* eslint-disable @typescript-eslint/no-explicit-any */
import { UButton } from "../index";

export default {
    title: "UButton",
    component: UButton,
};

const Template = (args: any) => ({
    components: { UButton },
    setup() {
        return { args };
    },
    template: `<UButton v-bind="args" />`,
});

export const DefaultButton: any = Template.bind({});
DefaultButton.args = {
    label: "Click me!",
    type: "default",
    size: "medium",
};

export const SuccessButton: any = Template.bind({});
SuccessButton.args = {
    label: "Click me!",
    type: "success",
    size: "medium",
};

export const WarningButton: any = Template.bind({});
WarningButton.args = {
    label: "Click me!",
    type: "warning",
    size: "medium",
};

export const DangerButton: any = Template.bind({});
DangerButton.args = {
    label: "Click me!",
    type: "danger",
    size: "medium",
};

export const SmallButton: any = Template.bind({});
SmallButton.args = {
    label: "Click me!",
    type: "default",
    size: "small",
};
