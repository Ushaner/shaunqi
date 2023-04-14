import '../Componentos Css/ToppyBoppy.css';
import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function ToppyBoppy() {
  return (
    <Container Fluid>
    <div>
      <div class="NavyBary">
        <a href="#top">Top</a>
        <a href="#bottom">Bottom</a>
        <a href="#middle">Middle</a>
      </div>
    </div>
</Container>
  );
};

export default ToppyBoppy;