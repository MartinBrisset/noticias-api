import { Container, Grid, Typography } from "@mui/material";
import Formulario from "./components/Formulario";
import { NoticiasProvider } from "./context/NoticasProvider";
import Noticias from "./components/Noticias";

function App() {

  return (
    <NoticiasProvider>
      <Container >
        <header>
          <Typography align="center" component="h1" marginY={5} variant="h3">
            Buscador de Noticias
          </Typography>
        </header>
      <Grid 
        container
        justifyContent="center"
        direction="row"
        alignItems="center"
      >
        <Grid item md={6} xs={12}>
          <Formulario />
        </Grid>
      </Grid>

      <Noticias />

      </Container>
    </NoticiasProvider>
  )
}

export default App
