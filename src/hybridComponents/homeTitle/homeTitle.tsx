import styles from './homeTitle.module.scss';

export const HomeTitle = () => {
  return <div className={styles.hometitle}>
    <div className={styles.hometitle_wrapper}>
      <h2 className={`${styles.name} heading-lg`}>
          <span>Shibinlal</span><br/>
          <span>Purushothaman</span>
        </h2>
      <label className={`${styles.job } sub-heading-lg`}>Software Engineer</label>
    </div>
  </div>;
};