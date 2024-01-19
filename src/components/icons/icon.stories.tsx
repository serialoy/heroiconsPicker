import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Icon from "./icon";

const meta: Meta<typeof Icon> = {
  component: Icon,
  title: "HeroIcons/Icon",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Icon>;

export const Outline: Story = (args: any) => (
  <Icon data-testId="InputField-id" {...args} />
);
Outline.args = {
  icon: {
    name: 'AcademicCapIcon',
    type: 'outline',
    size: '24',
  },
  fallback: (<div>Loading...</div>),
};

export const Solid: Story = (args: any) => (
  <Icon data-testId="InputField-id" {...args} />
);
Solid.args = {
  icon: {
    name: 'AcademicCapIcon',
    type: 'solid',
    size: '24',
  },
  fallback: (<div>Loading...</div>),
};
