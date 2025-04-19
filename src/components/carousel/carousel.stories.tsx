import type { Meta, StoryObj } from '@storybook/react';
  import { carousel } from './carousel';
  
//Testing data
const SLIDE_LIST = [
  {
    text: "Slide 1"
  },
  {
    text: "Slide 2"
  },
  {
    text: "Slide 3"
  },
  {
    text: "Slide 4"
  },
  {
    text: "Slide 5"
  },
  {
    text: "Slide 6"
  },
  {
    text: "Slide 7"
  }
]  
  const meta: Meta<typeof carousel> = {
    component: carousel,
    title: 'Components/carousel',
  };
  
  export default meta;
  type Story = StoryObj<typeof carousel>;
  
  export const Default: Story = {
    args: {
      slidesList: SLIDE_LIST,
    },
  };
  