import React from 'react';
import styles from './navWheel.module.scss';
import home from '../../assets/icons/home.svg';
import expereince from '../../assets/icons/experience.svg';
import contact from '../../assets/icons/contact.svg';

type navWheelPropType = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>, type: string)=> void
}

const NavWheel: React.FC<navWheelPropType> = ({ onClick }) => {
  return <div className={styles.navwheel}>
    <button onClick={(e) => onClick(e, 'Home')} className={`flex ${styles.icon_btn} ${styles.top_btn}`}>
        <img width={'20px'} height={'20px'} src={home}/>
    </button>
    <button onClick={(e) => onClick(e, 'Experience')} className={`flex ${styles.icon_btn} ${styles.right_btn}`}>
    <img width={'20px'} height={'20px'} src={expereince}/>
    </button>
    <button onClick={(e) => onClick(e, 'Contact')} className={`flex ${styles.icon_btn} ${styles.bottom_btn}`}>
    <img width={'20px'} height={'20px'} src={contact}/>
    </button>
    {/* <button className={`${styles.curved_button} ${styles.left_btn}`}>
        {<BtnSvg label={''}/>}
    </button> */}
    
  </div>;
};

export default NavWheel;