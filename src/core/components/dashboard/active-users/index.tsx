import {map} from "rambda";
import styles from "./active-users.module.css";
import {ActiveUsersDataProps} from "../../../types";
import {ActiveUsersData} from "../../../json/active-users-data";

export default function ActiveUsers() {
    return (
        <div className={styles.container}>
            <div className={styles.graph}>
                <div className={styles.numbers}>
                    <span>500</span>
                    <span>400</span>
                    <span>300</span>
                    <span>200</span>
                    <span>100</span>
                    <span>0</span>
                </div>
                <div className={styles.lines}>
                    <div style={{height: Math.floor(Math.random() * 100)}} className={styles.line}/>
                    <div style={{height: Math.floor(Math.random() * 100)}} className={styles.line}/>
                    <div style={{height: Math.floor(Math.random() * 100)}} className={styles.line}/>
                    <div style={{height: Math.floor(Math.random() * 100)}} className={styles.line}/>
                    <div style={{height: Math.floor(Math.random() * 100)}} className={styles.line}/>
                    <div style={{height: Math.floor(Math.random() * 100)}} className={styles.line}/>
                    <div style={{height: Math.floor(Math.random() * 100)}} className={styles.line}/>
                    <div style={{height: Math.floor(Math.random() * 100)}} className={styles.line}/>
                    <div style={{height: Math.floor(Math.random() * 100)}} className={styles.line}/>
                </div>
            </div>
            <h3 className={styles.title}>Active Users</h3>
            <div className={styles.text}>
                <span>(+23)</span> than last week
            </div>
            <div className={styles.cards}>
                {map((item: ActiveUsersDataProps) => (
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <div className={styles.iconContainer}>
                                <img src={item.icon} alt={item.title}/>
                            </div>
                            <span>
                                {item.title}
                            </span>
                        </div>
                        <div className={styles.cardBody}>
                            {item.value}
                        </div>
                        <div className={styles.cardFooter}>
                            <div className={styles.progress}>
                                <div className={styles.progressLine}
                                     style={{width: Math.floor(Math.random() * 100) + '%'}}/>
                            </div>
                        </div>
                    </div>
                ), ActiveUsersData)}
            </div>
        </div>
    );
};
