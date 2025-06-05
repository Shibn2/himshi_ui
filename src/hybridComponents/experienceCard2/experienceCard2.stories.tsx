import type { Meta, StoryObj } from '@storybook/react';
  import { ExperienceCard2 } from './experienceCard2';
import { BAR_CHART_ITEMS, BAR_CHART_ITEMS_OPTIONAL } from '../../storybook/constants';
import agoda from '../../assets/images/agoda.webp'
import { BarChart } from '../../components';  
  const meta: Meta<typeof ExperienceCard2> = {
    component: ExperienceCard2,
    title: 'HybridComponents/experienceCard2',
  };
  
  export default meta;
  type Story = StoryObj<typeof ExperienceCard2>;
  
  const TextContent = () => {
    return <><p>At Agoda B2B, the RTA Marketing team is responsible for delivering tailored marketing emails to partner customers, supporting services like property and flight search. A major focus was on enhancing the efficiency of the template generation process by eliminating redundant tasks and streamlining workflows—this led to a 50% reduction in generation time and significantly improved developer productivity.</p>
    <p>Collaborating closely with backend teams, I contributed to several features using the Backend-for-Frontend (BFF) pattern, ensuring cohesive changes across both frontend and backend systems. I implemented automated email campaigns for key user scenarios such as abandoned carts, abandoned searches, booking confirmations, and promotional engagement, improving user retention and partner engagement.</p>
    <p>To support these campaigns, I wrote complex queries to extract data from Hadoop tables and utilized internal tools like Cusco Llama and Campaign Manager (Kafka-based template engine) to create and deliver customized emails. I also worked with PME (Partner Mail Engine) and Iterable for marketing automation, and developed responsive email templates using the FreeMarker templating language.</p>
    <p>Technologies: React.js, TypeScript, Kotlin, Scala, SQL.</p>
    </>
}

  export const Default: Story = {
    args: {
      image: agoda,
      children: <TextContent/>,
      imageOnLeft: false,
      title: "Academy",
      subTitle: "Publicis Sapient",
      barChartContentList: BAR_CHART_ITEMS,
      optionalBarChild: <BarChart items={BAR_CHART_ITEMS_OPTIONAL} barHeight={30} inView/>
    },
  };

