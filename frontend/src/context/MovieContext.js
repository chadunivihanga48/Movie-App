import { createContext, useState, useContext, useEffect} from "react";

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({children}) => {
    const [favourite, setFavourite] = useState(() => {
        const storedFavs = localStorage.getItem("favourite")
        return storedFavs ? JSON.parse(storedFavs) : []
    })

    useEffect(() => {
        localStorage.setItem('favourite', JSON.stringify(favourite))
    }, [favourite])

    const addToFavourite = (movie) => {
        setFavourite(prev => [...prev, movie])
    }

    const removeFromFavourite = (movieId) => {
        setFavourite(prev => prev.filter(movie => movie.id !== movieId))
    }

    const isFavourite = (movieId) => {
        return favourite.some(movie => movie.id === movieId)
    }

    const value = {
        favourite,
        addToFavourite,
        removeFromFavourite,
        isFavourite
    }
    return<MovieContext.Provider value = {value}>
        {children}
    </MovieContext.Provider>
}