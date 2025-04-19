import React from 'react';
import styles from './navWheel.module.scss';

type navWheelPropType = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>, type: string)=> void
}

const BtnSvg = ({label}) => <svg viewBox="0 0 200 100" width="200" height="100">
<defs>
  <path id="curve" d="M10,90 Q100,10 190,90" />
</defs>
<text fill="white" font-size="16" font-family="sans-serif">
  <textPath href="#curve" startOffset="50%" text-anchor="middle">
    {label}
  </textPath>
</text>
</svg>
export const navWheel: React.FC<navWheelPropType> = ({ onClick }) => {
  return <div className={styles.navwheel}>
    <button onClick={(e) => onClick(e, 'Home')} className={`${styles.curved_button} ${styles.top_btn}`}>
        {<BtnSvg label={'Home'}/>}
    </button>
    <button onClick={(e) => onClick(e, 'Experience')} className={`${styles.curved_button} ${styles.right_btn}`}>
        {<BtnSvg label={'Experience'}/>}
    </button>
    <button onClick={(e) => onClick(e, 'Contact')} className={`${styles.curved_button} ${styles.bottom_btn}`}>
        {<BtnSvg label={'Contact'}/>}
    </button>
    <button className={`${styles.curved_button} ${styles.left_btn}`}>
        {<BtnSvg label={''}/>}
    </button>
    
  </div>;
};