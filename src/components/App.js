import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ViviendaForm from './ViviendaForm'

function App() {
  return (
    <Container maxWidth="lg" sx={{backgroundColor: 'red', minHeight:'100vh'}}>
        <Box  
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ width: '100%', minHeight: '100vh', backgroundColor:'yellow' }}>
            <ViviendaForm/>
        </Box>
    </Container>
  );
}

export default App;
