import {IconMinus as Component} from './IconMinus';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'icon/minus',
  component: Component,
};

export const IconMinus: Story = {
  // ...
};

export default meta;
