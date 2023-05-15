import '../LegosCSS/ToppyBoppy.css';
import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function ToppyBoppy() {
  return (
    <Container className='toppy' Fluid>
      <div>
        <Row>
          <div class="NavyBary">
            <a href="#top">Ratatoing</a>
            <a href="#bottom">Rats & Humans</a>
            <a href="#middle">Comida</a>
            <a href="#Everything">Everything</a>
          </div>
        </Row>
      </div>
    </Container>
  );
};

export default ToppyBoppy;