import {Recentes as Component} from './Recentes';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'Recentes',
  component: Component,
};

export const Recentes: Story = {
  // ...
};

export default meta;
