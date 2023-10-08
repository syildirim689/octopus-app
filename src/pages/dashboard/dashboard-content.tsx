import styles from "./dashboard-content.module.css";
import AnalyticCards from "../../core/components/dashboard/analytic-cards";
import InfoCard from "../../core/components/dashboard/info-card";
import ActiveUsers from "../../core/components/dashboard/active-users";
import SalesOverview from "../../core/components/dashboard/sales-overview";
import Projects from "../../core/components/dashboard/projects";
import OrdersOverview from "../../core/components/dashboard/orders-overview";

export default function DashboardContent() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Dashboard</h1>
            <AnalyticCards/>
            <InfoCard/>
            <div className={styles.content}>
                <ActiveUsers/>
                <SalesOverview/>
            </div>
            <div className={styles.content}>
                <Projects/>
                <OrdersOverview/>
            </div>
        </div>
    );
};
