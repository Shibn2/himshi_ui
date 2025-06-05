
// import './barChart.scss';
import styles from './BarChart.module.scss';
import { getRandomGrayHex } from '../../utils';

export type barChartItemType = {
    label: string;
    percentage: number;
}

export type barChartPropType = {
    items: barChartItemType[],
    barHeight?: number,
    inView?: boolean,
}

const BarChart:React.FC<barChartPropType> = ({ items = [], barHeight = 60, inView}) =>{
    return <div  className={`${styles.barChart} body-text-xsm bar-chart`}>
        {items?.map((item) => (<div className={`${styles.itemBar} padding-sm bar-item`} style={{backgroundColor: getRandomGrayHex(), width: `${item?.percentage}%`}}>
            <span className={`${styles.text} ${ inView ? styles.textInview : ''}`}>{item?.label}</span>
        </div>))
        }
    </div> 
}

export default BarChart;