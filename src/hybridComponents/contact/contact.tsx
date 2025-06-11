import ThreeDHexagon from '../threeDHexagon';
import styles from './contact.module.scss';

export const Contact = () => {
  return <div className={styles.contact}>
    <ThreeDHexagon/>
    <div className={`${styles.contact_list} body-text-sm`}>
      <div><a href="https://www.linkedin.com/in/shibinlalpurushothamaninthad/">LinkedIn</a></div>
      <div><a href="https://github.com/Shibn2?tab=repositories">Github</a></div>
      <div><a href="mailto:shibnstdy@gmail.com">GMail</a></div>
    </div>
  </div>;
};