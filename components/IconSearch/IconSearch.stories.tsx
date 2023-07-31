import {IconSearch as Component} from './IconSearch';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'icon/search',
  component: Component,
};

export const IconSearch: Story = {
  // ...
};

export default meta;
