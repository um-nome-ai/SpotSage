import {Procurar as Component} from './Procurar';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'Procurar',
  component: Component,
};

export const Procurar: Story = {
  // ...
};

export default meta;
