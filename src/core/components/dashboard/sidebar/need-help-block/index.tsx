import {Link} from "react-router-dom";
import styles from "./need-help-block.module.css";

export default function NeedHelpBlock() {
    return (
        <div className={styles.container}>
            <div className={styles.iconContainer}>
                <img className={styles.icon} src={"/img/icons/dashboard/help-icon.svg"} alt={"Need help?"}/>
            </div>
            <div className={styles.textBlock}>
                <h3 className={styles.h3}>Need help?</h3>
                <p className={styles.p}>Please check our docs</p>
            </div>
            <Link className={styles.link} to={"/"}>DOCUMENTATION</Link>
        </div>
    );
};
