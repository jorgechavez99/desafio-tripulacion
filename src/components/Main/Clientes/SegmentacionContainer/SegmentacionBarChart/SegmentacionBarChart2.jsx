import React from 'react';
import ReactECharts from 'echarts-for-react';

const SegmentacionBarChart = ({ data }) => {
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
      max: 30, // Hasta 25 ventas
      axisLabel: {
        formatter: '{value}'
      }
    },
    yAxis: {
      type: 'category',
      data: ['De 18:00 a 21:00', 'De 15:00 a 18:00', 'De 12:00 a 15:00', "De 9:00 a 12:00"]
    },
    series: data
  };

  return <ReactECharts option={option} />;
};

export default SegmentacionBarChart;