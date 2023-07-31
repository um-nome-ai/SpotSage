import {IconChevronLeft as Component} from './IconChevronLeft';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'icon/chevron-left',
  component: Component,
};

export const IconChevronLeft: Story = {
  // ...
};

export default meta;
