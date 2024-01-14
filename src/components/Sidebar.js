import React from 'react';
import './SidebarStyle.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Sección de perfil de usuario */}
      <div className="logo">
        <img src="" alt="Logo App" />
      </div>

      {/* Navegación */}
      <div className="navigation">
        {/* Enlace del dashboard */}
        <div className="nav-link">
          <span>Roommies</span>
        </div>

        {/* Otros enlaces de navegación */}
        <div className="nav-link">
          <span>Perfil</span>
        </div>
        <div className="nav-link">
          <span>Vivienda</span>
        </div>
        <div className="nav-link">
          <span>Habitacion</span>
        </div>
      </div>

      {/* Sección de notificaciones */}
      <div className="notifications">
        <button>View Notifications</button>
      </div>

      {/* Sección de configuraciones */}
      <div className="settings">
        <button>Settings</button>
      </div>
      <div className="user-info">
          <h3> Nombre de USuario </h3>
      </div>
      
      <div className="logout">
        <button>Log Out</button>
      </div>
    </div>
  );
};

export default Sidebar;
