import {IconWalking as Component} from './IconWalking';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'icon/walking',
  component: Component,
};

export const IconWalking: Story = {
  // ...
};

export default meta;
