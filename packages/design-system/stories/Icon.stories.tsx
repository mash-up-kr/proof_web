import * as React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {Icon} from "../components/Icon";

export default {
    component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => (
    <Icon {...args}/>
)

export const Test = Template.bind({});
Test.args = {
    name: "directionRight"
}
