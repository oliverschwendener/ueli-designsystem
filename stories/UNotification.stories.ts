import { Meta, Story } from "@storybook/vue3";
import { UNotification } from "../index";

export default <Meta<NotificationProps>>{
    title: "UNotification",
    component: UNotification,
};

interface NotificationProps {
    message: string;
    type: string;
    icon: string;
    closable?: boolean;
}

const Template: Story<NotificationProps> = (args) => ({
    components: { UNotification },
    setup() {
        return { args };
    },
    template: `<UNotification v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
    message: "This is a notification",
    type: "default",
    icon: "info",
};

export const Success = Template.bind({});
Success.args = {
    message: "This is a notification",
    type: "success",
    icon: "check",
};

export const Warning = Template.bind({});
Warning.args = {
    message: "This is a notification",
    type: "warning",
    icon: "exclamation-triangle-fill",
};

export const Danger = Template.bind({});
Danger.args = {
    message: "This is a notification",
    type: "danger",
    icon: "exclamation-triangle-fill",
};

export const WithoutIcon = Template.bind({});
WithoutIcon.args = {
    message: "This is a notification",
    type: "default",
};

export const NotClosable = Template.bind({});
NotClosable.args = {
    message: "This is a notification",
    type: "default",
    closable: false,
};
