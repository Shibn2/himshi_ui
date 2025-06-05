import styles from './experienceCard.module.scss';
import ShapeShift from '../../components/shapeShift';
import BarChart from '../../components/barChart';
import { barChartItemType } from '../../components/barChart/barChart';
import { useEffect } from 'react';
import { observeScaleInOnView } from '../../utils';


type ExperienceCardProps = {
  image: string;
  children: React.ReactNode;
  imageOnLeft?: boolean;
  title: string;
  barChartContentList: barChartItemType[],
  optionalBarChild: React.ReactNode;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ title, image, children, imageOnLeft, barChartContentList, optionalBarChild}) => {
  useEffect(() => {
    observeScaleInOnView('.experiencecard_image')
  }, [])
  return <div className={`${styles.experiencecard} ${imageOnLeft ? styles.reverse : ''}`}>
        
    <div className={`${styles.experiencecard__image_frame}`}>
      <img className={`experiencecard_image ${styles.experiencecard__image}`} src={image} alt='side image'/>
    </div>
    <div className={`${styles.experiencecard__desc} gap-m`}>
      <div className={`${styles.experimentcard__barchart} gap-sm`}>
        {optionalBarChild}
        <BarChart items= {barChartContentList}/>
      </div>
      <ShapeShift/>
      <h4 className={`${styles.experiencecard__title} heading-lg`}>
        {title}
        </h4>
      <div className={`${styles.experiencecard__text} body-text-sm`}>
        {children}
      </div>
    </div>
    
  </div>;
};

export default ExperienceCard;