import React, { useState } from 'react';
import { Avatar, Box, Button, Container, TextField, Typography } from '@mui/material';

const Perfil = () => {
  const [description, setDescription] = useState('');

  const handleSave = () => {
    // Guardar los cambios en el servidor
  };

  return (
    <Container maxWidth="sm" style={{background: 'white'}}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: 5,
        }}
      >
        <Avatar
          alt="User"
          src="https://example.com/user-photo.jpg"
          sx={{ width: 100, height: 100, mb: 3 }}
        />
        <Typography variant="h5" component="h1" gutterBottom>
          Username
        </Typography>
        <Typography variant="body1" gutterBottom>
          Age: 25
        </Typography>
        <Typography variant="body1" gutterBottom>
          University: XYZ University
        </Typography>
        <Typography variant="body1" gutterBottom>
          Major: Computer Science
        </Typography>
        <Typography variant="body1" gutterBottom>
          District: Downtown
        </Typography>
        <TextField
          label="Description"
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          sx={{ width: '100%', mb: 3 }}
        />
        <Button variant="contained" onClick={handleSave}>
          Guardar
        </Button>
      </Box>
    </Container>
  );
};

export default Perfil;