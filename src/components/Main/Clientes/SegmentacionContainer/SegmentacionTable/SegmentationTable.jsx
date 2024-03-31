import React from 'react';

const SegmentacionTable = () => {
  //Mock data for the table
  const rows = [
    { Grupo: '01', Perfil: 'Muy habituales', 'Volumen clientes': '6% (22 clientes)', 'Hora punta': '13:30 - 14:30', 'Tipo Producto': 'Snacks', 'Más consumidos': 'Galletas (99 unidades)\nBebida carbonatada (99 unidades)\nSnack salado (78 unidades)'} ,
    { Grupo: '02', Perfil: 'Esporádicos', 'Volumen clientes': '6% (22 clientes)', 'Hora punta': '13:30 - 14:30', 'Tipo Producto': 'Snacks', 'Más consumidos': 'Galletas (99 unidades)\nBebida carbonatada (99 unidades)\nSnack salado (78 unidades)' },
    { Grupo: '03', Perfil: 'Esporádicos', 'Volumen clientes': '6% (22 clientes)', 'Hora punta': '13:30 - 14:30', 'Tipo Producto': 'Snacks', 'Más consumidos': 'Galletas (99 unidades)\nBebida carbonatada (99 unidades)\nSnack salado (78 unidades)' },
    { Grupo: '04', Perfil: 'Esporádicos', 'Volumen clientes': '6% (22 clientes)', 'Hora punta': '13:30 - 14:30', 'Tipo Producto': 'Snacks', 'Más consumidos': 'Galletas (99 unidades)\nBebida carbonatada (99 unidades)\nSnack salado (78 unidades)' },
  ];

  return (
    <table className='segmentationTable'>
      <thead id="tableHead">
        <tr>
          <th>Grupo</th>
          <th>Perfil</th>
          <th>Volumen clientes</th>
          <th>Hora punta</th>
          <th>Tipo Producto</th>
          <th>Más consumidos</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            <td>{row.Grupo}</td>
            <td>{row.Perfil}</td>
            <td>{row['Volumen clientes']}</td>
            <td>{row['Hora punta']}</td>
            <td>{row['Tipo Producto']}</td>
            <td>{row['Más consumidos']}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};


export default SegmentacionTable;
