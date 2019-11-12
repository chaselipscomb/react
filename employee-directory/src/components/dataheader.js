import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


  const borders = {
    height: '80px',
    padding: '25px'
  };
  const text = {
      textAlign: 'center'
  }

function dataheader() {
    return (
        <React.Fragment>
            <Container style={borders}>
                <Row>
                    <Col style={text}>Image</Col>
                    <Col style={text}>Name</Col>
                    <Col style={text}>Phone</Col>
                    <Col style={text}>Email</Col>
                    <Col style={text}>DOB</Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}

export default dataheader;



