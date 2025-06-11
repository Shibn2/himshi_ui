import { useScrollPercentage } from 'src/hooks';
import styles from './homeTitle.module.scss';

export const HomeTitle = () => {
  const scrollPercentage = useScrollPercentage();
  console.log('scrollPercentage', scrollPercentage)
  return <div className={styles.hometitle} style={{ opacity: `${(100 - (scrollPercentage * 2))}%`}}>
    <div className={styles.hometitle_wrapper}>
      <h2 className={`${styles.name} heading-lg`}>
          <span>Shibinlal</span><br/>
          <span>Purushothaman</span>
        </h2>
      <label className={`${styles.job } sub-heading-lg`}>Software Engineer</label>
    </div>
  </div>;
};