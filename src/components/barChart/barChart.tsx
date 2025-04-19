
import './barChart.scss';
import styles from './BarChart.module.scss';

export type barChartItemType = {
    label: string;
    percentage: number;
}

export type barChartPropType = {
    items: barChartItemType[],
    barHeight?: number,
}

const BarChart:React.FC<barChartPropType> = ({ items = [], barHeight = 60}) =>{
    return <div className={`${styles.barChart} body-text-xsm bar-chart`}>
    {items?.map((item) => (<div className={`${styles.itemBar} padding-sm bar-item`} style={{width: `${item?.percentage}%`}}>
            <label className='padding-sm'>{item?.label}</label>
        </div>))
        }
    </div> 
}

export default BarChart;