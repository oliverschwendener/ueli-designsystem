/* eslint-disable @typescript-eslint/no-explicit-any */
import { UIcon } from "../index";

export default {
    title: "UIcon",
    component: UIcon,
};

const Template = (args: any) => ({
    components: { UIcon },
    setup() {
        return { args };
    },
    template: `<UIcon v-bind="args" />`,
});

// Alarms
export const Alarm: any = Template.bind({});
Alarm.args = { icon: "alarm" };

export const AlarmFilled: any = Template.bind({});
AlarmFilled.args = { icon: "alarm-fill" };

// Arrows
export const ArrowLeft: any = Template.bind({});
ArrowLeft.args = { icon: "arrow-left" };

export const ArrowUp: any = Template.bind({});
ArrowUp.args = { icon: "arrow-up" };

export const ArrowRight: any = Template.bind({});
ArrowRight.args = { icon: "arrow-right" };

export const ArrowDown: any = Template.bind({});
ArrowDown.args = { icon: "arrow-down" };
