/* eslint-disable @typescript-eslint/no-explicit-any */
import { Icon } from "../index";

export default {
    title: "Icon",
    component: Icon,
};

const Template = (args: any) => ({
    components: { Icon },
    setup() {
        return { args };
    },
    template: `<Icon v-bind="args" />`,
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
