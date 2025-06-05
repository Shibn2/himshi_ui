import type { Meta, StoryObj } from '@storybook/react';
  import { HomeBird } from './homeBird';
  
  const meta: Meta<typeof HomeBird> = {
    component: HomeBird,
    title: 'HybridComponents/HomeBird',
  };
  
  export default meta;
  type Story = StoryObj<typeof HomeBird>;
  
  export const Default: Story = {
    args: {},
  };
  