import React from 'react'
import Breadcrumb from "../../Breadcrum/Breadcrum"
import SegmentacionBarChart from './SegmentacionBarChart'
import SegmentacionTable from './SegmentacionTable'

// Mock data for the chart
const data = [
  {
    name: 'De 9:00 a 12:00',
    type: 'bar',
    stack: 'stack',
    label: {
      show: true,
      formatter: '{c}€'
    },
    emphasis: {
      focus: 'series'
    },
    data: [5, 3, 8, 4]
  },
  {
    name: 'De 12:00 a 15:00',
    type: 'bar',
    stack: 'stack',
    label: {
      show: true,
      formatter: '{c}€'
    },
    emphasis: {
      focus: 'series'
    },
    data: [8, 3, 6, 2]
  },
  {
    name: 'De 15:00 a 18:00',
    type: 'bar',
    stack: 'stack',
    label: {
      show: true,
      formatter: '{c}€'
    },
    emphasis: {
      focus: 'series'
    },
    data: [4, 6, 9, 7]
  },
  {
    name: 'De 18:00 a 21:00',
    type: 'bar',
    stack: 'stack',
    label: {
      show: true,
      formatter: '{c}€'
    },
    emphasis: {
      focus: 'series'
    },
    data: [6, 8, 3, 5]
  }
];

const SegmentacionContainer = () => {
  return (
    <>
      <Breadcrumb />
      <section className='mainContainer'>
        <h1>Segmentación de clientes</h1>
        
        <article className='chartContainer'>
          <h4>Horario de compra</h4>
          <p>Gasto por tramo horario y grupo</p>
          <SegmentacionBarChart data={data} />
        </article>
        <article>
          <SegmentacionTable />
        </article>
      </section>
    </>
  )
}


export default SegmentacionContainer
