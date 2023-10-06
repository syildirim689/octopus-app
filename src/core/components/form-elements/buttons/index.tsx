import styles from "./button.module.css";

interface ButtonProps {
    text: string;
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: () => void;
}

export default function Button({text, type, onClick}: ButtonProps) {
    return (
        <button onClick={onClick} className={styles.button} type={type}>
            {text}
        </button>
    );
};
