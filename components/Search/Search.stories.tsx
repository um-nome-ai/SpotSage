import {Search as Component} from './Search';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'Search',
  component: Component,
};

export const Search: Story = {
  // ...
};

export default meta;
