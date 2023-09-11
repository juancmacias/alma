import React, { Component } from 'react';

class Puente extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elevationHeight: 0.5, // La altura de elevación actual
    };
  }

  elevarPuente = () => {
    // Lógica para elevar Puente, puedes ajustar la altura aquí
    const newElevation = this.state.elevationHeight + 1;
    this.setState({ elevationHeight: newElevation });
  };

  render() {
    return (
      <div>
        {/* Botón para elevar Puente */}
        <button onClick={this.elevarPuente1}>Elevar Puente1</button>
        {/* Renderizar Puente1 elevado */}
        <div style={{ position: 'relative', top: `${this.state.elevationHeight}m` }}>
          {/* Contenido de Puente */}
        </div>
      </div>
    );
  }
}

export default Puente;
