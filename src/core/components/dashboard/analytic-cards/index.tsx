import {map} from "rambda";
import {AnalyticCardsDataProps} from "../../../types";
import styles from "./analytic-cards.module.css";
import {AnalyticCardsData} from "../../../json/analytic-cards-data";

export default function AnalyticCards() {
    return (
        <div className={styles.container}>
            {map((card: AnalyticCardsDataProps) => (
                <div key={card.id} className={styles.card}>
                    <div className={styles.text}>
                        <h3>{card.title}</h3>
                        <div>
                            <h4>{card.value}</h4>
                            {card.rate
                                ? <span className={styles.positive}>{card.percent}</span>
                                : <span className={styles.negative}>{card.percent}</span>
                            }
                        </div>
                    </div>
                    <div className={styles.iconContainer}>
                        <img src={card.icon} alt={card.title}/>
                    </div>
                </div>
            ), AnalyticCardsData)}
        </div>
    );
};
