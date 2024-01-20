import React from 'react';
import { Button } from '@mui/material';
import { Container, FormControl, InputLabel, Select, MenuItem, FormHelperText, Box, Slider, FormControlLabel, Switch, Typography } from '@mui/material';

const FormularioTitulo = () => {
  return (
    <Box textAlign="center" mb={3}>
      <Typography variant="h4" component="h1" gutterBottom>
        Vivienda
      </Typography>
    </Box>
  );
};

const Formulario = () => {
  const [distrito, setDistrito] =React.useState('');
  const [habitacion, setHabitacion]=React.useState('');
  const [banos, setBanos]=React.useState('');
  const [estacionamiento, setEstacionamiento] = React.useState(false);
  const [presupuesto, setPresupuesto]= React.useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para manejar el envío del formulario
  };

  return (
    <Box>
    
    <Container maxWidth="md" style={{background: 'white'}}>
    <FormularioTitulo/>
    <form onSubmit={handleSubmit}>
      <FormControl fullWidth margin='normal'>
        <InputLabel id="distrito-label">Distrito</InputLabel>
        <Select
          labelId="distrito-label"
          id="distrito"
          value={distrito}
          label="Distrito"
          onChange={(e)=> setDistrito(e.target.value)}
          >
          <MenuItem value="Distrito1">Barranco</MenuItem>
          <MenuItem value="Distrito2">Callao</MenuItem>
          <MenuItem value="Distrito3">Chorrillos</MenuItem>
          <MenuItem value="Distrito4">Jesus Maria</MenuItem>
          <MenuItem value="Distrito5">La Molina</MenuItem>
          <MenuItem value="Distrito6">La Victoria</MenuItem>
          <MenuItem value="Distrito7">Lince</MenuItem>
          <MenuItem value="Distrito8">Magdalena del Mar</MenuItem>
          <MenuItem value="Distrito9">Miraflores</MenuItem>
          <MenuItem value="Distrito10">Pueblo Libre</MenuItem>
          <MenuItem value="Distrito11">Rimac</MenuItem>
          <MenuItem value="Distrito12">San Borja</MenuItem>
          <MenuItem value="Distrito13">San Isidro</MenuItem>
          <MenuItem value="Distrito14">San Miguel</MenuItem>
          <MenuItem value="Distrito15">Surco</MenuItem>
        </Select>
        <FormHelperText>Seleccione el distrito que desea vivir</FormHelperText>
      </FormControl>

      <FormControl fullWidth margin='normal'>
        <InputLabel id="habitacion-label">Habitaciones</InputLabel>
        <Select
          labelId="habitacion-label"
          id="habitacion"
          value={habitacion}
          label="Habitacion"
          onChange={(e)=> setHabitacion(e.target.value)}
        >
          <MenuItem value="Habitacion1">1 Habitacion</MenuItem>
          <MenuItem value="Habitacion2">2 Habitaciones</MenuItem>
          <MenuItem value="Habitacion3">3 Habitaciones</MenuItem>
        </Select>
        <FormHelperText>Seleccione la cantidad de Habitaciones</FormHelperText>
      </FormControl>

      <FormControl fullWidth margin="normal">
        <InputLabel id="banos-label">Baños</InputLabel>
        <Select
          labelId="banos-label"
          id="banos"
          value={banos}
          label="Banos"
          onChange={(e) => setBanos(e.target.value)}
        >
          <MenuItem value="Bano1">1 Baño</MenuItem>
          <MenuItem value="Bano2">2 Baños</MenuItem>
          <MenuItem value="Bano3">3 Baños</MenuItem>
        </Select>
        <FormHelperText>Selecciona la cantidad de Baños</FormHelperText>
      </FormControl>
      
      <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box>
            <Box component="span" fontSize="subtitle1.fontSize">
              ¿Desea Estacionamiento?
            </Box>
          </Box>
          <FormControlLabel
            control={
              <Switch
                checked={estacionamiento}
                onChange={(e) => setEstacionamiento(e.target.checked)}
                name="estacionamiento"
              />
            }
            label={estacionamiento ? 'Sí' : 'No'}
          />
      </Box>
      <Box display="contents" alignItems="center" justifyContent="space-between">
          <Box>
            <Box component="span" fontSize="subtitle1.fontSize">
              Presupuesto
            </Box>
          </Box>
          <Box>
            <Slider
              value={presupuesto}
              onChange={(e, newValue) => setPresupuesto(newValue)}
              valueLabelDisplay="auto"
              step={100}
              min={700}
              max={5000}
            />
          </Box>
        </Box>
      <Button variant="contained" color="primary" type="submit">
        Guardar
      </Button>
    </form>
    </Container>
    </Box>
  );
};

export default Formulario;