import {Estacionado as Component} from './Estacionado';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'Estacionado',
  component: Component,
};

export const Estacionado: Story = {
  // ...
};

export default meta;
