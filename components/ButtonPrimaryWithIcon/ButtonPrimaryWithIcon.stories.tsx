import {ButtonPrimaryWithIcon as Component} from './ButtonPrimaryWithIcon';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'Button/Primary with Icon',
  component: Component,
};

export const ButtonPrimaryWithIcon: Story = {
  // ...
};

export default meta;
