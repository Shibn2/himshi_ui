import type { Meta, StoryObj } from '@storybook/react';
  import { Threedcube } from './Threedcube';
  
  const meta: Meta<typeof Threedcube> = {
    component: Threedcube,
    title: 'HybridComponents/Threedcube',
  };
  
  export default meta;
  type Story = StoryObj<typeof Threedcube>;
  
  export const Default: Story = {
    args: {},
  };
  