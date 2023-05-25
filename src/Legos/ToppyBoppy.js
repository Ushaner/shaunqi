import '../LegosCSS/ToppyBoppy.css';
import React, { Component, useRef, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function ToppyBoppy() {
  return (
    <Container className='toppy' Fluid>
      <div>
        <Row>
          <div class="NavyBary">
            <a href="#/">Ratatoing</a>
            <a href="#/Charapoo">Rats & Humans</a>
            <a href="#/Comida">Comida</a>
            <a href="#/Everything">Everything</a>
          </div>
        </Row>
      </div>
    </Container>
  );
};
export default ToppyBoppy;
