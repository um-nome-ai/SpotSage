import {LocalCard as Component} from './LocalCard';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'LocalCard',
  component: Component,
};

export const LocalCard: Story = {
  // ...
};

export default meta;
