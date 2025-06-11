import type { Meta, StoryObj } from '@storybook/react';
  import { HomeFlower } from './homeFlower';
  
  const meta: Meta<typeof HomeFlower> = {
    component: HomeFlower,
    title: 'HybridComponents/HomeFlower',
  };
  
  export default meta;
  type Story = StoryObj<typeof HomeFlower>;
  
  export const Default: Story = {
    args: {},
  };
  