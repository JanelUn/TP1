import Container from '@mui/material/Container';
import ViviendaForm from './ViviendaForm';
import Perfil from './Perfil';
import Sidebar from './Sidebar';
import Notificaciones from './Notificaciones';

function App() {
  return (
    <Container maxWidth="100" sx={{backgroundColor: 'white', minHeight:'100'}}>  
           
        <div className='main-content'>
          <Sidebar/> 
          <ViviendaForm/>
          <Perfil/>
          <Notificaciones/>
        </div>
    </Container>
  );
}

export default App;
