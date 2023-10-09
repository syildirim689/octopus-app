import styles from "./sales-overview.module.css";

export default function SalesOverview() {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Sales overview</h3>
            <div className={styles.text}>
                <span>(+5) more</span> in 2021
            </div>
            <div className={styles.chart}>
                <div className={styles.values}>
                    <div className={styles.numbers}>
                        <span>500</span>
                        <span>400</span>
                        <span>300</span>
                        <span>200</span>
                        <span>100</span>
                        <span>0</span>
                    </div>
                    <div className={styles.bars}>
                        <div className={styles.bar} style={{height: "100%"}}></div>
                        <div className={styles.bar} style={{height: "90%"}}></div>
                        <div className={styles.bar} style={{height: "80%"}}></div>
                        <div className={styles.bar} style={{height: "70%"}}></div>
                        <div className={styles.bar} style={{height: "60%"}}></div>
                        <div className={styles.bar} style={{height: "50%"}}></div>
                        <div className={styles.bar} style={{height: "40%"}}></div>
                        <div className={styles.bar} style={{height: "30%"}}></div>
                        <div className={styles.bar} style={{height: "20%"}}></div>
                        <div className={styles.bar} style={{height: "10%"}}></div>
                        <div className={styles.bar} style={{height: "35%"}}></div>
                        <div className={styles.bar} style={{height: "45%"}}></div>
                    </div>
                </div>
                <div className={styles.labels}>
                    <span>Jan</span>
                    <span>Feb</span>
                    <span>Mar</span>
                    <span>Apr</span>
                    <span>May</span>
                    <span>Jun</span>
                    <span>Jul</span>
                    <span>Aug</span>
                    <span>Sep</span>
                    <span>Oct</span>
                    <span>Nov</span>
                    <span>Dec</span>
                </div>
            </div>
        </div>
    );
};
