import styles from './homeFlower.module.scss';
import plants from '../../assets/icons/Portfolio2.0-1400+.svg';

export const HomeFlower = () => {
  return <div className={styles.flowerWrapper}>
      <img className={styles.flower} src={plants} alt="" />
  </div>;
};