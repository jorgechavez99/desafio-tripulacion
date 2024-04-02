import React from 'react';

const SegmentacionTable = ({ descripcion, top }) => {

  const rows = [
    { Grupo: '01', Perfil: descripcion[0].Perfil, 'Volumen clientes': descripcion[0].Porcentaje, "Hora punta": descripcion[0]["Hora punta"], 'Tipo Producto': descripcion[0].Tipo, 'Más consumidos': top[0]["Nombre_Categoria"] + " (" + top[0]["Total_Ventas"] + " unidades)," + top[1]["Nombre_Categoria"] + " (" + top[1]["Total_Ventas"] + "  unidades)," + top[2]["Nombre_Categoria"] + " (" + top[2]["Total_Ventas"] + "  unidades)", "Frecuencia" : descripcion[0].Frecuencia },
    { Grupo: '02', Perfil: descripcion[1].Perfil, 'Volumen clientes': descripcion[1].Porcentaje, "Hora punta": descripcion[1]["Hora punta"], 'Tipo Producto': descripcion[1].Tipo, 'Más consumidos': top[3]["Nombre_Categoria"] + " (" + top[3]["Total_Ventas"] + " unidades)," + top[4]["Nombre_Categoria"] + " (" + top[4]["Total_Ventas"] + "  unidades)," + top[5]["Nombre_Categoria"] + " (" + top[5]["Total_Ventas"] + "  unidades)", "Frecuencia" : descripcion[1].Frecuencia   },
    { Grupo: '03', Perfil: descripcion[2].Perfil, 'Volumen clientes': descripcion[2].Porcentaje, "Hora punta": descripcion[2]["Hora punta"], 'Tipo Producto': descripcion[2].Tipo, 'Más consumidos': top[6]["Nombre_Categoria"] + " (" + top[6]["Total_Ventas"] + " unidades)," + top[7]["Nombre_Categoria"] + " (" + top[7]["Total_Ventas"] + "  unidades)," + top[8]["Nombre_Categoria"] + " (" + top[8]["Total_Ventas"] + "  unidades)", "Frecuencia" : descripcion[2].Frecuencia  },
    { Grupo: '04', Perfil: descripcion[3].Perfil, 'Volumen clientes': descripcion[3].Porcentaje, "Hora punta": descripcion[3]["Hora punta"], 'Tipo Producto': descripcion[3].Tipo, 'Más consumidos': top[9]["Nombre_Categoria"] + " (" + top[9]["Total_Ventas"] + " unidades)," + top[10]["Nombre_Categoria"] + " (" + top[10]["Total_Ventas"] + "  unidades)," + top[11]["Nombre_Categoria"] + " (" + top[11]["Total_Ventas"] + "  unidades)", "Frecuencia" : descripcion[3].Frecuencia  },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Grupo</th>
          <th>Perfil</th>
          <th>Volumen clientes</th>
          <th>Hora Punta</th>
          <th>Tipo Producto</th>
          <th>Más consumidos</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index} title={`Frecuencia: ${row.Frecuencia}`}>
            <td id={"color"+row.Grupo}>{row.Grupo}</td>
            <td>{row.Perfil}</td>
            <td>{row['Volumen clientes']}</td>
            <td>{row["Hora punta"]}</td>
            <td>{row['Tipo Producto']}</td>
            <td  style={{ width: '300px' }}>{row['Más consumidos'].split(',').map((item, i) => (
              <span key={i}>{item}</span>
              ))}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};


export default SegmentacionTable;