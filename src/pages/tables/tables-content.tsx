import styles from './tables-content.module.css';
import {getAllUsersByLimit} from "../../core/functions/users";
import {useEffect, useState} from "react";
import moment from "moment";

export default function TablesContent() {
    const [data, setData] = useState([]);
    useEffect(() => {
        getAllUsersByLimit(6).then((response) => {
            setData(response.users.map((user: any) => {
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
    }, []);
    console.log(data);
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Tables</h1>
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
                {data.map((user: any) => (
                    <tr key={user.id}>
                        <td>
                            <img src={user.image} alt={user.name} className={styles.image}/>
                            <div>
                                <span>{user.name}</span>
                                <span>{user.email}</span>
                            </div>
                        </td>
                        <td>
                            <span>{user.function.department}</span>
                            <span>{user.function.title}</span>
                        </td>
                        <td>{user.status ? "Online" : "Offline"}</td>
                        <td>{user.employed}</td>
                        <td>
                            <button onClick={() => console.log(user.id)} className={styles.button}>Edit</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};
