import React from 'react';
import Sidebar from 'react-sidebar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false,
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  render() {
    return (
      <Sidebar
        sidebar={<div>Contenido del Sidebar</div>}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: 'white' } }}
      >
        <button onClick={() => this.onSetSidebarOpen(true)}>
          Abrir Sidebar
        </button>
        <div>Contenido Principal</div>
      </Sidebar>
    );
  }
}

export default App;
