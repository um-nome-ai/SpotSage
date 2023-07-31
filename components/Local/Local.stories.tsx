import {Local as Component} from './Local';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'Local',
  component: Component,
};

export const Local: Story = {
  // ...
};

export default meta;
