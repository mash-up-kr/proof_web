import {ComponentMeta, ComponentStory} from "@storybook/react";
import {BottomSheet} from "../components";

export default {
  component: BottomSheet
} as ComponentMeta<typeof BottomSheet>;

const Template: ComponentStory<typeof BottomSheet> = () => (
    <BottomSheet/>
);

export const Primary = Template.bind({});
