/* eslint-disable @typescript-eslint/no-explicit-any */
import { IconButton } from "../index";

export default {
    title: "IconButton",
    component: IconButton,
};

const Template = (args: any) => ({
    components: { IconButton },
    setup() {
        return { args };
    },
    template: `<IconButton v-bind="args" />`,
});

export const Default: any = Template.bind({});
Default.args = { icon: "x" };

export const SizeSmall: any = Template.bind({});
SizeSmall.args = { icon: "x", size: "small" };

export const SizeMedium: any = Template.bind({});
SizeMedium.args = { icon: "x", size: "medium" };

export const SizeLarge: any = Template.bind({});
SizeLarge.args = { icon: "x", size: "large" };
