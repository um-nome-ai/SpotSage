import {IconUser as Component} from './IconUser';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'icon/user',
  component: Component,
};

export const IconUser: Story = {
  // ...
};

export default meta;
