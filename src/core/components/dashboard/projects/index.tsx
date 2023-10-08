import {map} from "rambda";
import styles from "./projects.module.css";
import {ProjectsProps} from "../../../types";
import {useEffect, useState} from "react";
import {getAllProductsByLimit} from "../../../functions/products";

export default function Projects() {
    const [data, setData] = useState([]);
    useEffect(() => {
        getAllProductsByLimit(6).then((response) => {
            setData(response.products.map((project: ProjectsProps) => {
                return {
                    id: project.id,
                    image: project.thumbnail,
                    companies: project.title,
                    members: project.images,
                    budget: project.price,
                    completion: Math.floor(Math.random() * 100)
                }
            }));
        });
    }, []);
    console.log(data);
    return (
        <div className={styles.container}>
            <div className={styles.titleBlock}>
                <h2 className={styles.title}>Projects</h2>
                <button>
                    <img src={"/img/icons/dashboard/three-dot-icon.svg"} alt={"three-dot-icon"}/>
                </button>
            </div>
            <div className={styles.textBlock}>
                <img src={"/img/icons/dashboard/approval-icon.svg"} alt={"approval-icon"}/>
                <div><span>30 done</span> this month</div>
            </div>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th>COMPANIES</th>
                    <th>MEMBERS</th>
                    <th>BUDGET</th>
                    <th>COMPLETION</th>
                </tr>
                </thead>
                <tbody>
                {map((project: ProjectsProps) => (
                    <tr key={project.id}>
                        <td className={styles.companiesBlock}>
                            <img src={project.image} alt={project.title}/>
                            <h4>{project.companies}</h4>
                        </td>
                        <td>
                            <div className={styles.members}>
                                {Object.values(project.members).map((member: any) => (
                                    <img title={project.title} key={member} src={member} alt={member}/>
                                ))}
                            </div>
                        </td>
                        <td className={styles.budget}>{project.budget}</td>
                        <td className={styles.completion}>
                            <span>{project.completion}%</span>
                            <div className={styles.progress}>
                                <div className={styles.progressLine} style={{width: project.completion + '%'}}/>
                            </div>
                        </td>
                    </tr>
                ), data)}
                </tbody>
            </table>
        </div>
    );
};
