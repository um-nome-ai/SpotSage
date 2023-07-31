import {TabBar as Component} from './TabBar';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'Tab Bar',
  component: Component,
};

export const TabBar: Story = {
  // ...
};

export default meta;
