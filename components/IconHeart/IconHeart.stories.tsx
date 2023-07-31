import {IconHeart as Component} from './IconHeart';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'icon/heart',
  component: Component,
};

export const IconHeart: Story = {
  // ...
};

export default meta;
