import SearchBar from "../../components/dashboard/search-bar";
import {Link} from "react-router-dom";
import styles from "./header-dashboard.module.css";

export default function HeaderDashboard({title}: { title: string }) {
    return (
        <header className={"flex items-center justify-between"}>
            <div className={"flex items-center gap-[103px] w-fit"}>
                <div>
                    <img src={"/img/logo/aqua-logo.svg"} alt={"logo"}/>
                </div>
                <div className={"text-xs leading-[18x]"}>
                    <span className={"text-[#A0AEC0]"}>Pages</span> / <span className={"text-[#2D3748]"}>{title}</span>
                </div>
            </div>
            <div className={"flex items-center gap-3 w-fit"}>
                <SearchBar/>
                <Link to={"/sign-in"} className={"flex items-center gap-1"}>
                    <img src={"/img/icons/dashboard/user-icon.svg"} className={styles.icon} alt={"user"}/>
                    <span className={"text-[#718096] text-xs leading-[18px] font-bold"}>Sign In</span>
                </Link>
                <Link to={"/"}>
                    <img src={"/img/icons/dashboard/settings-icon.svg"} className={styles.icon} alt={"settings"}/>
                </Link>
                <Link to={"/"}>
                    <img src={"/img/icons/dashboard/notification-icon.svg"} className={styles.icon}
                         alt={"notification"}/>
                </Link>
            </div>
        </header>
    );
};
