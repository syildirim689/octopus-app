import styles from './tables-content.module.css';
import {getAllUsersByLimit} from "../../core/functions/users";
import {useEffect, useState} from "react";
import moment from "moment";
import {Product, User} from "../../core/types";
import {getAllProductsByLimit} from "../../core/functions/products";
import {map} from 'rambda';

export default function TablesContent() {
    const [authors, setAuthors] = useState([]);
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        getAllUsersByLimit(6).then((response) => {
            setAuthors(response.users.map((user: User) => {
                return {
                    id: user.id,
                    image: user.image,
                    name: user.firstName + ' ' + user.lastName,
                    email: user.email,
                    function: {
                        department: user.company.department,
                        title: user.company.title
                    },
                    status: Math.random() < 0.5,
                    employed: moment(user.birthDate).format("DD/MM/YY")
                }
            }));
        });
        getAllProductsByLimit(5).then((response) => {
            setProjects(response.products.map((project: Product) => {
                const randomStatusIndex = Math.floor(Math.random() * 3);
                const statusOptions = ["Working", "Canceled", "Done"];
                const randomStatus = statusOptions[randomStatusIndex];
                return {
                    id: project.id,
                    image: project.thumbnail,
                    companies: project.title,
                    budget: project.price,
                    status: randomStatus,
                    completion: Math.floor(Math.random() * 100)
                }
            }));
        });
    }, []);
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Tables</h1>
            <div className={styles.content}>
                <h2 className={styles.subTitle}>Authors Table</h2>
                <table className={styles.table}>
                    <thead>
                    <tr>
                        <th>AUTHOR</th>
                        <th>FUNCTION</th>
                        <th>STATUS</th>
                        <th>EMPLOYED</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {map((user: User) => (
                        <tr key={user.id}>
                            <td className={styles.nameBlock}>
                                <img src={user.image} alt={user.name} className={styles.image}/>
                                <div>
                                    <h4>{user.name}</h4>
                                    <span>{user.email}</span>
                                </div>
                            </td>
                            <td className={styles.functionBlock}>
                                <h4>{user.function.department}</h4>
                                <span>{user.function.title}</span>
                            </td>
                            <td className={styles.status}>
                                {user.status ? (
                                    <span className={styles.onLine}>Online</span>
                                ) : (
                                    <span className={styles.offLine}>Offline</span>
                                )}
                            </td>
                            <td className={styles.employed}>{user.employed}</td>
                            <td className={styles.actionsBlock}>
                                <button onClick={() => console.log(user.id)} className={styles.button}>Edit</button>
                            </td>
                        </tr>
                    ), authors)}
                    </tbody>
                </table>
            </div>
            <div className={styles.content}>
                <h2 className={styles.subTitle}>Projects</h2>
                <div className={styles.textBlock}>
                    <img src={"/img/icons/dashboard/approval-icon.svg"} alt={"approval-icon"}/>
                    <div><span>30 done</span> this month</div>
                </div>
                <table className={styles.table}>
                    <thead>
                    <tr>
                        <th>COMPANIES</th>
                        <th>BUDGET</th>
                        <th>STATUS</th>
                        <th>COMPLETION</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {map((project: Product) => (
                        <tr key={project.id}>
                            <td className={styles.companiesBlock}>
                                <img src={project.image} alt={project.title}/>
                                <h4>{project.companies}</h4>
                            </td>
                            <td className={styles.budget}>{project.budget}</td>
                            <td className={styles.statusText}>{project.status}</td>
                            <td className={styles.completion}>
                                <span>{project.completion}%</span>
                                <div className={styles.progress}>
                                    <div className={styles.progressLine} style={{width: project.completion + '%'}}/>
                                </div>
                            </td>
                            <td className={styles.iconBlock}>
                                <button className={styles.icon} onClick={() => console.log(project.id)}>
                                    <img src={"/img/icons/dashboard/three-dot-icon.svg"} alt={project.companies}/>
                                </button>
                            </td>
                        </tr>
                    ), projects)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
