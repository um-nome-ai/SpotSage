import {NavigationBar as Component} from './NavigationBar';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'Navigation Bar',
  component: Component,
};

export const NavigationBar: Story = {
  // ...
};

export default meta;
