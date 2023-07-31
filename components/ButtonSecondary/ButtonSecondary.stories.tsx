import {ButtonSecondary as Component} from './ButtonSecondary';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'Button/Secondary',
  component: Component,
};

export const ButtonSecondary: Story = {
  // ...
};

export default meta;
