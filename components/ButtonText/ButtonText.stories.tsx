import {ButtonText as Component} from './ButtonText';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'Button/Text',
  component: Component,
};

export const ButtonText: Story = {
  // ...
};

export default meta;
