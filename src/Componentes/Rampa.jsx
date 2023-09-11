import React, { Component } from 'react';

class Rampa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elevationHeight: 0, 
    };
  }

  elevarRampa = () => {
    // Lógica para elevar la rampa, puedes ajustar la altura aquí
    const newElevation = this.state.elevationHeight + 0.1;
    this.setState({ elevationHeight: newElevation });
  };

  render() {
    return (
      <div>
        {/* Botón para elevar la rampa */}
        <button onClick={this.elevarRampa}>Elevar rampa</button>
        {/* Renderizar la rampa elevada */}
        <div style={{ position: 'relative', top: `${this.state.elevationHeight}m` }}>
          {/* Contenido de la Rampa */}
        </div>
      </div>
    );
  }
}

export default Rampa;
