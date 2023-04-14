import '../Componentos Css/Spawnpoint.css';
import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Spawnpoint() {
  return (
    <Container Fluid>
      <div>
        <h1>Ratatoille</h1>
        <img class="rattitle" src="https://m.media-amazon.com/images/I/51bOQKCq1ZL._AC_UF894,1000_QL80_.jpg"
          alt="Ratatoille Title"
          height="300vh"></img>
        <p class="sus">Remy dreams of becoming a great chef, despite being a rat in a definitely rodent-phobic profession. He moves to Paris to follow his dream, and with the help of hapless garbage boy Linguini he puts his culinary skills to the test in the kitchen but he has to stay in hiding at the same time, with hilarious consequences. Remy eventually gets the chance to prove his culinary abilities to a great food critic but is the food good? A Pixar animation.</p>
        <p class="arther">Directed by Brad Bird</p>
      </div>
    </Container>
  );
};

export default Spawnpoint;
