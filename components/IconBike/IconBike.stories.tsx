import {IconBike as Component} from './IconBike';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'icon/bike',
  component: Component,
};

export const IconBike: Story = {
  // ...
};

export default meta;
