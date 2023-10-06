import styles from "./input.module.css"
import {InputProps} from "../../../types";

export default function Input({name, type, placeholder, label, register}: InputProps) {
    return (
        <div className={styles.container}>
            {label && <label htmlFor={name} className={styles.label}>{label}</label>}
            <input
                type={type}
                placeholder={placeholder}
                className={styles.input}
                {...register(name)}
            />
        </div>
    );
}
