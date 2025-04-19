import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ExperienceCard } from './experienceCard';
import acc from '../../assets/images/accenture.webp';
import { BAR_CHART_ITEMS, BAR_CHART_ITEMS_OPTIONAL } from '../../storybook/constants';
import BarChart from '../../components/barChart';

const meta: Meta<typeof ExperienceCard> = {
    component: ExperienceCard,
    title: 'HybridComponents/experienceCard',
  };
  
  export default meta;
  type Story = StoryObj<typeof ExperienceCard>;
  
  const TextContent = () => {
    return <><p>Nice! That's a classic layout pattern, and there are clean, flexible ways to do it in React + SCSS (or styled-components, Tailwind, whatever your flavor is). Let’s go with a straightforward React component + SCSS approach.</p>
    <p>Nice! That's a classic layout pattern, and there are clean, flexible ways to do it in React + SCSS (or styled-components, Tailwind, whatever your flavor is). Let’s go with a straightforward React component + SCSS approach.</p></>
  }

  export const Default: Story = {
    args: {
      image: acc,
      children: <TextContent/>,
      imageOnLeft: false,
      title: "Publicis sapient",
      barChartContentList: BAR_CHART_ITEMS,
      optionalBarChild: <BarChart items={BAR_CHART_ITEMS_OPTIONAL} barHeight={30}/>
    },
  };
  