import React from 'react';
import ReactECharts from 'echarts-for-react';

const SegmentacionBarChart = ({ volumen }) => {
  // Use this data for the chart 2
  const data = [
    {
      name: 'Grupo 1',
      type: 'bar',
      stack: 'stack',
      label: {
        show: true,
        formatter: '{c}'
      },
      emphasis: {
        focus: 'series'
      },
      data: [volumen["0"][6], volumen["0"][5], volumen["0"][4], volumen["0"][3], volumen["0"][2], volumen["0"][1], volumen["0"][0]]
    },
    {
      name: 'Grupo 2',
      type: 'bar',
      stack: 'stack',
      label: {
        show: true,
        formatter: '{c}'
      },
      emphasis: {
        focus: 'series'
      },
      data: [volumen["1"][6], volumen["1"][5], volumen["1"][4], volumen["1"][3], volumen["1"][2], volumen["1"][1], volumen["1"][0]]
    },
    {
      name: 'Grupo 3',
      type: 'bar',
      stack: 'stack',
      label: {
        show: true,
        formatter: '{c}'
      },
      emphasis: {
        focus: 'series'
      },
      data: [volumen["2"][6], volumen["2"][5], volumen["2"][4], volumen["2"][3], volumen["2"][2], volumen["2"][1], volumen["2"][0]]
    },
    {
      name: 'Grupo 4',
      type: 'bar',
      stack: 'stack',
      label: {
        show: true,
        formatter: '{c}'
      },
      emphasis: {
        focus: 'series'
      },
      data: [volumen["3"][6], volumen["3"][5], volumen["3"][4], volumen["3"][3], volumen["3"][2], volumen["3"][1], volumen["3"][0]]
    }
  ];



  // Configuración del gráfico
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['Grupo 1', 'Grupo 2', 'Grupo 3', 'Grupo 4']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      max: 25, // Hasta 25 ventas
      axisLabel: {
        formatter: '{value}'
      }
    },
    yAxis: {
      type: 'category',
      data: ["De 19:00 a 22:00", "De 17:00 a 19:00",'De 15:00 a 17:00', 'De 13:00 a 15:00', 'De 11:00 a 13:00', "De 9:00 a 11:00", "De 6:00 a 9:00"]
    },
    series: data
  };

  return <ReactECharts option={option} />;
};

export default SegmentacionBarChart;