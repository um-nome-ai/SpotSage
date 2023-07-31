import {TextField as Component} from './TextField';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'Text Field',
  component: Component,
};

export const TextField: Story = {
  // ...
};

export default meta;
