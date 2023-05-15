import '../LegosCSS/Spawnpoint.css';
import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Spawnpoint() {
  return (
    <Container className="spawnpoint" fluid style={{ backgroundColor: 'aquamarine' }}>

      <div className="spoogpoint" style={{ }}>
        <Row style={{}}>
          <h1>Ratatoing</h1>
        </Row>
        <Row style={{  }}>
          <h2>The greatest movie</h2>
        </Row>
        <Row>
          <h3>By Michell Gabriel</h3>
        </Row>
      </div>
      <div>
    
      </div>

    </Container>
  );
};

export default Spawnpoint;
