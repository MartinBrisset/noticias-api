import { useContext } from "react"
import NoticiasContext from "../context/NoticasProvider";

const useNoticias = () => {
    return useContext(NoticiasContext);
}

export default useNoticias;