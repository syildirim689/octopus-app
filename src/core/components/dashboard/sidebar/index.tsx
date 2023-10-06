import {filter, map} from "rambda";
import {NavLink} from "react-router-dom";
import {DashboardNavbarDataProps} from "../../../types";
import {DashboardNavbarData} from "../../../json/dashboard-navbar-data";
import styles from "./sidebar.module.css";
import NeedHelpBlock from "./need-help-block";

export default function Sidebar() {
    return (
        <div className={styles.container}>
            <div className={styles.divider}/>
            <div className={styles.sidebar}>
                {map((item: DashboardNavbarDataProps) => (
                    <NavLink className={({ isActive, isPending }) =>
                        isPending ? styles.link : isActive ? `${styles.link} ${styles.active}` : styles.link
                    }
                             to={item.url} key={item.id}>
                        <div className={styles.iconContainer}>
                            <img src={item.icon} alt={item.title} className={styles.icon}/>
                        </div>
                        <span className={styles.title}>{item.title}</span>
                    </NavLink>
                ), filter((item: DashboardNavbarDataProps) => item.category === "main", DashboardNavbarData))}
            </div>
            <div className={styles.sidebar}>
                <h2 className={styles.sidebarTitle}>ACCOUNT PAGES</h2>
                {map((item: DashboardNavbarDataProps) => (
                    <NavLink
                        className={
                        ({isActive, isPending}) =>
                            isPending ? styles.link :
                                isActive ? "active" : styles.link}
                             to={item.url} key={item.id}>
                        <div className={styles.iconContainer}>
                            <img src={item.icon} alt={item.title} className={styles.icon}/>
                        </div>
                        <span className={styles.title}>{item.title}</span>
                    </NavLink>
                ), filter((item: DashboardNavbarDataProps) => item.category === "account-pages", DashboardNavbarData))}
            </div>
            <NeedHelpBlock/>
        </div>
    );
};
