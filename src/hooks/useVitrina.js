import React, { useEffect, useState } from "react";
// import axios from 'axios'

export const useVitrina = (url) => {

  const vitrinaData = {
    info: {
      ubicacion: "schiller",
      maquina: "vitrina",
      categoria: "Bocadillo y sandwitch premium",
    },
    semanaAntes: {
      "2024-03-07": "2",
      "2024-03-08": "2",
      "2024-03-09": "2",
      "2024-03-10": "2",
      "2024-03-11": "2",
      "2024-03-12": "0",
    },
    prediccion: {
      "2024-03-13": "3",
      "2024-03-14": "2",
      "2024-03-15": "5",
      "2024-03-16": "2",
      "2024-03-17": "1",
      "2024-03-18": "0",
    },
  };

// const [loading, setLoading] = useState(true)
// const [object, setObject] = useState({})

try {
    // useEffect(()=>{
        // const doRequest = async () => {

        //     const response = await axios.get(url, {
        //         headers: {
        //             "Content-Type": "application/json",
        //             "x-api-key": import.meta.env.VITE_DATA_API_KEY
        //         }
        //     })

            
            const days = []
            const daysSemana = [];
            const dataSemana = [];
            const daysPrediccion = [];
            const dataPrediccion = [];

            // Object.entries(response.semanaAntes).forEach(([clave, valor]) => {
            //   daysSemana.push(clave);
            //   days.push(clave)
            //   dataSemana.push(valor);
            // });
          
            // Object.entries(response.prediccion).forEach(([clave, valor]) => {
            //   daysPrediccion.push(clave);
            //   days.push(clave)
            //   dataPrediccion.push(valor);
            // });
          
            Object.entries(vitrinaData.semanaAntes).forEach(([clave, valor]) => {
                daysSemana.push(clave);
                days.push(clave)
                dataSemana.push(valor);
              });
            
              Object.entries(vitrinaData.prediccion).forEach(([clave, valor]) => {
                daysPrediccion.push(clave);
                days.push(clave)
                dataPrediccion.push(valor);
              });

          // Comienza con los datos de dataSemana y añade ceros al final para los días de predicción
            const dataSemanaExtended = [...dataSemana, ...new Array(daysPrediccion.length).fill(0),]; 
            
          // Comienza con ceros para los días de la semana, luego los datos de predicción
            const dataPrediccionExtended = [...new Array(daysSemana.length).fill(0), ...dataPrediccion,];
            // setObject({ response, days, dataSemanaExtended, dataPrediccionExtended,})
            // setLoading(false)
        // }
         

//   doRequest()

    // },[url])
    
  

//   return {
//    loading,
//    object
//   };
  return {
    // loading,
    days,
    vitrinaData,
    dataSemanaExtended,
    dataPrediccionExtended
   };
} catch (error) {
    console.log(error)
}
  
};
