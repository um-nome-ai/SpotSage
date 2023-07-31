import {IconCheck as Component} from './IconCheck';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'icon/check',
  component: Component,
};

export const IconCheck: Story = {
  // ...
};

export default meta;
