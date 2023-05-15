import '../LegosCSS/Helmet.css';
import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Helmet() {
    return (
        <Container class="Helmet" Fluid>
            <Row>
                <div class="leggings">
                    <h1>Characters</h1>
                    <h2>Rammus</h2>
                    <p class="RamundoP">Rammus is a little tiny goofy rat that wishes to become a great cook. His family saw his dream and were like no you suck. He is a kind and nice rat with many capabilites as a chef.</p>
                </div>
            </Row>
        </Container>
    );
};

export default Helmet;


