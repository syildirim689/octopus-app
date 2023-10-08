import styles from './orders-overview.module.css';
import {OrdersOverviewData} from "../../../json/orders-overview-data";
import {OrdersOverviewDataProps} from "../../../types";
import {map} from "rambda";

export default function OrdersOverview() {
    return (
        <div className={styles.container}>
            <h3>Orders Overview</h3>
            <div className={styles.subText}>
                <span>+30%</span> this month
            </div>
            <div className={styles.timeline}>
                {map((item: OrdersOverviewDataProps) => (
                    <div className={styles.timelineItem} key={item.id}>
                        <div className={styles.iconContainer}>
                            <img src={item.icon} alt={item.title}/>
                        </div>
                        <div className={styles.iconLine}/>
                        <div className={styles.textContainer}>
                            <h4>{item.title}</h4>
                            <span>{item.date}</span>
                        </div>
                    </div>
                ), OrdersOverviewData)}
            </div>
        </div>
    );
};
