import React from 'react'
import VentasChart from './VentasChart'
import Breadcrumb from '../Breadcrum/Breadcrum'
import { Link } from 'react-router-dom'

const Analiticas = () => {
  return (
    <section className='analiticas-main-container'>
      <article className='breadcrum'>
        <Breadcrumb />
      </article>

      <article className='analiticas-container'>
        <h1>Analítica de ventas</h1>

        <div className='categories'>
          <Link to={ "/ventas/analiticas/cafe" }>Máquina de café</Link>
          <span>|</span>
          <Link to={ "/ventas/analiticas/snacks" }>Máquina de snacks</Link>
          <span>|</span>
          <Link to={ "/ventas/analiticas/vitrina" }>Vitrina inteligente</Link>
        </div>

        <div className='graphic'>
          <VentasChart />
        </div>
      </article>
    </section>
  )
}

export default Analiticas
