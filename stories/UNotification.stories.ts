/* eslint-disable @typescript-eslint/no-explicit-any */
import { UNotification } from "../index";

export default {
    title: "UNotification",
    component: UNotification,
};

const Template = (args: any) => ({
    components: { UNotification },
    setup() {
        return { args };
    },
    template: `<UNotification v-bind="args" />`,
});

export const Default: any = Template.bind({});
Default.args = {
    message: "This is a notification",
    type: "default",
    icon: "info",
};

export const Success: any = Template.bind({});
Success.args = {
    message: "This is a notification",
    type: "success",
    icon: "check",
};

export const Warning: any = Template.bind({});
Warning.args = {
    message: "This is a notification",
    type: "warning",
    icon: "exclamation-triangle-fill",
};

export const Danger: any = Template.bind({});
Danger.args = {
    message: "This is a notification",
    type: "danger",
    icon: "exclamation-triangle-fill",
};

export const WithoutIcon: any = Template.bind({});
WithoutIcon.args = {
    message: "This is a notification",
    type: "default",
};

export const NotClosable: any = Template.bind({});
NotClosable.args = {
    message: "This is a notification",
    type: "default",
    closable: false,
};
