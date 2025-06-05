import styles from './homeProfile.module.scss';
import profile from '../../assets/images/Portfolio2.0-1400+ (2).svg';

export const HomeProfile = () => {
  return <div className={styles.homeprofile}>
    <img src={profile} alt="" />
  </div>;
};