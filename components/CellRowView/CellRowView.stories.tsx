import {CellRowView as Component} from './CellRowView';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'Cell_Row view',
  component: Component,
};

export const CellRowView: Story = {
  // ...
};

export default meta;
