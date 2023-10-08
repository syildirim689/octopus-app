import styles from "./info-card.module.css";
import {Link} from "react-router-dom";

export default function InfoCard() {
    return (
        <div className={styles.infoCard}>
            <div className={styles.leftContent}>
                <div className={styles.text}>
                    <p>From colors, cards, typography to complex elements,
                        you will find the full documentation.</p>
                </div>
                <div className={styles.logo}>
                    <img src={"/img/logo/white-logo.svg"} alt={"Logo"}/>
                </div>
            </div>
            <div className={styles.rightContent}>
                <div className={styles.gradient}>
                    <div className={styles.content}>
                        <div className={styles.textContent}>
                            <div>
                                <h4>Work with the Rockets</h4>
                                <p>Wealth creation is an evolutionarily recent positive-sum game.
                                    It is all about who take the opportunity first.</p>
                            </div>
                            <Link to={"/"} className={styles.readMore}>
                                <span>Read more</span>
                                <img src={"/img/icons/dashboard/left-icon.svg"} alt={"Arrow"}/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
