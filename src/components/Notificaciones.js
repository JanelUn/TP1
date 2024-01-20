import React from 'react';
import { Grid, Typography } from '@mui/material';
import Alert from '@mui/lab/Alert';

const Notificaciones = () => {
 // Aquí puedes reemplazar estos arrays con tus datos reales
 const sentNotifications = ['Usuario1', 'Usuario2'];
 const receivedNotifications = ['Usuario3', 'Usuario4'];

 return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Typography variant="h4">Enviados</Typography>
        {sentNotifications.map((user, index) => (
          <Alert key={index} severity="info">
            Contactate con {user} ha aceptado tu solicitud
          </Alert>
        ))}
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h4">Recibidos</Typography>
        {receivedNotifications.map((user, index) => (
          <Alert key={index} severity="info">
            El {user} es un potencial roommate, quiere contactarte
          </Alert>
        ))}
      </Grid>
    </Grid>
 );
};

export default Notificaciones;
