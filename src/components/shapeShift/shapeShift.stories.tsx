import type { Meta, StoryObj } from '@storybook/react';
  import { ShapeShift } from './shapeShift';
  
  const meta: Meta<typeof ShapeShift> = {
    component: ShapeShift,
    title: 'Components/ShapeShift',
  };
  
  export default meta;
  type Story = StoryObj<typeof ShapeShift>;
  
  export const Default: Story = {
    args: {
      position: 0
    },
  };
  