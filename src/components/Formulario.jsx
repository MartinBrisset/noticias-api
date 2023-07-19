import { Box, Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material"

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

  return (
    <form>
        <FormControl
            fullWidth
        >
            <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
            <Select
                label="Categoria"
            >
                {categorias.map((categoria) => (
                    <MenuItem key={categoria.value} value={categoria.value}>
                        {categoria.label}
                    </MenuItem>
                ))}
            </Select>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: 2
                }}

            >
                <Button
                    fullWidth
                    variant="contained"
                >
                    Buscar Noticias
                </Button>
            </Box>
        </FormControl>
    </form>
  )
}

export default Formulario