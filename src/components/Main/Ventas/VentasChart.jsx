import React from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

const VentasChart = () => {

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );

    const data = {
        labels: ['L', 'M', 'X', 'J', 'V', 'S', 'L', 'M', 'X', 'J', 'V', 'S'],
        datasets: [{
          label: 'Ventas totales',
          data: [80, 70, 60, 50, 40, 30, 20, 10, 0, 10, 20, 30],
          borderColor: '#333',
          backgroundColor: 'rgba(51, 51, 51, 0.5)',
          pointRadius: 5,
          pointBackgroundColor: '#333',
          pointBorderColor: '#333',
        }, {
          label: 'Pronóstico de ventas',
          data: [90, 80, 70, 60, 50, 40, 30, 20, 10, 0, 10, 20],
          borderColor: '#000',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          pointRadius: 5,
          pointBackgroundColor: '#000',
          pointBorderColor: '#000',
        }],
      };
    
      const options = {
        scales: {
          y: {
            min: 0,
            max: 100,
            ticks: {
              stepSize: 10,
            },
          },
        },
        plugins: {
          title: {
            display: true,
            text: 'Ventas totales de los últimos 6 días  Pronóstico de ventas en los próximos 6 días',
          },
        },
      };

    return (
        <>
        <Line data={data} options={options} />
        </>
    )
}

export default VentasChart
