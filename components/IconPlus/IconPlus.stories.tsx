import {IconPlus as Component} from './IconPlus';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'icon/plus',
  component: Component,
};

export const IconPlus: Story = {
  // ...
};

export default meta;
