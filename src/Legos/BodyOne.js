import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

class BodyOne extends Component {
  render() {
    return (
      <Container fluid>
        <Row style={{ height: '10vh' }}></Row>
        <Row style={{ backgroundColor: 'red' }}>
          <Col md={{ span: 4, offset: 2 }}>
            <h1 className='test'>Hi we are ShaunQi</h1>
            <h2 className='test2'>Hello World</h2>
            <p className='test3'>Filler TextFiller TextFiller TextFiller TextFiller TextFiller TextFiller TextFiller Text</p>
            <button>Click Me</button>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default BodyOne