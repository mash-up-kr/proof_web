import * as React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {Icon} from "../components";

export default {
    component: Icon,
} as ComponentMeta<typeof Icon>;

export const Default: ComponentStory<typeof Icon> = (args) => (
    <Icon {...args}/>
)

Default.args = {
    name: "directionRight"
}
