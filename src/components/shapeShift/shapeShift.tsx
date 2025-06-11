import { getRandomNumber } from '../../utils';
import styles from './shapeShift.module.scss';
import { getSvgList } from './shapeShift.util';



const ShapeShift = ({ position = 0 }) => {
const svgList = getSvgList();
const randomIndex = getRandomNumber(0, svgList.length-1);
const SvgShape = svgList[randomIndex];
if (!SvgShape) {
  console.error("❌ Invalid SVG component at index", randomIndex);
  return null;
}
  return <div style={{ right: `${position}px` }} className={styles.shapeshift}>
    <SvgShape/>
  </div>;
};

export { ShapeShift };
export default ShapeShift;