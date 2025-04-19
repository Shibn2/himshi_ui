import { getRandomNumber } from '../../utils';
import styles from './shapeShift.module.scss';
import { getSvgList } from './shapeShift.util';

const ShapeShift = ({ position = 0 }) => {
  const svgList = getSvgList();
  const randomIndex = getRandomNumber(0, svgList.length)
  const RandomSvg = svgList[randomIndex];

  return <div style={{ right: position }} className={styles.shapeshift}>
    <RandomSvg/>
  </div>;
};

export { ShapeShift };
export default ShapeShift;