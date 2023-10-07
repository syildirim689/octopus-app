import {Helmet} from "react-helmet-async";
import React from "react";
import HeaderDashboard from "../../core/layout/header-dashboard";
import Sidebar from "../../core/components/dashboard/sidebar";
import styles from './tables.module.css';
import TablesContent from "./tables-content";

export default function TablesPage({appTitle}: { appTitle: string }) {
    if (sessionStorage.getItem('token') === null) {
        window.location.href = '/sign-in';
    }
    const title = `Tables`;
    return (
        <div className={styles.container}>
            <Helmet>
                <title>{title} | {appTitle}</title>
            </Helmet>
            <HeaderDashboard title={title}/>
            <div className={"flex"}>
                <Sidebar/>
                <TablesContent/>
            </div>
        </div>
    );
};
