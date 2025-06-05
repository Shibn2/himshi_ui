import type { Meta, StoryObj } from '@storybook/react';
  import threeDHexagon from './threeDHexagon';
  
  const meta: Meta<typeof threeDHexagon> = {
    component: threeDHexagon,
    title: 'HybridComponents/threeDHexagon',
  };
  
  export default meta;
  type Story = StoryObj<typeof threeDHexagon>;
  
  export const Default: Story = {
    args: {},
  };
  