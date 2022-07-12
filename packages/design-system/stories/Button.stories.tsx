import * as React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {Button, ButtonHierarchy} from "../components/Button";

export default {
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
    <Button {...args}>{args.children}</Button>
)

export const Primary = Template.bind({});
Primary.args = {
    children: "Primary",
    hierarchy: ButtonHierarchy.Primary,
    disabled: false,
    fullWidth: false
}

export const Secondary = Template.bind({});
Secondary.args = {
    children: "Secondary",
    hierarchy: ButtonHierarchy.Secondary,
    disabled: false,
    fullWidth: false
}
