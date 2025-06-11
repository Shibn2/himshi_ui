import styles from './homeFlower.module.scss';
import plants from '../../assets/icons/Portfolio2.0-1400+.svg';
import { useScrollPercentage } from 'src/hooks';

export const HomeFlower = () => {
     const scrollPercentage = useScrollPercentage();
  
  return <div style={{ transform: `translateX(-${scrollPercentage * 2}%)`}} className={styles.flowerWrapper}>
      <img className={styles.flower} src={plants} alt="" />
  </div>;
};