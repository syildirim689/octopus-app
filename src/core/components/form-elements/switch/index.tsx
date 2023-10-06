import {useState} from "react";
import styles from "./switch.module.css";
import {SwitchProps} from "../../../types";

export default function Switch({register, name, text}: SwitchProps) {
    const [isOn, setIsOn] = useState<boolean>(false);
    const toggleSwitch = () => {
        setIsOn(!isOn);
        register(name, {value: !isOn});
    }
    return (
        <div className={styles.container}>
            <div className={`${styles.switch} ${isOn ? styles.on : styles.off}`} onClick={toggleSwitch}>
                <div className={`${styles.slider} ${isOn ? styles.on : styles.off}`}></div>
            </div>
            <span className={styles.span}>{text}</span>
        </div>
    );
};
