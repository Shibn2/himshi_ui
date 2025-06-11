import styles from './homeProfile.module.scss';
import profile from '../../assets/images/profile1.png';

export const HomeProfile = () => {
  return <div className={styles.homeprofile}>
    <img className={styles.image} src={profile} alt="" />
  </div>;
};