import {LocalAndar as Component} from './LocalAndar';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'Local Andar',
  component: Component,
};

export const LocalAndar: Story = {
  // ...
};

export default meta;
