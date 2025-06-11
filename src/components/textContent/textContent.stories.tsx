import type { Meta, StoryObj } from '@storybook/react';
  import { TextContent } from './textContent';
  
  const meta: Meta<typeof TextContent> = {
    component: TextContent,
    title: 'Components/TextContent',
  };
  
  export default meta;
  type Story = StoryObj<typeof TextContent>;
  
  export const Default: Story = {
    args: {},
  };
  