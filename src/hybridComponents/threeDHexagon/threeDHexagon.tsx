import styles from './threeDHexagon.module.scss';

const ThreeDHexagon = () => {
  return (
    <div className={styles.hexagonWrapper}>
      <div className={styles.hexagon}>
        {/* <div className={`${styles.face} ${styles.front}`}></div> */}
        {/* <div className={`${styles.face} ${styles.back}`}></div> */}

        <div className={`${styles.side} ${styles.side1}`}></div>
        <div className={`${styles.side} ${styles.side2}`}></div>
        <div className={`${styles.side} ${styles.side3}`}></div>
        <div className={`${styles.side} ${styles.side4}`}></div>
        <div className={`${styles.side} ${styles.side5}`}></div>
        <div className={`${styles.side} ${styles.side6}`}></div>
      </div>
    </div>
  );
};

export default ThreeDHexagon;
