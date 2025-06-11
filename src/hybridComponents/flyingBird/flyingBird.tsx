import styles from './flyingBird.module.scss';
import bird1 from '../../assets/icons/bird1.svg';
import bird2 from '../../assets/icons/bird2.svg';
import bird3 from '../../assets/icons/bird3.svg';
import bird4 from '../../assets/icons/bird4.svg';

import { useEffect, useRef, useState } from 'react';

const birds = [bird2, bird3, bird4];

export const FlyingBird = () => {
  const [index, setIndex] = useState(0);
  const [windDelay, setWingDelay] = useState(200);
  const delayRef = useRef(200);
  // const animDelay = useRef(10);
  
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('windDelay', windDelay, 'delayRef', delayRef.current)
      setIndex(prev => (prev+1)%birds.length);
    }, delayRef.current);

    return () => clearInterval(interval);
  }, [])

  const handleOnClick = () => {
    console.log('hit')
    delayRef.current = 10;
    // animDelay.current = 2;
    setWingDelay(delayRef.current);
    setTimeout(() => {
      delayRef.current = 200;
      // animDelay.current = 10;
      console.log('delayRef.current', delayRef.current);
      setWingDelay(delayRef.current);
    }, 2000)
  }

  return <button onClick={handleOnClick} className={styles.flyingbird}>
    <img className={styles.bird} style={{ transition: 'all .5s linear'}} src={birds[index]}/>
  </button>
};