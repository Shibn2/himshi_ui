import styles from './homeProfile.module.scss';
import profile from '../../assets/images/profile1.png';
import { useScrollPercentage } from 'src/hooks';

type homeProfilePropType = {
  scrollPercentage?: number
}
export const HomeProfile: React.FC<homeProfilePropType> = () => {
  const scrollPercentage = useScrollPercentage();

  return <div className={styles.homeprofile}>
    <img style={{ transform: `translateY(${scrollPercentage}%)`}} className={styles.image} src={profile} alt="" />
  </div>;
};