import React, { useEffect, useState } from 'react'
import useBox from '../../../hooks/useBox'

const General = () => {

  const [resultados, setResultados] = useState("")

  const { loading, result } = useBox('https://fakestoreapi.com/products/category/jewelery')


  // const prueba =()=>{

  //   Object.entries(result.objetoData).forEach(([key, value]) => {
  //     console.log(key)
  //   });
  // }
  // prueba()

  // const prueba=()=>{

  //   const resuelto=result

  //   const listaData = Object.entries(resuelto);

  //   {listaData.map(([key, value]) => {
  //     const totalDiario = value[0];
  //     const totalSemanal = value[1];
  //     const totalMensual = value[3];
  //     setResultados (
  //       <p key={key}>
  //         **{key}:**
  //         <br />
  //         - Total diario: {totalDiario}
  //         <br />
  //         - Total semanal: {totalSemanal}
  //         <br />
  //         - Total mensual: {totalMensual}
  //       </p>
  //     )
  //   })}
  // const prueba = () => {
  //   const listaData = Object.entries(result);
  //   setResultados(listaData[0])
  // }

  // useEffect(() => {
  //   prueba()
  // }, [result])

  return (
    <section className='main-ventasGeneral-container main-container'>
      {/* <pre>{JSON.stringify(resultados, null, 3)}</pre> */}
      <h1>
        Overview
      </h1>

      <div>
        {/* {
          resultados.objetoData.map(([key, value]) => {
            const totalDiario = value[0];
            const totalSemanal = value[1];
            const totalMensual = value[3];
           return(
              <p key={key}>
                **{key}:**
                <br />
                - Total diario: {totalDiario}
                <br />
                - Total semanal: {totalSemanal}
                <br />
                - Total mensual: {totalMensual}
              </p>
            )
          })
        } */}
      </div>
      <p>Resumen beneficios</p>
      <article className='resumen'>
        <div className='item-resumen'>
          <p>Total diario</p>
          <div>
            <p>565€</p>
            <p>+34%</p>
          </div>

        </div>
        <div className='item-resumen'>
          <p>Total semanal</p>
          <div>
            <p>1204€</p>
            <p>+26%</p>
          </div>
        </div>
        <div className='item-resumen'>
          <p>Total mensual</p>
          <div>
            <p>2506€</p>
            <p>+22%</p>
          </div>
        </div>
      </article>

      <article>
        <p>Productos destacados</p>
        <div>
          <p>Coca Cola Classic</p>
          <p>30u</p>
          <p>+10 Unidades vendidas con respecto a los ultimos 7 dias.</p>
        </div>
        <div>
          <p>Coca Cola Zero 33cl</p>
          <p>15%</p>
          <p>+20 Unidades vendidas con respecto a los ultimos 7 dias.</p>
        </div>
        <div>
          <p>Galletas Choco Bom</p>
          <p>30%</p>
          <p>-3 Unidades vendidas con respecto a los ultimos 7 dias.</p>
        </div>

      </article>
      <article>
        <p>Analiticas de ventas</p>


      </article>

    </section>
  )
}

export default General
