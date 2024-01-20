import React, { useState } from 'react';
import { AppBar, Box, Button, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import RoomIcon from '@mui/icons-material/Group';
import ProfileIcon from '@mui/icons-material/Person';
import HouseIcon from '@mui/icons-material/Home';
import NotificationIcon from '@mui/icons-material/Notifications';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const isMobile = useMediaQuery('(max-width:600px)');
  const handleDrawerToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
      <Box
        component="main"
        sx={{ flexGrow: 1, p:3, ml: isOpen? 240 : 80, position:'left' }}
      >
      <AppBar position="relative">
       <Toolbar>
         <IconButton edge="start" color="inherit" onClick={handleDrawerToggle}>
           <MenuIcon />
         </IconButton>
         {isMobile && <Button color="inherit">Menu</Button>}
       </Toolbar>
     </AppBar>  
        <List>
          {isOpen ? (
            <>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <RoomIcon fontSize="large" />
                  </ListItemIcon>
                  <ListItemText primary="Roomies" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <ProfileIcon fontSize="large" />
                  </ListItemIcon>
                  <ListItemText primary="Perfil" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <HouseIcon fontSize="large" />
                  </ListItemIcon>
                  <ListItemText primary="Vivienda" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <NotificationIcon fontSize="large" />
                  </ListItemIcon>
                  <ListItemText primary="Notificaciones" />
                </ListItemButton>
              </ListItem>
            </>
          ) : (
            <>
              <ListItem disablePadding>
                <ListItemButton>
                  <RoomIcon fontSize="large" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ProfileIcon fontSize="large" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <HouseIcon fontSize="large" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <NotificationIcon fontSize="large" />
                </ListItemButton>
              </ListItem>
            </>
          )}
        </List>
      </Box>
  );
};
export default Sidebar;