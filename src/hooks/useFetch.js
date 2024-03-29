import { useState, useEffect } from 'react';
import axios from 'axios'

// useFetch será una función que reciba como parámetro un string con una url

const useFetch = (url) => {
    const [loading, setLoading] = useState(true)
    const [result, setResult] = useState({})

    useEffect(() => {
        const doRequest = async () => {
            try{
                const response = await axios.get(url, {
                    headers: {
                        "Content-Type": "application/json",
                        "x-api-key": import.meta.env.VITE_DATA_API_KEY
                    }
                })

                const objetoData = response.data.reduce((acumulador, objetoActual) => {
                    return { ...acumulador, ...objetoActual }
                  })
              
                  let daysArray = [];
                  let predictionsArray = [];
              
                  const clavesExcluidas = ["ubicacion", "maquina", "producto"];
              
                  Object.entries(objetoData).forEach(([clave, valor]) => {
                    if (!clavesExcluidas.includes(clave)) {
                      daysArray.push(clave);
                      predictionsArray.push(valor);
                    }})

                setResult({ objetoData, daysArray, predictionsArray })
                setLoading(false)
            } catch (err) {
                console.log(err)
            }  
        }

        doRequest()
    }, [url])
    
    return { loading, result }
}

export default useFetch;