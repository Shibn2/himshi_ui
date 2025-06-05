import styles from './flyingBird.module.scss';
import bird1 from '../../assets/icons/bird1.svg';
import bird2 from '../../assets/icons/bird2.svg';
import bird3 from '../../assets/icons/bird3.svg';
import bird4 from '../../assets/icons/bird4.svg';

import { useEffect, useState } from 'react';

const birds = [bird2, bird3, bird4];

export const FlyingBird = () => {
  const [index, setIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev+1)%birds.length);
    }, 200);

    return () => clearInterval(interval);
  }, [])

  return <div className={styles.flyingbird}>
    <img className={styles.bird} style={{ transition: 'all .5s linear'}} src={birds[index]}/>
  </div>
};