import { Box, Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import useNoticias from "../hooks/useNoticias"

const Formulario = () => {
    
    const categorias = [
        { value: 'general', label: 'General'},
        { value: 'business', label: 'Negocios'},
        { value: 'entertainment', label: 'Entretenimiento'},
        { value: 'health', label: 'Salud'},
        { value: 'science', label: 'Ciencia'},
        { value: 'sports', label: 'Deportes'},
        { value: 'technology', label: 'Tecnología'},
    ]

    const { categoria, handleChangeCategoria } = useNoticias()

  return (
    <form>
        <FormControl
            fullWidth
        >
            <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
            <Select
                label="Categoria"
                onChange={handleChangeCategoria}
                value={categoria}
            >
                {categorias.map((categoria) => (
                    <MenuItem key={categoria.value} value={categoria.value}>
                        {categoria.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    </form>
  )
}

export default Formulario