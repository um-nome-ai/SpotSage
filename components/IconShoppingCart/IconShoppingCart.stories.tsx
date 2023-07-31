import {IconShoppingCart as Component} from './IconShoppingCart';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'icon/shopping-cart',
  component: Component,
};

export const IconShoppingCart: Story = {
  // ...
};

export default meta;
