import type { Meta, StoryObj } from '@storybook/react';
  import { FlyingBird } from './flyingBird';
  
  const meta: Meta<typeof FlyingBird> = {
    component: FlyingBird,
    title: 'HybridComponents/FlyingBird',
  };
  
  export default meta;
  type Story = StoryObj<typeof FlyingBird>;
  
  export const Default: Story = {
    args: {},
  };
  