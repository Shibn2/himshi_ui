import ThreeDHexagon from '../threeDHexagon';
import styles from './contact.module.scss';

export const Contact = () => {
  return <div className={styles.contact}>
    <ThreeDHexagon/>
    <div className={`${styles.contact_list} body-text-sm`}>
      <div><a href="/">LinkedIn</a></div>
      <div><a href="/">Github</a></div>
      <div><a href="/">GMail</a></div>
    </div>
  </div>;
};