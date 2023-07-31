import {ItemCard as Component} from './ItemCard';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'Item_Card',
  component: Component,
};

export const ItemCard: Story = {
  // ...
};

export default meta;
