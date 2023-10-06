import styles from './search-bar.module.css';

export default function SearchBar() {
    return (
        <div className={styles.container}>
            <img src="/img/icons/dashboard/search-icon.svg" alt="search" className={styles.icon}/>
            <input type="text" placeholder="Type here..." className={styles.input}/>
        </div>
    );
};
