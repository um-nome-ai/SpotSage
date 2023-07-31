import {Tab as Component} from './Tab';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'Tab',
  component: Component,
};

export const Tab: Story = {
  // ...
};

export default meta;
