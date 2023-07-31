import {IconX as Component} from './IconX';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'icon/x',
  component: Component,
};

export const IconX: Story = {
  // ...
};

export default meta;
