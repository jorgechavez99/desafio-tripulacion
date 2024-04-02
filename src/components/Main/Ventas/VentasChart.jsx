import React from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { Bar } from 'react-chartjs-2';

// const VentasChart = () => {

//   ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend
//   );

//   const arrayX = ['L', 'M', 'X', 'J', 'V', 'S', 'L', 'M', 'X', 'J', 'V', 'S'];
//   const semanas = [80, 70, 60, 50, 40, 30, 20, 10, 0, 10, 20, 30];
//   const prediccion = [90, 80, 70, 60, 50, 40, 30, 20, 10, 0, 10, 20];


//   const data = {
//     labels: arrayX,
//     datasets: [{
//       label: 'Ventas totales',
//       data: semanas,
//       borderColor: '#23AA3E',
//       backgroundColor: '#23AA3E',
//       pointRadius: 5,
//       pointBackgroundColor: '#333',
//       pointBorderColor: '#333',
//     }, {
//       label: 'Pronóstico de ventas',
//       data: prediccion,
//       borderColor: '#000',
//       backgroundColor: 'rgba(0, 0, 0, 0.5)',
//       pointRadius: 5,
//       pointBackgroundColor: '#000',
//       pointBorderColor: '#000',
//     }],
//   };

  // const options = {
  //   scales: {
  //     y: {
  //       min: 0,
  //       max: 100,
  //       ticks: {
  //         stepSize: 10,
  //       },
  //     },
  //   },
  //   plugins: {
  //     title: {
  //       display: true,
  //       text: 'Ventas totales de los últimos 6 días  Pronóstico de ventas en los próximos 6 días',
  //     },
  //   },
  // };

//   return (
//     <>
//       <Line data={data} options={options} />
//     </>
//   )
// }

// export default VentasChart


const VentasChart = () => {

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

  const arrayX = ['L', 'M', 'X', 'J', 'V', 'S', 'L', 'M', 'X', 'J', 'V', 'S'];
  const semanas = [80, 70, 60, 50, 40, 30];
  const prediccion = [90, 80, 70, 60, 50, 60];

  
  var misoptions = {
    responsive : true,
    animation : true,
    plugins : {
        legend : {
            display : false
        }
    },
    scales : {
        y : {
            min : 0,
            max : 100
        },
        x: {
            ticks: { color: '#0D0D0D'}
        }
    },
        plugins: {
      
    },
};

var midata = {
    labels: arrayX,
    datasets: [
        {
            label: 'Ventas totales de los últimos 6 días',
            data: semanas,
            backgroundColor: '#0090CB'
        },
        {
          label: 'Pronóstico de ventas en los próximos 6 días',
          data: prediccion,
          backgroundColor: '#EC8E55'
      }

    ]
};

  return (
    <>
      <Bar data={midata} options={misoptions}/>
    </>
  )
}

export default VentasChart
