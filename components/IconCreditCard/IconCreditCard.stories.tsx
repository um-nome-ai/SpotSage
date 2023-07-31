import {IconCreditCard as Component} from './IconCreditCard';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'icon/credit-card',
  component: Component,
};

export const IconCreditCard: Story = {
  // ...
};

export default meta;
