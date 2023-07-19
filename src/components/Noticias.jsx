import { Grid, Pagination, Stack, Typography } from "@mui/material"
import useNoticias from "../hooks/useNoticias"
import Noticia from "./Noticia"

const Noticias = () => {

    const { noticias, totalPage, handleChangePage, page } = useNoticias()

    const totalPaginas = Math.ceil(totalPage / 10)

  return (
    <>
        <Typography
            align="center"
            marginY={5}
            variant="h3"
            component={'h2'}
        >
            Noticias
        </Typography>

        <Grid
            container
            spacing={2}
        >
            {noticias.map((noticia) => (
                <Noticia
                    key={noticia.url}
                    noticia={noticia}
                />
            ))}
        </Grid>

        <Stack 
            spacing={2}
            direction={'row'}
            justifyContent={'center'}
            alignItems={'center'}
            sx={{
                marginTop: '2rem'
            }}
        >
            <Pagination 
                count={totalPaginas}  
                color="primary"
                onChange={handleChangePage}
                page={page}
            />
        </Stack>
    </>
  )
}

export default Noticias