import BarChart, { barChartItemType } from '../../components/barChart/barChart';
import styles from './experienceCard2.module.scss';
import { ShapeShift } from '../../components';
import { useEffect, useMemo, useRef, useState } from 'react';
import { getRandomNumber } from '../../utils';
import { useBreakpointPixel } from '../../hooks';
import { breakpoints } from '../../constants';

type ExperienceCard2Props = {
  image: string;
  children: React.ReactNode;
  imageOnLeft?: boolean;
  title: string;
  subTitle: string;
  barChartContentList: barChartItemType[],
  optionalBarChild?: React.ReactNode;
}

export const ExperienceCard2 : React.FC<ExperienceCard2Props> = ({ title, subTitle, image, children, optionalBarChild, barChartContentList,  }) => {
  
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);
  const breakPoint:number = useBreakpointPixel();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.1 });

    if(ref.current) observer.observe(ref.current);

    return () => {
      if(ref.current) observer.unobserve(ref.current);
    }
  }, []);

  const randomWidth =  getRandomNumber(5, 150)
  
  return <div className={styles.experiencecard2} ref={ref}>
    <div className={`${styles.experiencecard__image_frame}`}>
        <div style={inView ? {height: `${getRandomNumber(5, 150)}px`} : {}} className={styles.experiencecard__image_element1}></div>
        <div style={inView ? {height: `${getRandomNumber(5, 150)}px`} : {}} className={styles.experiencecard__image_element2}></div>
        <div style={inView ? {width: `${randomWidth}px`} : {}} className={styles.experiencecard__image_element3}></div>
        <img className={`experiencecard_image ${styles.experiencecard__image} ${inView ? styles.experiencecard__image_inview : ''}`} src={image} alt='side image'/>
    </div>
    <div className={`${styles.experiencecard__content}`}>
      <ShapeShift position={50} />
      <div style={inView && (breakPoint > breakpoints.md) ? {transform: `translateX(-${randomWidth}px`} : {}} className={`${styles.experimentcard__barchart} gap-sm`}>
        {optionalBarChild}
        <BarChart items= {barChartContentList} inView={inView}/>
      </div>
      <div className={`${styles.experiencecard__title_wrapper} padding-md`}>
        <h4 className={`${styles.experiencecard__title} heading-lg`}>
          {title} <span className={`${styles.subTitle} heading-md`}>{subTitle}</span>
        </h4>
      </div>
      <div className={`${styles.experiencecard__text} ${inView ? styles.experiencecard__text_inview : ''} body-text-md padding-md border-rd-sm`}>
        {children}
      </div>
    </div>
  </div>;
};