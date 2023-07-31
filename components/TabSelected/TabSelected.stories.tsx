import {TabSelected as Component} from './TabSelected';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'Tab Selected',
  component: Component,
};

export const TabSelected: Story = {
  // ...
};

export default meta;
