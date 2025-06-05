import type { Meta, StoryObj } from '@storybook/react';
  import { HomeProfile } from './homeProfile';
  
  const meta: Meta<typeof HomeProfile> = {
    component: HomeProfile,
    title: 'HybridComponents/HomeProfile',
  };
  
  export default meta;
  type Story = StoryObj<typeof HomeProfile>;
  
  export const Default: Story = {
    args: {},
  };
  