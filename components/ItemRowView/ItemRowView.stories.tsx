import {ItemRowView as Component} from './ItemRowView';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'Item_Row View',
  component: Component,
};

export const ItemRowView: Story = {
  // ...
};

export default meta;
