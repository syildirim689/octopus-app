import styles from "./sales-overview.module.css";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    LineController,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import {LineElement} from 'chart.js';
import {Line} from 'react-chartjs-2';
import 'chart.js/auto';

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineController,
    Title,
    Tooltip,
    Legend,
    LineElement
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
    },
    pointRadius: 0,
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', "Nov", "Dec"];

export const data = {
    labels,
    datasets: [
        {
            data: labels.map(() => Math.floor(Math.random() * 500)),
            borderColor: 'rgba(79, 209, 197, 1)',
            backgroundColor: 'rgba(79, 209, 197, 0.2)',
            fill: true,
        },
        {
            data: labels.map(() => Math.floor(Math.random() * 500)),
            borderColor: 'rgba(45, 55, 72, 1)',
            backgroundColor: 'rgba(45, 55, 72, 0.2)',
            fill: true,
        },
    ],
};

export default function SalesOverview() {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Sales overview</h3>
            <div className={styles.text}>
                <span>(+5) more</span> in 2021
            </div>
            <div className={styles.chart}>
                <Line className={"!h-[260px] !w-full"} options={options} data={data}/>
            </div>
        </div>
    );
};
