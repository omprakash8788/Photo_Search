
import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const useAxios = (param) => {
    const [response, setResponse] = useState([])
    const [isLoading, setLoading] = useState(false)
    const [error, setError] = useState('')

    axios.defaults.baseURL='https://api.unsplash.com';

    const fetchData = async(url)=>{
        try {
       setLoading(true)
       const res= await axios(url);
       setResponse(res.data.results)
            
        } catch (err) {
            setError(err)
            console.log(err);
        }
        finally{
            setLoading(false)


        }
    }

    useEffect(()=>{
       fetchData(param)

    },[param])

  return {
    response,
    isLoading,
    error,
    fetchData:url=>fetchData(url)

  }
  
}

export default useAxios