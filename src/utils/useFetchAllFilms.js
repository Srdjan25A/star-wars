import { useEffect, useState } from 'react'
import FilmsService from '../services/FilmsService'

const useFetchAllFilms = () => {
    const [films, setFilms] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
       
    useEffect(()=>{
        FilmsService.getAllFilmsService()
                    .then((res) =>{
                      setFilms(res.data.results)
                      setIsLoaded(true)
                    })
                    .catch((err)=>{console.log(err)})
    }, [])
    return {films, isLoaded}
}

export default useFetchAllFilms