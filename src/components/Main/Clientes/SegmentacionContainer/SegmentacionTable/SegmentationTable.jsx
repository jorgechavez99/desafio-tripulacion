import React from 'react';

const SegmentacionTable = ({descripcion, top}) => {

  const rows = [
    { Grupo: '01', Perfil: descripcion[0].Perfil, 'Volumen clientes': descripcion[0].Porcentaje, 'Hora punta': '13:30 - 14:30', 'Tipo Producto': descripcion[0].Tipo, 'Más consumidos': top[0]["Nombre_Categoria"]+" (" + top[0]["Total_Ventas"] + " unidades)\n"+top[1]["Nombre_Categoria"]+" (" + top[1]["Total_Ventas"] + "  unidades)\n"+top[2]["Nombre_Categoria"]+" (" + top[2]["Total_Ventas"] + "  unidades)"} ,
    { Grupo: '02', Perfil: descripcion[1].Perfil, 'Volumen clientes': descripcion[1].Porcentaje, 'Hora punta': '13:30 - 14:30', 'Tipo Producto': descripcion[1].Tipo, 'Más consumidos': top[3]["Nombre_Categoria"]+" (" + top[3]["Total_Ventas"] + " unidades)\n"+top[4]["Nombre_Categoria"]+" (" + top[4]["Total_Ventas"] + "  unidades)\n"+top[5]["Nombre_Categoria"]+" (" + top[5]["Total_Ventas"] + "  unidades)" },
    { Grupo: '03', Perfil: descripcion[2].Perfil, 'Volumen clientes': descripcion[2].Porcentaje, 'Hora punta': '13:30 - 14:30', 'Tipo Producto': descripcion[2].Tipo, 'Más consumidos': top[6]["Nombre_Categoria"]+" (" + top[6]["Total_Ventas"] + " unidades)\n"+top[7]["Nombre_Categoria"]+" (" + top[7]["Total_Ventas"] + "  unidades)\n"+top[8]["Nombre_Categoria"]+" (" + top[8]["Total_Ventas"] + "  unidades)" },
    { Grupo: '04', Perfil: descripcion[3].Perfil, 'Volumen clientes': descripcion[3].Porcentaje, 'Hora punta': '13:30 - 14:30', 'Tipo Producto': descripcion[3].Tipo , 'Más consumidos': top[9]["Nombre_Categoria"]+" (" + top[9]["Total_Ventas"] + " unidades)\n"+top[10]["Nombre_Categoria"]+" (" + top[10]["Total_Ventas"] + "  unidades)\n"+top[11]["Nombre_Categoria"]+" (" + top[11]["Total_Ventas"] + "  unidades)"},
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