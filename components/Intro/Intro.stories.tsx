import {Intro as Component} from './Intro';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'Intro',
  component: Component,
};

export const Intro: Story = {
  args: {
    text: 'Endereço',
  },
};

export default meta;
