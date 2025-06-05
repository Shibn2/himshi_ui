import type { Meta, StoryObj } from '@storybook/react';
  import Carousel from './carousel';
  
//Testing data
const SLIDE_LIST = [
  {
    card:<h4>"Slide 1"</h4>
  },
  {
    card:<h4>"Slide 2"</h4>
  },
  {
    card:<h4>"Slide 3"</h4>
  },
  {
    card:<h4>"Slide 4"</h4>
  },
  {
    card:<h4>"Slide 5"</h4>
  },
  {
    card:<h4>"Slide 6"</h4>
  },
  {
    card:<h4>"Slide 7"</h4>
  },
]  
  const meta: Meta<typeof Carousel> = {
    component: Carousel,
    title: 'Components/Carousel',
  };
  
  export default meta;
  type Story = StoryObj<typeof Carousel>;
  
  export const Default: Story = {
    args: {
      slidesList: SLIDE_LIST,
    },
  };