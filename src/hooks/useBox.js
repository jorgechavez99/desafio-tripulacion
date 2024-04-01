import { useState, useEffect } from 'react';
import axios from 'axios'

// useFetch será una función que reciba como parámetro un string con una url

const useBox = (url) => {
    const [loading, setLoading] = useState(true)
    const [result, setResult] = useState({})


    const doRequest = async () => {
        try{
            // const response = await axios.get(url, {
            //     headers: {
            //         "Content-Type": "application/json",
            //         "x-api-key": import.meta.env.VITE_DATA_API_KEY
            //     }
            // })
            // const objetoData = response.data

            const objetoData={
                "corner":"the_bridge",
                "total_diario": [565,34],
                "total_semanal": [1204,26],
                "total_mensual": [2506,22]
                }
                
          
            setResult({objetoData})
            setLoading(false)
        } catch (err) {
            console.log(err)
        }  
    }

    useEffect(() => {    
        doRequest()
    }, [url])
    
    return { loading, result }
}

export default useBox;