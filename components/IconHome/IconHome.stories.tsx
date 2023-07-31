import {IconHome as Component} from './IconHome';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'icon/home',
  component: Component,
};

export const IconHome: Story = {
  // ...
};

export default meta;
