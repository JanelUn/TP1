import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Slider from '@mui/material/Slider';
import Sidebar from './Sidebar';

const ViviendaForm = () => {
 const [distrito, setDistrito] = useState("");
 const [habitaciones, setHabitaciones] = useState("");
 const [banos, setBanos] = useState("");
 const [estacionamiento, setEstacionamiento] = useState(false);
 const [presupuesto, setPresupuesto] = useState([700, 4000]);



 const handleSubmit = (event) => {
   event.preventDefault();
   // Aquí puedes manejar la lógica de envío del formulario
   console.log(`Distrito: ${distrito}, Habitaciones: ${habitaciones}, Estacionamiento: ${estacionamiento ? 'Sí' : 'No'}, Presupuesto: ${presupuesto[0]} - ${presupuesto[1]}`);
  };  
  const handleSliderChange = (event, newValue) => {
    setPresupuesto(newValue);
  };
 return (

  <Box minWidth='md' sx={{backgroundColor: 'purple'}}>
    <Sidebar></Sidebar>
     <form onSubmit={handleSubmit}>
     <Typography variant="h3" gutterBottom>Distrito:</Typography>
       <Select 
         required
         fullWidth
         id="distrito"
         label="Distrito"
         variant="outlined"
         value={distrito}
         onChange={(e) => setDistrito(e.target.value)}
       >
          <MenuItem value="Breña">Breña</MenuItem>
          <MenuItem value="Cercado">Cercado</MenuItem>
          <MenuItem value="Barranco">Barranco</MenuItem>
          <MenuItem value="San Luis">San Luis</MenuItem>
          <MenuItem value="La Victoria">La Victoria</MenuItem>
          <MenuItem value="Rimac">Rimac</MenuItem>
          <MenuItem value="Lince">Breña</MenuItem>
        </Select>
     <Typography variant="h3" gutterBottom>Habitaciones:</Typography>
        <Select
          required
          fullWidth
          id="habitaciones"
          label="Habitaciones"
          variant='outlined'
          value={habitaciones}
          onChange={(e)=> setHabitaciones(e.target.value)}
        >
          <MenuItem value="1 habitacion"> 1 habitacion</MenuItem>
          <MenuItem value="2 habitaciones"> 2 habitacion</MenuItem>
          <MenuItem value="3 habitaciones"> 3 habitacion</MenuItem>
          
        </Select>

     <Typography variant="h3" gutterBottom>Baños:</Typography>
        <Select
          required
          fullWidth
          id="banos"
          label="Banos"
          variant='outlined'
          value={banos}
          onChange={(e)=> setBanos(e.target.value)}
        >
          <MenuItem value="1 banos"> 1 baño</MenuItem>
          <MenuItem value="2-3 banos"> 2-3 baños</MenuItem>
          
        </Select>
     <Typography variant="h3" gutterBottom>¿Cuenta con estacionamiento?:</Typography>
     <FormControlLabel control={<Switch checked={estacionamiento} onChange={(e) => setEstacionamiento(e.target.checked)} />} />

     <Typography variant="h3" gutterBottom>Presupuesto:</Typography>
   <Slider
     value={presupuesto}
     onChange={handleSliderChange}
     valueLabelDisplay="auto"
     aria-labelledby="range-slider"
     min={700}
     max={4000 }
     step={100}
   />
       <Button type="submit" variant="contained" color="primary">
         Guardar
       </Button>
     </form>
   </Box>
 )
}
export default ViviendaForm;
