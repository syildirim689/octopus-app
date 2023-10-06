import {map} from "rambda";
import Container from "../../components/container";
import {NavbarData} from "../../json/navbar-data";
import {NavbarDataProps} from "../../types";
import {Link} from "react-router-dom";
import styles from "./header.module.css";

export default function HeaderAlternative() {
    return (
        <header className={styles.header}>
            <Container className={styles.container}>
                <div className={styles.mainBlock}>
                    <Link to={"/"}>
                        <img src={"/img/logo/white-logo.svg"} alt={"logo"} className={styles.logo}
                        />
                    </Link>
                    <div className={styles.linkGroup}>
                        {map((item: NavbarDataProps) => (
                            <Link to={item.url} key={item.id} className={styles.link}>
                                <img src={item.icon} alt={item.title} className={styles.icon}/>
                                <span className={styles.title}>{item.title}</span>
                            </Link>
                        ), NavbarData)}
                    </div>
                    <Link className={styles.button} to={"/"}>Free Download</Link>
                </div>
            </Container>
        </header>
    );
};
