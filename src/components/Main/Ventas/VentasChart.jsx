import React, { useEffect, useState } from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';


const VentasChart = ({ resumen }) => {

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

const daysSemana = [];
const dataSemana = [];
const daysPrediccion = [];
const dataPrediccion = [];
  
  // Object.entries(resumen.semana).forEach(([clave, valor]) => {
  //   daysSemana.push(clave);
  //   dataSemana.push(valor);
  // });

  // Object.entries(resumen.prediccion).forEach(([clave, valor]) => {
  //   daysPrediccion.push(clave);
  //   dataPrediccion.push(valor);
  // });


const datosDias = [...daysSemana, ...daysPrediccion];
 
const semana = [...dataSemana,...new Array(daysPrediccion.length).fill(0)]
const prediccion = [...new Array(daysSemana.length).fill(0),...dataPrediccion]


  // const arrayX = ['L', 'M', 'X', 'J', 'V', 'S', 'L', 'M', 'X', 'J', 'V', 'S'];
  // const prediccion = [90, 80, 70, 60, 50, 60, 90, 80, 70, 60, 50, 60];
  
  var misoptions = {
    responsive : true,
    animation : true,
    plugins : {
        legend : {
            display : true,
            position: "top",
        }
    },
    scales : {
        
        x: {
            ticks: { color: '#0D0D0D'}
        }
    },      
};

var midata = {
    labels: datosDias,
    datasets: [
       
      {
        label: 'Ventas totales de los ultimos 6 días',
        data: semana,
        backgroundColor: ['#0090CB']
    },
    {
      label: 'Pronóstico de ventas en los próximos 6 días',
      data: prediccion,
      backgroundColor:['#EC8E55']
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
