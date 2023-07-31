import {IconCamera as Component} from './IconCamera';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'icon/camera',
  component: Component,
};

export const IconCamera: Story = {
  // ...
};

export default meta;
