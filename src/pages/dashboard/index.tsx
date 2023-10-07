import {Helmet} from "react-helmet-async";
import React from "react";
import HeaderDashboard from "../../core/layout/header-dashboard";
import Sidebar from "../../core/components/dashboard/sidebar";
import styles from "./dashboard.module.css";
import DashboardContent from "./dashboard-content";

export default function DashboardPage({appTitle}: { appTitle: string }) {
    if (sessionStorage.getItem('token') === null) {
        window.location.href = '/sign-in';
    }
    const title = "Dashboard";
    return (
        <div className={styles.container}>
            <Helmet>
                <title>{title} | {appTitle}</title>
            </Helmet>
            <HeaderDashboard title={title}/>
            <div className={"flex"}>
                <Sidebar/>
                <DashboardContent/>
            </div>
        </div>
    );
};
