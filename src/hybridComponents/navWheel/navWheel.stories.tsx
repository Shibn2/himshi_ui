import type { Meta, StoryObj } from '@storybook/react';
  import NavWheel from './navWheel';
  
  const meta: Meta<typeof NavWheel> = {
    component: NavWheel,
    title: 'HybridComponents/navWheel',
  };
  
  export default meta;
  type Story = StoryObj<typeof NavWheel>;
  
  export const Default: Story = {
    args: {},
  };
  