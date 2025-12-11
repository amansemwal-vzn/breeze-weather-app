import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { callback, color } from 'chart.js/helpers';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

export default function LineGraph({ labels, values, label="Forecast" }) {
    const data = {
        labels,
        datasets: [
            {
                label,
                lineColor: "#ff0000",
                pointBackgroundColor: "#00ff00",
                pointBorderColor: "#0000ff",
                data: values,
                borderWidth: 2,
                tension: 0.4,
                pointRadius: 3,
                fill: false,
            },
        ],
    };
    
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugin: {
            legend: {
                labels: {
                    color: "#ff0000",
                },
                position: "top",
            },
            tooltip: {
                titleColor: "#00ff00",
                bodyColor: "#0000ff",
                backgroundColor: "#1f2937",
                borderColor: "#fff",
                borderWidth: 1,
            },
        },
        scales: {
            x: {
                ticks: { color: "#ff0000" },
                grid: { display: false },
            },
            y: {
                grid: { drawBorder: false },
                ticks: {
                    color: "#00ff00",
                    callback: (value) => `${value}°C`,
                },
            },
        },
    };

    return (
        <div className="w-full h-64">
            <Line data={data} options={options} />
        </div>
    );
}