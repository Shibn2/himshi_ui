import type { Meta, StoryObj } from '@storybook/react';
  import { HomeTitle } from './homeTitle';
  
  const meta: Meta<typeof HomeTitle> = {
    component: HomeTitle,
    title: 'HybridComponents/HomeTitle',
  };
  
  export default meta;
  type Story = StoryObj<typeof HomeTitle>;
  
  export const Default: Story = {
    args: {},
  };
  