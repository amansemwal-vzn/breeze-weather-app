import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  plugins,
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

export default function LineGraph({ forecastData, forecastLabel }) {
   
    const data = {
        labels: forecastLabel,
        datasets: [
            {
                fill: true,
                label: "Temperature",
                data: forecastData,
                borderColor: '#3B82F6',
                backgroundColor: (context) => {
                    const chart = context.chart;
                    const { ctx, chartArea } = chart;

                    if (!chartArea) return null;

                    const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
                    gradient.addColorStop(0, "#BBDDFF");
                    gradient.addColorStop(1, "rgba(59, 130, 246, 0");

                    return gradient;
                },
                tension: 0.6,
                pointRadius: 3,
                borderWidth: 2,
            },
        ],
    };
    
    const weatherOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: false,
            tooltip: {
                enabled: true,
                backgroundColor: '#2D3748',
                titleColor: '#FFFFFF',
                bodyColor: '#FFFFFF',
                bodyFont: {
                    size: 14,
                    weight: 'bold',
                },
                displayColors: false,
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    color: '#666',
                },
            },
            y: {
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)',
                },
                ticks: {
                    color: '#666',
                },
            },
        },
    };

    return (
        <div className="w-full h-64 bg-white/2 p-4 rounded-lg shadow-sm hover:shadow-md">
            <Line data={data} options={weatherOptions} />
        </div>
    );
}