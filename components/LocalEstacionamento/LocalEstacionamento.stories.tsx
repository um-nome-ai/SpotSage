import {LocalEstacionamento as Component} from './LocalEstacionamento';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'Local Estacionamento',
  component: Component,
};

export const LocalEstacionamento: Story = {
  // ...
};

export default meta;
