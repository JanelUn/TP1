import Container from '@mui/material/Container';
import ViviendaForm from './ViviendaForm'
import Sidebar from 'react-sidebar';

function App() {
  return (
    <Container maxWidth="150" sx={{backgroundColor: 'grey', minHeight:'100'}}>      
          <Sidebar/>
        <div className='main-content'>
          <ViviendaForm/>
        </div>
    </Container>
  );
}

export default App;
