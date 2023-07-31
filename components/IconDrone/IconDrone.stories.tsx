import {IconDrone as Component} from './IconDrone';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'icon/Drone',
  component: Component,
};

export const IconDrone: Story = {
  // ...
};

export default meta;
