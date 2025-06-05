import type { Meta, StoryObj } from '@storybook/react';
  import { Contact } from './contact';
  
  const meta: Meta<typeof Contact> = {
    component: Contact,
    title: 'HybridComponents/Contact',
  };
  
  export default meta;
  type Story = StoryObj<typeof Contact>;
  
  export const Default: Story = {
    args: {},
  };
  