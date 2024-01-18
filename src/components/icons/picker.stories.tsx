import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Picker from "./picker";

const meta: Meta<typeof Picker> = {
  component: Picker,
  title: "HeroIcons/Picker",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Picker>;

export const Default: Story = (args: any) => (
  <Picker data-testId="InputField-id" {...args} />
);
Default.args = {
  
};