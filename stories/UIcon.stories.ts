import { Meta, Story } from "@storybook/vue3";
import { UIcon } from "../index";

export default <Meta<IconProps>>{
    title: "UIcon",
    component: UIcon,
};

interface IconProps {
    icon: string;
}

const Template: Story<IconProps> = (args) => ({
    components: { UIcon },
    setup() {
        return { args };
    },
    template: `<UIcon v-bind="args" />`,
});

// Alarms
export const Alarm = Template.bind({});
Alarm.args = { icon: "alarm" };

export const AlarmFilled = Template.bind({});
AlarmFilled.args = { icon: "alarm-fill" };

// Arrows
export const ArrowLeft = Template.bind({});
ArrowLeft.args = { icon: "arrow-left" };

export const ArrowUp = Template.bind({});
ArrowUp.args = { icon: "arrow-up" };

export const ArrowRight = Template.bind({});
ArrowRight.args = { icon: "arrow-right" };

export const ArrowDown = Template.bind({});
ArrowDown.args = { icon: "arrow-down" };
