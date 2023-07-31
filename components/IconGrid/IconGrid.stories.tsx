import {IconGrid as Component} from './IconGrid';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'icon/grid',
  component: Component,
};

export const IconGrid: Story = {
  // ...
};

export default meta;
