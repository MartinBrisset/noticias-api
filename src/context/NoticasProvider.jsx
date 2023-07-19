import axios from "axios";
import { createContext, useEffect, useState } from "react";


const NoticiasContext = createContext();

const NoticiasProvider = ({ children }) => {
    const [categoria, setCategoria] = useState('general')
    const [noticias, setNoticias] = useState([])
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(0)

    useEffect(() => {
      const consultarAPI = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&pageSize=10&apiKey=${import.meta.env.VITE_API_KEY}`

        const { data } = await axios.get(url)

        setNoticias(data.articles)
        setTotalPage(data.totalResults)
        setPage(1)
      }
        consultarAPI()
    }, [categoria])

    useEffect(() => {
      const consultarAPI = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&pageSize=10&page=${page}&apiKey=${import.meta.env.VITE_API_KEY}`

        const { data } = await axios.get(url)

        setNoticias(data.articles)
        setTotalPage(data.totalResults)
      }
        consultarAPI()
    }, [page])
    

    const handleChangeCategoria = (e) => {
        setCategoria(e.target.value)
    }

    const handleChangePage = (e, value) => {
        setPage(value)
    }

    return (
        <NoticiasContext.Provider 
            value={{
                categoria,
                handleChangeCategoria,
                noticias,
                totalPage,
                page,
                handleChangePage

            }}
        >
           {children}
        </NoticiasContext.Provider>
    );
}

export { NoticiasProvider };
export default NoticiasContext;