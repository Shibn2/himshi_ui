import type { Meta, StoryObj } from '@storybook/react';
  import { navWheel } from './navWheel';
  
  const meta: Meta<typeof navWheel> = {
    component: navWheel,
    title: 'HybridComponents/navWheel',
  };
  
  export default meta;
  type Story = StoryObj<typeof navWheel>;
  
  export const Default: Story = {
    args: {},
  };
  