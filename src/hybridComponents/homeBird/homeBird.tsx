import styles from './homeBird.module.scss';
import plants from '../../assets/icons/Portfolio2.0-1400+.svg';
import FlyingBird from '../flyingBird';
import { useEffect, useRef, useState } from 'react';
import { useBreakpointPixel } from '../../hooks';

export const HomeBird = () => {
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

  return <div className={styles.homebird}>
      <img className={styles.flower} src={plants} alt="" />
      <div className={styles.bird}>
        <FlyingBird/>
      </div>
  </div>;
};