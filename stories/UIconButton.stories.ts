/* eslint-disable @typescript-eslint/no-explicit-any */
import { UIconButton } from "../index";

export default {
    title: "UIconButton",
    component: UIconButton,
};

const Template = (args: any) => ({
    components: { UIconButton },
    setup() {
        return { args };
    },
    template: `<UIconButton v-bind="args" />`,
});

export const Default: any = Template.bind({});
Default.args = { icon: "x" };

export const SizeSmall: any = Template.bind({});
SizeSmall.args = { icon: "x", size: "small" };

export const SizeMedium: any = Template.bind({});
SizeMedium.args = { icon: "x", size: "medium" };

export const SizeLarge: any = Template.bind({});
SizeLarge.args = { icon: "x", size: "large" };
