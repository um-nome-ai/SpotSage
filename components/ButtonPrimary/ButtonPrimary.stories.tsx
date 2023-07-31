import {ButtonPrimary as Component} from './ButtonPrimary';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'Button/Primary',
  component: Component,
};

export const ButtonPrimary: Story = {
  // ...
};

export default meta;
